
import { db } from "@/backend/firebase";
import { Button } from "@/components/ui/button";
import { collection, onSnapshot } from "firebase/firestore";
import { CalendarClock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs,setBlogs] = useState<any>([])

  useEffect(() => {
      const unsub = onSnapshot(
        (collection(db, "blogs")),
        (docs) => {
          const blogs: any = [];
          docs.forEach((doc) => {
            blogs.push({ ...doc.data(), id: doc.id });
          });
          setBlogs(blogs);
        }
      );
      return () => unsub();
  }, []);
  console.log(blogs)

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
          <span className="text-3xl lg:text-5xl font-bold">
            Nalla Blogs Ingu Kedaikum
          </span>
          <p className="text-slate-200 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus
            nec sem nec pellentesque. Quisque eget nulla sem. Duis quis velit eu
            leo semper.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex flex-col gap-4 lg:col-span-1 h-fit lg:sticky lg:top-24">
            <div>
              <span className="text-xl lg:text-3xl font-bold">Category</span>
              <div className="flex flex-col gap-2 mt-4">
                {CATEGORIES.map((item, idx) => (
                  <Link href={`/category/${item}`} key={idx}>
                    <h1 className="text-lg py-2 px-4 border bg-app-grey-dark rounded hover:bg-app-slate-blue transition-all duration-300 border-white/10">
                      {item}
                    </h1>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 gap-4 md:grid-cols-2">
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
        </div>
      </section>
    </main>
  );
};

export default Blogs;
