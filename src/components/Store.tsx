"use client"

import React, {useState} from "react";
import { FaImage } from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import {ImCross} from "react-icons/im";


function Store({children}: { children: React.ReactNode }) {
    return (
        <div className={"font-opensans flex flex-col items-center justify-center gap-y-14"}>
            {children}
        </div>
    )
}

function Right({title, description, link, image}: {
    title: string,
    description: string,
    link: string,
    image?: boolean
}) {
    const [popup, setPopup] = useState<boolean>(false)
    const onPopup = () => {
        const header = document.getElementById("header") as HTMLDivElement
        const popupVideo = document.getElementById(`popup-${link}`) as HTMLDivElement

        const popupElement = document.getElementById(`element-${link}`) as HTMLIFrameElement | HTMLImageElement

        if (!header || !popupVideo || !popupElement) return

        if (!popup) {
            header.style.display = "none"
            popupVideo.style.display = "flex"

            document.body.style.overflow = "none"

            setPopup(true)
        } else if (popup) {
            header.style.display = "flex"
            popupVideo.style.display = "none"

            if (!image) {
                (popupElement as HTMLIFrameElement).src = link
            }

            document.body.style.overflow = "auto"

            setPopup(false)
        }
    }

    return (
        <div>
            <div id={`popup-${link}`}
                 className={"fixed hidden top-0 left-0 w-screen h-screen backdrop-blur backdrop-brightness-50 z-10 items-center justify-center"}>
                {
                    image ? (
                        <img src={link} alt={"image"} width={560} height={315} id={`element-${link}`} />
                    ) : (
                        <iframe width="560" height="315"
                                src={link}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className={"w-3/4 h-3/4"} id={`element-${link}`}></iframe>
                    )
                }
                <p className={"p-4 bg-red-500 absolute top-0 right-0 m-5 rounded-md"}
                   onClick={onPopup}><ImCross/></p>
            </div>
            <div className={"flex flex-row-reverse gap-x-10"}>
                {
                    image ? (
                        <img src={link} alt={"image"} width={560} height={315} className={"max-lg:hidden"} />
                    ) : (
                        <iframe width="560" height="315"
                                src={link}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className={"flex-1 max-lg:hidden"}></iframe>
                    )
                }

                <div className={"flex-1 flex flex-col gap-y-5 max-lg:items-center cursor-default"}>
                    <h1 className={"font-medium text-3xl max-lg:text-center"}>{title}</h1>
                    <p className={"font-extralight text-gray-300 max-lg:text-center"}>{description}</p>
                    <p className={"lg:hidden flex justify-center items-center duration-150 font-bold py-3 rounded-md text-lg gap-x-5 w-fit px-5 hover:grayscale-[0.5] cursor-pointer"}
                       onClick={onPopup} style={image ? { backgroundColor: "#0091CF" } : { backgroundColor: "#ff2323" }}>
                        <span className={"scale-[1.5]"}>{image ? <FaImage /> : <FaYoutube/>}</span>Regarder</p>
                </div>
            </div>
        </div>
    )
}

function Left({title, description, link, image}: {
    title: string,
    description: string,
    link: string,
    image?: boolean
}) {
    const [popup, setPopup] = useState<boolean>(false)
    const onPopup = () => {
        const header = document.getElementById("header") as HTMLDivElement
        const popupVideo = document.getElementById(`popup-${link}`) as HTMLDivElement

        const popupElement = document.getElementById(`element-${link}`) as HTMLIFrameElement | HTMLDivElement

        if (!header || !popupVideo || !popupElement) return

        if (!popup) {
            header.style.display = "none"
            popupVideo.style.display = "flex"

            document.body.style.overflow = "none"

            setPopup(true)
        } else if (popup) {
            header.style.display = "flex"
            popupVideo.style.display = "none"

            if (!image) {
                (popupElement as HTMLIFrameElement).src = link
            }

            document.body.style.overflow = "auto"

            setPopup(false)
        }
    }

    return (
        <div>
            <div id={`popup-${link}`}
                 className={"fixed hidden top-0 left-0 w-screen h-screen backdrop-blur backdrop-brightness-50 z-10 items-center justify-center"}>
                {
                    image ? (
                        <img src={link} alt={"image"} width={560} height={315} id={`element-${link}`} />
                    ) : (
                        <iframe width="560" height="315"
                                src={link}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className={"w-3/4 h-3/4"} id={`element-${link}`}></iframe>
                    )
                }
                <p className={"p-4 bg-red-500 absolute top-0 right-0 m-5 rounded-md"}
                   onClick={onPopup}><ImCross/></p>
            </div>
            <div className={"flex flex-row gap-x-10"}>
                {
                    image ? (
                        <img src={link} alt={"image"} width={560} height={315} className={"max-lg:hidden"} />
                    ) : (
                        <iframe width="560" height="315"
                                src={link}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className={"flex-1 max-lg:hidden"}></iframe>
                    )
                }
                <div className={"flex-1 flex flex-col gap-y-5 max-lg:items-center cursor-default"}>
                    <h1 className={"font-medium text-3xl max-lg:text-center"}>{title}</h1>
                    <p className={"font-extralight text-gray-300 max-lg:text-center"}>{description}</p>
                    <p className={"lg:hidden flex justify-center items-center duration-150 font-bold py-3 rounded-md text-lg gap-x-5 w-fit px-5 hover:grayscale-[0.5] cursor-pointer"}
                       onClick={onPopup} style={image ? {backgroundColor: "#0091CF"} : {backgroundColor: "#ff2323"}}>
                        <span className={"scale-[1.5]"}>{image ? <FaImage/> : <FaYoutube/>}</span>Regarder</p>
                </div>
            </div>
        </div>

    )
}

Store.Right = Right
Store.Left = Left
export default Store