import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { CalendarClock, MapPin } from "lucide-react";
import Link from "next/link";
interface BlogData {
    category: string;
    title: string;
    desc: string;
}[]

// const BLOGS : 

function Blogs() {
  return (
    <section className="font-outfit bg-[url('/assets/line-bg.png')]" id="Blogs">
      <div className="mx-auto max-w-screen-xl px-4 py-8 md:py-12 md:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto  text-left">
          <h2 className="text-3xl lg:text-5xl font-bold">Popular Blogs</h2>
        </div>
        <div className="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  <h1 className="font-semibold text-2xl capitalize">title of the blog goes here</h1>
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
                  <Link href={`/posting/${post.id}`}>Read More</Link>
                </Button>
              </div>
            ))}
        </div>
        <div className="flex justify-center mt-4">
            <Button className="h-12">View More</Button>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
