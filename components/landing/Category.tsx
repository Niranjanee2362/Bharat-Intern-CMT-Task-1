import {
  CircleDollarSign,
  Laptop2,
  Megaphone,
  MessageSquare,
  LucideIcon,
  BrainCircuit,
  HeartPulse,
  TentTree,
  ChefHat,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface CategoryData {
  Svg: LucideIcon;
  title: string;
}

function Category() {
  const CATEGORY: CategoryData[] = [
    {
      Svg: BrainCircuit,
      title: "Innovation",
    },
    {
      Svg: HeartPulse,
      title: "Health",
    },
    {
      Svg: TentTree,
      title: "Wanderlust",
    },
    {
      Svg: Megaphone,
      title: "Storytelling",
    },
    {
      Svg: Laptop2,
      title: "Fashion",
    },
    {
      Svg: Laptop2,
      title: "Tech",
    },
    {
      Svg: ChefHat,
      title: "Food",
    },
    {
      Svg: MessageSquare,
      title: "Career",
    },
  ];

 

  return (
    <section className="py-[50px] md:py-[80px]" id="">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-8 ">
          {CATEGORY.map((category, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 group overflow-hidden z-[2] transition-all select-none"
            >
              <div>
                <category.Svg strokeWidth={1.5} size={32} />
              </div>
              <div className="flex">
                <span className="text-lg md:text-2xl lg:text-4xl font-bold">
                  <Link href={`/category/${category.title}`}>{category.title}</Link>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
