import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  CalendarClock,
  CalendarRange,
  ClipboardEdit,
  Edit,
  Trash,
} from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";

function PostedBlogs() {
  const router = useRouter();

  return (
    <section className="mt-4 font-outfit">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              {/* <div>
                Claps : 233
              </div> */}
              <div className="flex gap-4 items-center">
                <div>
                  <Button
                    variant={"secondary"}
                    asChild
                    className="rounded border-0 transition-colors hover:bg-app-grey-light h-12 duration-300 ease-in-out"
                  >
                    <div className="flex gap-2 items-center">
                      <ClipboardEdit strokeWidth={1.5} size={20} /> Edit
                    </div>
                  </Button>
                </div>
                <div>
                  <Button
                    variant={"secondary"}
                    asChild
                    className="rounded border-0 transition-colors hover:bg-app-grey-light h-12 duration-300 ease-in-out"
                  >
                    <div className="flex gap-2 items-center">
                      <Trash strokeWidth={1.5} size={20} /> Delete
                    </div>
                  </Button>
                </div>
              </div>
              <Button
                variant={"secondary"}
                className="h-12 text-base mt-auto"
                asChild
              >
                <Link href={`/blogs/${idx}`}>View Blog</Link>
              </Button>
            </div>
          ))}
      </div>
    </section>
  );
}

export default PostedBlogs;
