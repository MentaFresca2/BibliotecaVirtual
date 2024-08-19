"use client";
import Image from "next/image";
import "./globals.css";



export default function Home() {
  return (

    <main className=" bg-black h-[100%]">
      <div className="h-[100px] w-[100%] align-middle bg-[#FAF3E6] flex justify-center gap-[250px] flex-row font-extrabold text-[23px]">
        <a href="/page" className="align-middle w-[120px] content-center flex-col justify-center flex button"><span className="h-min w-[100%] flex justify-center">Home</span></a>
        <a href="/Search" className="align-middle w-[120px] content-center flex-col justify-center flex button"><span className="h-min w-[100%] flex justify-center">Search</span></a>
        <a href="/About" className="align-middle w-[120px] content-center flex-col justify-center flex button"><span className="h-min w-[100%] flex justify-center">About</span></a>
        
       
      </div>
    </main>

  );
}
