import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { CalendarClock, MapPin } from "lucide-react";
import Link from "next/link";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/backend/firebase";
interface BlogData {
  category: string;
  title: string;
  desc: string;
}
[];

function Blogs() {
  const [blogs, setBlogs] = useState<any>([]);
 
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "blogs"), (docs) => {
      const blogs: any = [];
      docs.forEach((doc) => {
        blogs.push({ ...doc.data(), id: doc.id });
      });
      setBlogs(blogs);
    });
    return () => unsub();
  }, []);
  return (
    <section className="font-outfit bg-[url('/assets/line-bg.png')]" id="Blogs">
      <div className="mx-auto max-w-screen-xl px-4 py-8 md:py-12 md:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto  text-left">
          <span className="text-3xl lg:text-5xl font-bold">Popular Blogs</span>
        </div>
        <div className="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog: any) => (
            <div
              className="w-full flex flex-col gap-8 hover:-translate-y-1 transition-all duration-300 bg-app-grey-light p-4 md:p-8 rounded border border-white/10"
              key={blog.id}
            >
              <div className="flex flex-col gap-4">
                <span className="bg-app-slate-blue rounded font-medium px-2 py-1 w-fit">
                  {blog.tag}
                </span>
                <span className="font-semibold text-2xl capitalize">
                  {blog.title}
                </span>
                <div className="text-base text-slate-300/80">
                  <p className="truncate">{blog.desc}</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div>
                  <Image
                    unoptimized
                    className="rounded-full object-cover w-12 h-12"
                    src={blog.picture}
                    alt="company logo"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <p className="font-medium text-md">{blog.name}</p>
                  <p className="flex items-center gap-1 text-sm">
                    <CalendarClock strokeWidth={1.5} size={16} />{" "}
                    {blog.createdAt.toDate().toString().slice(4, 10)}
                  </p>
                </div>
              </div>
              <Button
                variant={"secondary"}
                className="h-12 text-base mt-auto"
                asChild
              >
                <Link href={`/blogs/${blog.id}`}>Read More</Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Button className="h-12" asChild>
            <Link href={"/blogs"}>View More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
