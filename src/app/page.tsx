import Image from "next/image";
import Navbar from "./components/Navbar";
import Newhead from "./components/Newhead";
import Newfoot from "./components/Newfoot";
import About from "./about/page";
import Contact from "./contact/page";
import Gallery from "./gallery/page";
import bbq from "./bbq/page";

export default function Home() {
  return (
    <div>
      {/* <Newhead/>
      <Navbar/> */}
      <header>
        <nav className=" flex w-full bg-slate-500 h-20">
          <div className="flex">
        <div className="bg-green-900 w-20 h-20"></div>
        </div>
        <div className="flex w-3/4 justify-end items-center">
        <div className="bg-blue-900 w-20 h-10"></div>
        <div className="bg-red-900 w-20 h-10"></div>
        </div>
        </nav>
      </header>
      
      {/* <h1 className="bg-gray-400 text-purple-800 font-bold">New TailWind CSS</h1>
      <p className="text-red-400 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
      {/* Hello World
      <Newfoot/> */}
    </div>
  );
}
