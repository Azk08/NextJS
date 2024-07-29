import Image from "next/image";
import language from "../../public/languange.svg";
import next from "../../public/next.svg";
import design from "../../public/design.svg";
import figma from "../../public/figma.svg";
import sass from "../../public/sass.svg";
// import Navigation from "../app/navbar";
// import { inter } from "./font";
import Link from "next/link";
import logo from "../../public/logo.png";
import pokemon from "../../public/The Sukuna.png";
import Kalimat from "../../public/Sebenarnya Siapa Yang Anda Percaya Selama Ini.png";
import cover from "../../public/cover makalah.png";
import { poppins } from "./font";

export default function Home() {
  return (
    <main className={poppins.className}>
      {/* NAVBAR */}
      <div className="flex items-center p-[15px] justify-around backdrop-blur-2xl sticky top-0 bg-transparent z-[1] ">
        <Image src={next} alt="next" width={100} height={100} className=" float-left " />
        <div className="flex flex-wrap items-center right-0 justify-between w-[30%] float-right ">
          <Link href="#Home" className="w-[30%] ">Home</Link>
          <Link href="#About" className="w-[30%] ">About</Link>
          <Link href="#Gallery" className="w-[30%] ">Gallery</Link>
        </div>
      </div>
      {/* HOME */}
      {/* <div className=" bg-white w-[50%] h-[50%] blur-[250px] absolute bottom-[200px] left-[25%] "></div> */}
      {/* <nav className={inter.className}> {Navigation} </nav> */}
      <div className="p-40" id="Home">
        <div className="flex justify-center">
          <h1 className="text-center text-6xl mr-1">Hello </h1>
          <Image
            src={next}
            alt="next"
            width={200}
            height={200}
            className=" shadow-2xl "
          />
        </div>
        <p className="text-sm text-center">My Portofolio</p>
      </div>
      <div className="flex flex-wrap justify-around w-full p-4 bottom-40">
        <div className=" backdrop-blur-3xl flex w-1/4 h-40 p-4 justify-center border-s-white border-opacity-100 border m-1 rounded-sm shadow-2xl">
          <Image
            src={sass}
            width={50}
            height={50}
            className=" w-1/2"
            alt="Language svg"
          />
          <p className=" text-sm text-center  w-1/2 mt-2">
            I can use any language
          </p>
        </div>
        <div className=" flex w-1/4 h-40 p-4 border-s-white border-opacity-100 border m-1 rounded-sm shadow-2xl backdrop-blur-2xl">
          <Image
            src={design}
            width={50}
            height={50}
            className=" w-1/2 block md:show color-white"
            alt="Webpage"
          />
          <p className=" w-1/2 text-sm text-center">Front-End Programmer</p>
        </div>
        <div className=" flex w-1/4 h-40 p-4 border-s-white border-opacity-100 border m-1 rounded-sm shadow-2xl backdrop-blur-2xl">
          <Image
            src={figma}
            width={50}
            height={50}
            className=" w-1/2"
            alt="Vercel"
          />
          <p className=" w-1/2 text-sm text-center">I can use any design app</p>
        </div>
      </div>
      {/* ABOUT */}
      <div
        className="w-full p-[150px] flex flex-wrap justify-around items-center"
        id="About"
      >
        <Image
          src={logo}
          alt="Profille"
          width={100}
          height={100}
          className=" w-[20%] rounded-md"
          id="profile"
        />
        <div className=" w-[70%] " id="text">
          <h1 className="text-3xl">About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugit id
            praesentium veritatis! Quis quos expedita iste blanditiis beatae
            ratione facilis magni unde saepe deleniti molestiae, veniam eum
            ipsum neque.
          </p>
        </div>
      </div>
      {/* GALLERY */}
      <div
        className=" flex flex-wrap justify-around items-center p-[150px]  w-full"
        id="Gallery"
      >
        <div className=" w-[300px] h-[300px] absolute left-0 bg-white blur-[300px] "></div>
        <div className="right-0 w-[300px] h-[300px] absolute bg-white blur-[300px] "></div>
        <h1 className="w-full text-2xl text-center">Gallery</h1>
        <br />
        <br />
        <div className="w-[20%] backdrop-blur-3xl">
          <Image
            src={cover}
            alt="Cover"
            width={400}
            height={400}
            className=" shadow-2xl "
          />
        </div>
        <div className="w-[20%] backdrop-blur-3xl ">
          <Image
            src={pokemon}
            alt="Siluet"
            width={400}
            height={400}
            className=" shadow-2xl "
          />
        </div>
        <div className=" w-[20%] backdrop-blur-3xl ">
          <Image
            src={Kalimat}
            alt="Kalimat Mutaira"
            width={400}
            height={400}
            className=" shadow-2xl "
          />
        </div>
      </div>
      <footer className="bg-black p-[150px] text-center justify-around">
        <h1 className="text-4xl">See You Again</h1>
        <p className=" text-xs ">This website make by Aufa Ziya Khairi</p>
      </footer>
    </main>

  );
}
