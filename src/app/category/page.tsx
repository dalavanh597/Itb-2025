import Image from "next/image";
import veg from "../image/veg.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>ໜ້າປະເພດ ສິນຄ້າ</h1>
    <h2>ລາຍລະອຽດປະເພດສິິນຄ້າ</h2>
    <h3>020 954 26 515</h3>

    <Image src={veg} width={100} height={100} alt="veg project" />   
    
    </>
  );
}
