import Link from "next/link";
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer id="contact" className="bg-app-grey-light">
      <div className="lg:mx-auto lg:max-w-[1440px] p-4">
        <div className="flex flex-col items-stretch justify-start">
          <div className="w-full border-b border-white/20 p-2 md:p-4">
            <div className="flex flex-col items-center justify-between md:items-start lg:flex-row">
              <Link href="/" className="flex items-center">
                <p className="mb-[40px] leading-none lg:mb-0 font-semibold text-lg md:text-2xl">
                  BharatBlog
                </p>
              </Link>
              <div className="flex w-full flex-col items-center justify-between md:flex-row lg:justify-end">
                <div className="mb-4 flex flex-col items-stretch justify-start text-center md:flex-row">
                </div>
                <div className="mb-4 flex items-center justify-start lg:ml-[64px]">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/niranjanee-mohanasundaram-3085291b9/"
                    className="mx-[2px] p-3 transition-all duration-300 hover:text-app-secondary"
                  >
                    <Linkedin strokeWidth={1.5} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/NiranjaneeM"
                    className="mx-[2px] p-3 transition-all duration-300 hover:text-app-secondary"
                  >
                    <Twitter strokeWidth={1.5} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:niranjanee.mohan@gmail.com"
                    className="mx-[2px] p-3 transition-all duration-300 hover:text-app-secondary"
                  >
                    <Mail strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
                <div className="flex flex-col items-center gap-2">
                  <span>Niranjanee M </span>
                  <span> Tech Stack: NextJS | TailwindCSS | ShadcnUI | Firebase | Quill | NextAuth </span>
                  
                </div>
          </div>
          <div className="w-full p-2 md:p-4">
            <div className="flex flex-col items-center justify-start md:flex-row md:justify-between">
              <div className="mb-4 flex flex-col items-stretch justify-center text-center md:flex-row">
                <Link
                  href="/"
                  className="py-2 text-[14px] text-slate-300 md:mr-[24px]"
                >
                  Terms and Conditions
                </Link>
                <Link
                  href="/"
                  className="py-2 text-[14px] text-slate-300 md:mr-[24px]"
                >
                  Privacy Policy
                </Link>
              </div>
              <p className="mb-4 text-[12px] text-slate-300">
                Copyright &copy; 2023 BharatBlog
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
