import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,

} from "@/components/ui/navigation-menu"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

import Hamburger from 'hamburger-react'

import { useState } from "react"

function NavBar() {
    const [navMenuIsOpen, setNavMenuIsOpen] = useState(false)

    return (
    <div className="pt-2 sm:py-4 px-2 fixed top-0 z-40 w-screen bg-main-gradient ">
    <nav className="flex container mx-auto">
        <Link to="/">
            <span className="text-white text-3xl font-bold">FILMFINDER</span>
        </Link>
        <NavigationMenu className="pl-16 hidden sm:block">
        <NavigationMenuList>
            <NavigationMenuItem>
            <Link to="/">
                <Button variant="link" className="text-white text-2xl" tabIndex={-1}>Home</Button>
            </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <Link to="/otro">
                <Button variant="link" className="text-white text-2xl" tabIndex={-1}>Otro</Button>
            </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <Link to="/otro">
                <Button variant="link" className="text-white text-2xl" tabIndex={-1}>Otro</Button>
            </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <Link to="/otro">
                <Button variant="link" className="text-white text-2xl" tabIndex={-1}>Otro</Button>
            </Link>
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>

        <div className="sm:hidden ml-auto">
            <div className="relative -top-1">
                <Hamburger size={20} color="white" toggled={navMenuIsOpen} toggle={setNavMenuIsOpen}/>
            </div>
            <Sheet open={navMenuIsOpen} onOpenChange={setNavMenuIsOpen}>
                <SheetContent side="left" className="w-[250px] bg-secondary-gradient border-black pt-3">
                    <SheetHeader>
                        <SheetTitle className="text-white text-left">NAVIGATION MENU</SheetTitle>
                    </SheetHeader>
                    <div className="w-full text-center py-4">
                        <Link to="/" onClick={() => setNavMenuIsOpen(false)}>
                            <span className=" text-white text-xl">HOME</span>
                        </Link>
                    </div>
                    <div className="w-full text-center py-4">
                        <Link to="/otro" onClick={() => setNavMenuIsOpen(false)}>
                            <span className=" text-white text-xl">OTRO</span>
                        </Link>
                    </div>
                    <div className="w-full text-center py-4">
                        <Link to="/otro" onClick={() => setNavMenuIsOpen(false)}>
                            <span className=" text-white text-xl">OTRO</span>
                        </Link>
                    </div>
                    
                    
                    
                </SheetContent>
            </Sheet>
        </div>
    </nav>
    </div>
    )
}

export default NavBar
