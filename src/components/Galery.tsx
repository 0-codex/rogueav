import React from "react";

function Gallery({ children }: {children: React.ReactNode}) {
    return (
        <div className={"flex flex-wrap items-center justify-center gap-10"}>
            {children}
        </div>
    )
}

function Image({link}: {link: string}) {
    return (
        <div className={"cursor-default w-[20vw] h-[20vw] max-lg:w-[35vw] max-lg:h-[35vw] max-md:w-[45vw] max-md:h-[45vw] max-sm:w-[60vw] max-sm:h-[60vw] bg-center bg-cover border border-[#3c403f] rounded-md hover:scale-105 duration-200"} style={{backgroundImage: `url(${link})`}}></div>
    )
}

Gallery.Image = Image
export default Gallery