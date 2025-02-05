import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import {getImagesUrlForHomeScroller} from "../../services/home"
import { useQuery } from "@tanstack/react-query"
import Autoplay from "embla-carousel-autoplay"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Skeleton } from "../ui/skeleton"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function IntroductionSection() {
  const { status, data: urls} = useQuery({queryKey:["imagesUrlsForHomeScroller"], queryFn: getImagesUrlForHomeScroller})

  const navigate = useNavigate();
  const [titleQuery, setTitleQuery] = useState("")

  return (
    <div className="pt-20">
      <div className="absolute z-20 mx-auto w-10/12 sm:w-full left-0 right-0 flex">
        <div className="mx-auto mt-10 sm:mt-6 md:mt-8 lg:mt-0 xl:mt-5 2xl:mt-10">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold ">Find your next movies</h1>
          <form onSubmit={(e) => {e.preventDefault(); navigate(`/search?title=${titleQuery}`)}}>
          <Input placeholder="Search by title..." className="bg-white mt-5 rounded-full" value={titleQuery} onChange={(e) => setTitleQuery(e.target.value)}/>
          <div className="w-full text-center">
            <Button type="submit" variant="default" className="text-white text-2xl mt-2 pb-3 bg-transparent rounded-full hover:bg-violet-700 backdrop-blur-lg" disabled={titleQuery==""}>Search</Button>
          </div>
          </form>
        </div>
      </div>
      <Carousel className=""
      opts={{loop: true, watchDrag:false, align: "center" }} 
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}>
        <CarouselContent className="-ml-0 gap-0">
          {
            (status=="success") &&
            urls.map((url: string) => (
              <CarouselItem className="opacity-30 px-0 basis-11/12 sm:basis-1/2 md:basis-1/2 lg:basis-1/4" key={url}>
                <img draggable="false" src={`https://image.tmdb.org/t/p/w500/${url}`} alt="" className="blur-sm" width={400} height={240} loading="lazy"/>
              </CarouselItem>
            ))
          }
          {
            (status!="success") &&
            [...Array(10)].map((_, index) => (
              <Skeleton className="h-[200px] w-[500px] rounded-xl" key={index}/>
              
            ))
          }
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default IntroductionSection
