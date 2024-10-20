import Link from "next/link"

export default Navbar
function Navbar(){
    return(
        <div style={{backgroundColor:"black", color:"white"}}>
         <ul>
            <li>
            <Link href="http://localhost:3000/">Home</Link>
            </li>
            <br />
            <li>
            <Link href="/gallery">Gallery</Link>
            </li>
            <br />
            <li>
            <Link href="/about">About</Link>
            </li>
            <br />
            <li>
            <Link href="bbq">BBQ</Link>
            </li>
            <br />
         </ul>
        </div>
    )
}