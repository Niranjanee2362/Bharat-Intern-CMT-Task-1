import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="bg-[#161616] w-full h-fit">
      <div className="w-full h-full p-4 md:px-16 py-[50px] md:py-[80px] lg:max-w-5xl lg:mx-auto text-white flex gap-6 justify-cente items-center flex-col text-center">
        <div className="flex flex-col gap-4 md:gap-8">
          <h1 className="text-[42px] leading-tight md:text-6xl lg:text-7xl font-bold font-outfit">
            Your Voice, Your Blog: Unleash Creative Brilliance Here!
          </h1>
          <p className="text-lg font-medium">
            One platform, endless opportunities to refine the thoughts of fellow
            human beings – a space for collective growth and enlightenment
          </p>
        </div>
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <Button className="w-full" asChild>
            <Link href={'/blogs'}>Explore</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};


export default Hero;