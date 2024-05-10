import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Gallery from "./components/Galery.tsx";
import Store from "./components/Store.tsx";
import Card from "./components/CardFiverr.tsx";
import {FaDiscord} from "react-icons/fa";
import {TbBrandFiverr} from "react-icons/tb";

function App() {
  return (
    <>
        <Header/>
        <div className={"absolute top-0 left-0 w-full -z-10"}>
            <div>
                <div className={"fixed bottom-0 right-0 z-10 flex flex-col px-10 py-10 gap-y-10 max-md:hidden"}>
                    <a target={"_blank"} href={"https://discord.gg/n3sJVbPByM"}
                          className={"cursor-pointer scale-[2] p-1 rounded-full bg-[#7289da] hover:scale-[2.2] duration-150 shadow shadow-[#7289da]"}><FaDiscord/></a>
                    <a target={"_blank"} href={"https://fr.fiverr.com/multipilum/"}
                          className={"cursor-pointer scale-[2] p-1 rounded-full bg-[#1dbf73] hover:scale-[2.2] duration-150 shadow shadow-[#1dbf73]"}><TbBrandFiverr/></a>
                </div>
                <div id={"home"} className={"cursor-default h-screen relative overflow-hidden"}>
                    <div
                        className={"absolute w-full h-full bg-[url(/openspace.gif)] bg-cover bg-fixed bg-center brightness-[0.5] bg-no-repeat"}></div>
                    <div className={"absolute w-full h-full flex flex-col items-center justify-center gap-y-10"}>
                        <h1 className={"uppercase font-bold text-7xl"}>Rogue</h1>
                        <p className={"text-3xl font-extralight text-gray-300"}>AudioVisuel</p>
                        <a href={"#first"}
                              className={"cursor-pointer text-3xl rounded-full border-2 px-8 py-3 hover:scale-105 duration-150 border-gray-300 text-gray-300"}>Voir</a>
                    </div>
                </div>
                <div id={"first"}
                     className={"cursor-pointer px-96 py-20 flex flex-col items-center justify-center gap-y-10 max-2xl:px-40 max-md:px-10"}>
                    <h1 className={"uppercase font-bold text-4xl text-center"}>Un studio, 3 zones d&apos;expértise
                        différentes</h1>
                    <p className={"text-center text-2xl font-extralight text-gray-300"}>Bienvenue chez RoGue AudioVisuel ! Nous excellons dans le montage vidéo et photo, ainsi que dans la création de vidéos époustouflantes avec Rockstar Editor pour donner vie à vos idées de trailers GTA 5.</p>
                </div>
                <div className={"cursor-pointer flex font-opensans flex-wrap"}>
                    <div
                        className={"flex-1 flex flex-col items-center px-20 bg-[#252626] py-20 gap-y-5 max-2xl:px-5 min-w-[250px]"}>
                        <h1 className={"font-bold text-3xl text-center"}>Montage Vidéo</h1>
                        <p className={"text-center font-extralight italic text-gray-300"}>Transformez vos clips en œuvre
                            d&apos;art vidéo
                            fluide et optimisée. Nous
                            organisons habilement vos séquences pour créer une narration visuelle confortable.</p>
                    </div>
                    <div
                        className={"flex-1 flex flex-col items-center px-20 bg-[url(/background.jpg)] py-20 gap-y-5 max-2xl:px-5 min-w-[250px]"}>
                        <h1 className={"font-bold text-3xl text-center"}>Montage Photo Créatif</h1>
                        <p className={"text-center font-extralight italic text-gray-300"}>De logos mémorables à des miniatures YouTube percutantes, nous mettons en valeur votre image. Nos talents en montage photo vous démarqueront dans l&apos;univers numérique.</p>
                    </div>
                    <div
                        className={"flex-1 flex flex-col items-center px-20 bg-[#252626] py-20 gap-y-5 max-2xl:px-5 min-w-[250px]"}>
                        <h1 className={"font-bold text-3xl text-center"}>Édition Rockstar Editor</h1>
                        <p className={"text-center font-extralight italic text-gray-300"}>Plongez dans l&apos;univers de GTA 5 avec des trailers époustouflants et des edits TikTok percutants. Notre expertise avec Rockstar Editor donne vie à vos aventures virtuelles les rendant fidèles à la réalité.</p>
                    </div>
                    <div
                        className={"flex-1 flex flex-col items-center px-20 bg-[url(/background.jpg)] py-20 gap-y-5 max-2xl:px-5 min-w-[250px]"}>
                        <h1 className={"font-bold text-3xl text-center"}>Pack Complet</h1>
                        <p className={"text-center font-extralight italic text-gray-300"}>Optimisez votre présence en ligne avec notre offre complète. Profitez d&apos;un service complet, de la création d&apos;un trailer, à son montage, et sa miniature, 100% prêt à la publication.</p>
                    </div>
                </div>
                <div id={"vitrine"}
                     className={"px-96 py-20 flex flex-col gap-y-14 max-2xl:px-40 max-xl:px-10 max-lg:px-40 max-md:px-10"}>
                    <div className={"cursor-default flex flex-col justify-center items-center gap-y-5"}>
                        <h1 className={"font-bold text-5xl"}>Vitrine</h1>
                        <p className={"text-2xl font-extralight text-gray-300"}>Présentation des services</p>
                    </div>
                    <Store>
                        <Store.Left title={"Montage Vidéo"}
                                    description={"Créez l'inoubliable avec notre montage vidéo. Notre service de montage et retouche vidéo transforme vos vidéos brutes en œuvres d'art cinématographiques. Augmentez l'attrait de vos contenus avec des transitions fluides, des effets visuels captivants et une qualité sonore optimale"}
                                    link={"https://www.youtube.com/embed/_5gjieJpcGA?si=EjT8fwScd_JDSC7E"}/>
                        <Store.Right title={"Montage Photo"}
                                     description={"Capturez l'instant, sublimons l'image\n" +
                                         "\n" +
                                         "Notre service de montage photo métamorphose vos images. Sublimez vos clichés avec des retouches importantes, des effets artistiques et une qualité d'image exceptionnelle. Donnez vie à vos souvenirs et à votre créativité grâce à nos compétences en montage photo."}
                                     link={"/montage.jpg"}
                                     image/>
                        <Store.Left title={"Montage Rockstar Editor"}
                                    description={"Rockstar Editor : Votre monde, notre montage!\n" +
                                        "\n" +
                                        "Notre expertise en montage Rockstar Editor fait passer vos désirs à un niveau supérieur. Transformez vos idées de vidéo/trailer en véritables moments de cinéma avec des séquences épiques et des effets spéciaux époustouflants. Faites briller votre talent de vidéaste avec notre expertise en montage Rockstar Editor."}
                                    link={"https://www.youtube.com/embed/YKTrFAuhOXg?si=WkxXBV9kTyVF_GeW"}/>
                    </Store>
                </div>
                <div id={"galery"} className={"px-72 py-20 flex flex-col gap-y-14 max-2xl:px-20"}>
                    <div className={"cursor-default flex flex-col justify-center items-center gap-y-5"}>
                        <h1 className={"font-bold text-5xl"}>Galerie</h1>
                        <p className={"text-2xl font-extralight text-gray-300"}>Nos différents travaux</p>
                    </div>
                    <Gallery>
                        <Gallery.Image link={"/galery/1.jpg"}/>
                        <Gallery.Image link={"/galery/2.jpg"}/>
                        <Gallery.Image link={"/galery/3.jpg"}/>
                        <Gallery.Image link={"/galery/4.jpg"}/>
                        <Gallery.Image link={"/galery/5.jpg"}/>
                        <Gallery.Image link={"/galery/6.jpg"}/>
                        <Gallery.Image link={"/galery/7.jpg"}/>
                        <Gallery.Image link={"/galery/8.jpg"}/>
                        <Gallery.Image link={"/galery/9.jpg"}/>
                        <Gallery.Image link={"/galery/10.jpg"}/>
                        <Gallery.Image link={"/galery/11.jpg"}/>
                        <Gallery.Image link={"/galery/12.jpg"}/>
                    </Gallery>
                </div>

                <div id={"service"} className={"py-20 flex flex-col gap-y-14"}>
                    <div className={"cursor-default flex flex-col justify-center items-center gap-y-5"}>
                        <h1 className={"font-bold text-5xl"}>Convaincu ?</h1>
                        <p className={"text-2xl font-extralight text-gray-300"}>Regarde dès maintenant nos services</p>
                    </div>
                    <Card>
                        <Card.Fiverr title={"Images HD FiveM"}
                                     description={"un pack de photos, peut être pris sur votre serveur, sur un serveur freeroam ou dans SP"}
                                     price={28.89} timeForDelivery={3} numberOfRevision={2} list={[
                            {label: "Images de gameplay", check: true},
                            {label: "Animation personnalisée", check: false},
                            {label: "Enregistrement d'une voix off", check: false},
                            {label: "Musique et conception sonore", check: false},
                            {label: "Optimisation multiplateforme", check: false},
                            {label: "Titres", check: false},
                            {label: "90 secondes de temps de fonctionnement", check: true},
                        ]} linkFiverr={"https://www.google.com/"}/>

                        <Card.Fiverr title={"Clip vidéo musical FiveM"}
                                     description={"un clip vidéo pour votre musique, peut être enregistré sur votre serveur, sur un serveur freeroam ou en SP"}
                                     price={62.60} timeForDelivery={5} numberOfRevision={2} list={[
                            {label: "Images de gameplay", check: true},
                            {label: "Animation personnalisée", check: true},
                            {label: "Enregistrement d'une voix off", check: true},
                            {label: "Musique et conception sonore", check: true},
                            {label: "Optimisation multiplateforme", check: true},
                            {label: "Titres", check: true},
                            {label: "90 secondes de temps de fonctionnement", check: true},
                        ]} linkFiverr={"https://www.google.com/"}/>

                        <Card.Fiverr title={"Bande-annonce FiveM"}
                                     description={"un trailer pour votre serveur roleplay, peut être enregistré sur votre serveur, sur un serveur freeroam ou dans SP"}
                                     price={67.42} timeForDelivery={5} numberOfRevision={2} list={[
                            {label: "Images de gameplay", check: true},
                            {label: "Animation personnalisée", check: true},
                            {label: "Enregistrement d'une voix off", check: true},
                            {label: "Musique et conception sonore", check: true},
                            {label: "Optimisation multiplateforme", check: true},
                            {label: "Titres", check: true},
                            {label: "90 secondes de temps de fonctionnement", check: true},
                        ]} linkFiverr={"https://www.google.com/"}/>
                    </Card>
                </div>

                <div
                    className={"cursor-default flex items-center py-10 bg-[#0c0d0d] justify-center flex-col gap-y-10 px-10"}>
                    <h1 className={"uppercase font-bold text-5xl"}>Rejoignez-nous</h1>
                    <p className={"text-2xl font-extralight text-center text-gray-300"}>Contactez et parlez-nous
                        facilement
                        ici Devis
                        complet gratuit !</p>
                    <a target={"_blank"} href={"https://discord.gg/n3sJVbPByM"}
                          className={"cursor-pointer text-xl rounded-full border-2 px-8 py-3 hover:scale-105 duration-150 uppercase text-gray-300 border-gray-300"}>Discord</a>
                </div>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default App
