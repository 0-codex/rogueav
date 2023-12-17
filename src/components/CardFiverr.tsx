import React from "react";
import {TbClockHour3, TbReload} from "react-icons/tb";
import {FaCheck} from "react-icons/fa";

function Card({ children }: {children: React.ReactNode}) {
 return (
     <div className={"text-black flex  justify-center gap-14 font-opensans flex-wrap items-stretch"}>
         { children }
     </div>
 )
}

function Fiverr({title, description, price, timeForDelivery, numberOfRevision, list, linkFiverr}: {
    title: string,
    description: string,
    price: number,
    timeForDelivery: number,
    numberOfRevision: number,
    list: { label: string, check: boolean }[],
    linkFiverr: string
}) {
    return (
        <div className={"cursor-default bg-white flex flex-col gap-y-5 py-12 px-10 rounded-md max-w-md mx-2 justify-between"}>
            <img src={"/fiverr.svg"} alt={"fiverr"} width={100} height={100}/>
            <div className={"flex items-center justify-between gap-x-5 flex-wrap gap-y-5"}>
                <h1 className={"text-2xl font-bold"}>{title}</h1>
                <p className={"text-xl font-semibold"}>{price}€</p>
            </div>
            <p className={"text-gray-500 text-lg"}>{description}</p>
            <div className={"flex gap-x-5 flex-wrap"}>
                <p className={"flex items-center text-gray-500 font-bold gap-x-2"}><span
                    className={"scale-105"}><TbClockHour3/></span>Livraison sous {timeForDelivery} jours</p>
                <p className={"flex items-center text-gray-500 font-bold gap-x-2"}><span
                    className={"scale-105"}><TbReload/></span>{numberOfRevision} révisions</p>
            </div>
            <div className={"text-gray-400 flex flex-col gap-y-1"}>
                {
                    list.map((value) => {
                        return (
                            <p key={value.label} className={"flex items-center gap-x-2"}><span
                                style={value.check ? {color: "black"} : {}}><FaCheck/></span>{value.label}</p>
                        )
                    })
                }
            </div>
            <a href={linkFiverr}
                  className={"cursor-pointer flex justify-center items-center bg-[#1dbf73] hover:bg-[#0b7146] text-white duration-150 font-bold py-3 rounded-md text-lg"}>Aller
                voir</a>
        </div>
    )
}

Card.Fiverr = Fiverr
export default Card