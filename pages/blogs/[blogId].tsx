import Image from "next/image";
import React, { useEffect, useState } from "react";
import BlogCover  from '../../public/assets/BlogCover.jpg'
import { useRouter } from "next/router";
import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/backend/firebase";
import parse from "html-react-parser";

function BlogId() {
  const router = useRouter();
  const {blogId} = router.query
  const [blog,setBlog] = useState<any>([])
  // console.log(id)
  useEffect(() => {
    if (blogId) {
      const unsub = onSnapshot(doc(db, "blogs",`${blogId}`), (docs) => {
        console.log(docs.data());
        setBlog(docs?.data());
      });
      return () => unsub();
    }
  }, [blogId]);
  console.log(blog)
  return (
    <main className="w-full min-h-screen">
      <div>
        <Image
          unoptimized
          className=" object-cover w-full h-full max-h-72"
          src={blog?.imageUrl}
          alt="blog cover"
          width={100}
          height={100}
        />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 md:py-12 md:px-6 lg:py-16 lg:px-8">
        <div className="">
          <p className="bg-app-slate-blue rounded font-medium px-2 py-1 w-fit">
            {blog.tag}
          </p>
        </div>
        <div className="mx-auto mt-2  text-left">
          <span className="text-3xl lg:text-5xl font-bold">{blog.title}</span>
        </div>
        <div className="py-12 max-w-6xl text-left">
          <span>
            <br/>
            {parse(`${blog.content}`)}
            <br />
          </span>
        </div>
      </div>
    </main>
  );
}

export default BlogId;
