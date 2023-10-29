import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

interface Navdata {
  title: string;
  link: string;
}
[];
const NAVDATA: Navdata[] = [
  {
    title: "Link 1",
    link: "/",
  },
  {
    title: "Link 2",
    link: "/",
  },
  {
    title: "Link 3",
    link: "/",
  },
  {
    title: "Link 4",
    link: "/",
  },
];
function Header() {
  const { data: session } = useSession();
  return (
    <nav className="px-4 md:p-0 sticky top-0 z-50 flex items-center h-[5rem] bg-app-grey-dark justify-between md:px-16  lg:mx-auto">
      <Link href={"/"}>
        <h1 className="text-2xl font-semibold">BharatBlog</h1>
      </Link>
      <div className="font-normal">
        <ul className=" lg:flex lg:gap-4 text-center text-md xl:text-lg items-center hidden">
          {NAVDATA.map((link) => (
            <li key={`nav-mobile-link-${link.link}`} className="p-2">
              <Button
                variant={"secondary"}
                asChild
                className="rounded border-0 transition-colors hover:bg-app-grey-light h-12 duration-300 ease-in-out"
              >
                <Link href={link.link}>{link.title}</Link>
              </Button>
            </li>
          ))}
          <li>
            {!session ? (
              <Button
                variant={"default"}
                onClick={() => signIn("google")}
                className="h-12"
              >
                Post a Blog
              </Button>
            ) : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Image
                      alt="Man"
                      src={session?.user?.image!}
                      width={100}
                      height={100}
                      className="rounded-full object-cover w-12 h-12 hover:cursor-pointer"
                      onClick={() => signOut()}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to Sign Out</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger className="lg:hidden py-4">
            <Menu strokeWidth={1.5} size={24} />
          </SheetTrigger>
          <SheetContent className="bg-app-grey-dark">
            <SheetHeader>
              <SheetTitle className="text-2xl font-semibold text-white">
                BharatBlog
              </SheetTitle>
              <SheetDescription>
                <nav className="contents font-semibold ">
                  <ul className="mx-auto flex flex-col items-center ">
                    {NAVDATA.map((link) => (
                      <li key={`nav-mobile-link-${link.link}`} className="p-2">
                        <Button
                          variant={"secondary"}
                          asChild
                          className="rounded border-0 transition-colors hover:bg-app-grey-light h-12 duration-300 ease-in-out"
                        >
                          <Link href={link.link}>{link.title}</Link>
                        </Button>
                      </li>
                    ))}
                    <li>
                      {!session ? (
                        <Button
                          variant={"default"}
                          onClick={() => signIn("google")}
                          className="h-12"
                        >
                          Post a Blog
                        </Button>
                      ) : (
                        <Button
                          variant={"default"}
                          onClick={() => signOut()}
                          className="h-12"
                        >
                          Sign Out
                        </Button>
                      )}
                    </li>
                  </ul>
                </nav>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Header;
