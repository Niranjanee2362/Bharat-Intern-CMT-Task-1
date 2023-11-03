import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  CalendarClock,
  CalendarRange,
  ClipboardEdit,
  Edit,
  Eye,
  Trash,
} from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";
import { collection, deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/backend/firebase";
import { useSession } from "next-auth/react";
import parse from "html-react-parser";

function PostedBlogs() {
  const router = useRouter();
  const [blogs,setBlogs] = useState<any>(null);
  const { data: session } = useSession();
  console.log(session?.user?.name)
  const Name = session?.user?.name;
  useEffect(() => {
    if (Name) {
    const unsub = onSnapshot(
      query(collection(db, "blogs"), where("name", "==", Name)),
      (docs) => {
        const blogs: any = [];
        docs.forEach((doc) => {
          blogs.push({ ...doc.data(), id: doc.id });
        });
        setBlogs(blogs);
      }
    );
    return () => unsub();
    }
  }, [Name]);

  console.log(blogs)
  const handleDelete = async(id:any) => {
    await deleteDoc(doc(db, "blogs", id));
  }

  return (
    <section className="mt-4 font-outfit">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs &&
          blogs.map((bb: any) => (
            <div
              className="w-full flex flex-col gap-8 hover:-translate-y-1 transition-all duration-300 bg-app-grey-light p-4 md:p-8 rounded border border-white/10"
              key={bb.id}
            >
              <div className="flex flex-col gap-4">
                <span className="bg-app-slate-blue rounded font-medium px-2 py-1 w-fit">
                  {bb.tag}
                </span>
                <span className="font-semibold text-2xl capitalize">
                  {bb.title}
                </span>
                <div className="text-base text-slate-300/80">
                  <p className="truncate">
                    {bb.desc}
                  </p>
                </div>
              </div>
              {/* <div>
                Claps : 233
              </div> */}
              <div className="flex gap-4 items-center justify-center">
                <div>
                  <Button
                    variant={"secondary"}
                    asChild
                    className="rounded border-0 transition-colors hover:bg-app-grey-light h-12 duration-300 ease-in-out w-full"
                  >
                    <Link href={`/blogs/${bb.id}`}>
                      <div className="flex gap-2 items-center">
                        <Eye strokeWidth={1.5} size={20} /> View
                      </div>
                    </Link>
                  </Button>
                </div>
                <div>
                  <Button
                    variant={"secondary"}
                    asChild
                    className="rounded border-0 transition-colors hover:bg-app-grey-light h-12 duration-300 ease-in-out w-full"
                    onClick={() => handleDelete(bb.id)}
                  >
                    <div className="flex gap-2 items-center">
                      <Trash strokeWidth={1.5} size={20} /> Delete
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default PostedBlogs;
