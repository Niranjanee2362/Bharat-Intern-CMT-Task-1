import { Button } from "@/components/ui/button";
import { doc, getDoc } from "firebase/firestore";
import { getSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { db } from '@/backend/firebase';
import PostedBlogs from "@/components/dashboard/PostedBlogs";
import parse from "html-react-parser";
import Head from "next/head";
 
function Dashboard() {
  // console.log(user)
  return (
    <>
    <Head>
      <title>Dashboard</title>
    </Head>
    <main className="min-h-screen bg-[url('/assets/line-bg.png')] w-full font-outfit bg-app-grey-dark text-stone-200">
      <div className="p-4 md:px-16 lg:max-w-7xl lg:mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between mt-8 md:items-center gap-4 md:gap-0">
          <div className="">
            <span className="text-3xl font-bold md:text-5xl">Dashboard</span>

            <p className="mt-1.5 text-sm text-slate-300">
              Your Blog has seen a 52% increase in traffic in the last month.
              Keep it up! 🚀
            </p>
          </div>
          <div>
            <Button variant={"outline"} className="h-12 " asChild>
              <Link href={"/dashboard/post-a-blog"}>Post a Blog</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-[50px] md:py-[80px]">
        <PostedBlogs/>
      </div>
    </main>
    </>
  );
}

// export async function getServerSideProps(context: any) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
//   const email = session?.user?.email;
//   const docRef = doc(db, "users", email!);
//   const docSnap = await getDoc(docRef);



//   const user: any = session ? { user: docSnap.data() } : null;
//   return {
//     props: {
//       ...user,
//     },
//   };
// }


export default Dashboard;
