"use client"

import {ImCross} from "react-icons/im";
import {useState} from "react";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Header() {
    const [burgerMenu, setBurgerMenu] = useState<boolean>(false)

    const menuBurger = () => {
        const menu = document.getElementById("burger-menu")
        if (!menu) return

        if (!burgerMenu) {
            menu.style.display = "flex"
            document.body.style.overflow = "hidden"

            setBurgerMenu(true)
        } else {
            menu.style.display = "none"
            document.body.style.overflow = "auto"

            setBurgerMenu(false)
        }
    }

    return (
        <div id={"header"}
             className={"cursor-default fixed w-full flex items-center px-96 py-5 bg-[#3c403f] justify-between max-2xl:px-60 max-xl:px-10 z-20"}>
            <a href={"/"} className={"flex items-center gap-x-5"}>
                <img src={"/logo.svg"} alt={"logo"} width={70} height={70}/>
                <h1 className={"uppercase font-bold text-2xl max-md:hidden"}>Rogue Audiovisuel</h1>
            </a>
            <div className={"flex gap-x-3 max-md:hidden"}>
                <a href={"#home"}
                      className={"uppercase font-semibold text-lg hover:underline underline-offset-8 cursor-pointer"}>accueil</a>
                <a href={"#first"} className={"uppercase font-semibold text-lg hover:underline underline-offset-8 cursor-pointer"}>à
                    propos</a>
                <a href={"#service"}
                      className={"uppercase font-semibold text-lg hover:underline underline-offset-8 cursor-pointer"}>nos
                    services</a>
                <a href={"#vitrine"}
                      className={"uppercase font-semibold text-lg hover:underline underline-offset-8 cursor-pointer"}>vitrine</a>
                <a href={"#galery"}
                      className={"uppercase font-semibold text-lg hover:underline underline-offset-8 cursor-pointer"}>galerie</a>
            </div>
            <p className={"p-4 rounded-md md:hidden scale-[2.5]"}
               onClick={menuBurger}><HiMenuAlt3 /></p>
            <div
                id={"burger-menu"}
                className={"flex-col gap-x-3 w-screen h-screen fixed top-0 left-0 justify-center items-center hidden backdrop-blur backdrop-brightness-50 gap-y-14"}>
                <p className={"p-4 bg-red-500 absolute top-0 right-0 m-5 rounded-md"}
                   onClick={menuBurger}><ImCross/></p>
                <a href={"#home"} onClick={menuBurger}
                      className={"uppercase font-semibold text-3xl focus:underline underline-offset-8"}>accueil</a>
                <a href={"#first"} onClick={menuBurger}
                      className={"uppercase font-semibold text-3xl focus:underline underline-offset-8"}>à
                    propos</a>
                <a href={"#service"} onClick={menuBurger}
                      className={"uppercase font-semibold text-3xl focus:underline underline-offset-8"}>nos
                    services</a>
                <a href={"#vitrine"} onClick={menuBurger}
                      className={"uppercase font-semibold text-3xl focus:underline underline-offset-8"}>vitrine</a>
                <a href={"#gallery"} onClick={menuBurger}
                      className={"uppercase font-semibold text-3xl focus:underline underline-offset-8"}>galerie</a>
            </div>
        </div>
    )
}
