export default function Footer() {
    return (
        <div className={"flex items-center justify-center px-96 py-5 bg-[#3c403f] gap-x-16 max-2xl:py-10 max-2xl:px-0 cursor-default"}>
            <div className={"flex items-center gap-x-5 max-2xl:hidden"}>
                <img src={"/logo.svg"} alt={"logo"} width={70} height={70} />
                <h1 className={"uppercase font-bold text-2xl"}>Rogue Audiovisuel</h1>
            </div>
            <p className={"text-gray-300"}><a href={"https://rogueav.com/"} className={"text-gray-200 hover:underline underline-offset-4 cursor-pointer"}>Rogue Audiovisuel</a> © 2 by <a href={"https://fr.fiverr.com/multipilum"} className={"text-gray-200 hover:underline underline-offset-4 cursor-pointer"}>Rogue</a> is licensed under <a href={"https://creativecommons.org/licenses/by-nd/4.0/"} className={"text-gray-200 hover:underline underline-offset-4 cursor-pointer"}>CC BY-ND 4.0</a></p>
        </div>
    )
}
