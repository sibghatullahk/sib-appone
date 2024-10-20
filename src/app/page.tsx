import Image from "next/image";
import Navbar from "./components/Navbar";
import Newhead from "./components/Newhead";
import Newfoot from "./components/Newfoot";
import About from "./about/page";
import Contact from "./contact/page";
import Gallery from "./gallery/page";
import bbq from "./bbq/page";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="flex w-full h-50">
        {/* Cyan background container */}
        <div className="flex w-1/2 h-50 bg-cyan-500">
          {/* Image Card 1 */}
          <div className="w-1/2 p-4">
            <img
              src="/path/to/your/image1.jpg"
              alt="Image 1"
              className="w-full h-auto object-cover"
            />
            <p className="text-white mt-2">Image Card 1 Description</p>
          </div>

          {/* Image Card 2 */}
          <div className="w-1/2 p-4">
            <img
              src="/path/to/your/image2.jpg"
              alt="Image 2"
              className="w-full h-auto object-cover"
            />
            <p className="text-white mt-2">Image Card 2 Description</p>
          </div>
        </div>
      </div>
      <Newfoot/>
    </div>
  );
}
