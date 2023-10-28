
import { Button } from "@/components/ui/button";
import { CalendarClock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blogs = () => {

  const CATEGORIES = [
    "Innovation",
    "Health",
    "Wanderlust",
    "Storytelling",
    "Fashion",
    "Tech",
    "Food",
    "Career",
  ];
  return (
    <main className="h-full  w-full font-outfit bg-app-grey-dark text-stone-200">
      <section className="p-4 md:px-16 lg:max-w-7xl lg:mx-auto font-outfit py-[50px] md:py-[80px]">
        <div className="mx-auto flex flex-col lg:max-w-3xl gap-4 text-center pb-[50px] md:pb-[80px]">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Blogs Ingu Kedaikum
          </h2>
          <p className="text-slate-200 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus
            nec sem nec pellentesque. Quisque eget nulla sem. Duis quis velit eu
            leo semper.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex flex-col gap-4 lg:col-span-1 h-fit lg:sticky lg:top-24">
            <div>
              <h2 className="text-xl lg:text-3xl font-bold">Category</h2>
              <div className="flex flex-col gap-2 mt-4">
                {CATEGORIES.map((item, idx) => (
                  <Link href={`/find-a-job/${item}`} key={idx}>
                    <h1 className="text-lg py-2 px-4 border bg-app-grey-dark rounded hover:bg-app-slate-blue transition-all duration-300 border-white/10">
                      {item}
                    </h1>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 gap-4 md:grid-cols-2">
            {Array(5)
              .fill(true)
              .map((post, idx) => (
                <div
                  className="w-full flex flex-col gap-8 hover:-translate-y-1 transition-all duration-300 bg-app-grey-light p-4 md:p-8 rounded border border-white/10"
                  key={idx}
                >
                  <div className="flex flex-col gap-4">
                    <h2 className="bg-app-slate-blue rounded font-medium px-2 py-1 w-fit">
                      Tags
                    </h2>
                    <h1 className="font-semibold text-2xl capitalize">
                      title of the blog goes here
                    </h1>
                    <div className="text-base text-slate-300/80">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla faucibus.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div>
                      <Image
                        unoptimized
                        className="rounded-full object-cover w-12 h-12"
                        src={
                          "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1770&amp;q=80"
                        }
                        alt="company logo"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-md">Jay</p>
                      <p className="flex items-center gap-1 text-sm">
                        <CalendarClock strokeWidth={1.5} size={16} /> 09 Oct
                      </p>
                    </div>
                  </div>
                  <Button
                    variant={"secondary"}
                    className="h-12 text-base mt-auto"
                    asChild
                  >
                    <Link href={`/blogs/${idx}`}>Read More</Link>
                  </Button>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
