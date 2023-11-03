import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';

function Banner() {
  const { data: session } = useSession();
  return (
    <section className="w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto my-10">
      <div className="w-full flex flex-col gap-4 bg-app-grey-light shadow-md rounded-md p-4 lg:p-12">
        <div className="text-center lg:text-left lg:w-2/3 flex flex-col gap-2">
          <p className="text-base lg:text-xl font-medium">Tell us your story</p>
          <h1 className="text-2xl lg:text-4xl font-bold">
            Wanna Share your thoughts with everyone?
          </h1>

          <p className="text-base lg:text-lg font-medium text-slate-300">
            Just few clicks away to post a blog
          </p>
        </div>
        <div className="w-full lg:w-1/3 md:flex md:justify-center lg:justify-start">
          {session ? (
            <Button asChild className="w-full md:w-fit font-bold h-12">
              <Link href={"/dashboard/post-a-blog"}>Post a Blog</Link>
            </Button>
          ) : (
            <Button
              onClick={() => signIn("google")}
              className="w-full md:w-fit font-bold h-12"
            >
              Post a Blog
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Banner