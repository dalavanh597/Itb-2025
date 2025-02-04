import Image from "next/image";
import Link from "next/link";
import boo from "./image/boo.jpg";


export default function Home() {
  return (
    <>
    <Link href="/">Home</Link> <br/>
    <Link href="product">product</Link> <br/>
    <Link href="category">Category</Link> <br/>

    <h1>dalavanh</h1>
    <h2>CHANTHAVY</h2>
    <h3>20/09/2005</h3>

    <Image src={boo} width={100} height={100} alt="boo project" />   
    
    </>
  );
}
