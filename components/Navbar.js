import Link from "next/link"
export default function Navbar(){

    return(

        <nav>
            <div><h1>CHOPER Coding</h1></div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/product">Product</Link>
        </nav>


    )
}