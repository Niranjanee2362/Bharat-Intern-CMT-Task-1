import Image from "next/image";
import React from "react";
import BlogCover  from '../../public/assets/BlogCover.jpg'

function BlogId() {
  return (
    <main className="w-full min-h-screen">
      <div>
        <Image
          unoptimized
          className=" object-cover w-full h-full max-h-72"
          src={BlogCover}
          alt="blog cover"
          width={100}
          height={100}
        />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 md:py-12 md:px-6 lg:py-16 lg:px-8">
        <div className="">
          <p className="bg-app-slate-blue rounded font-medium px-2 py-1 w-fit">
            Innovation
          </p>
        </div>
        <div className="mx-auto mt-2  text-left">
          <h2 className="text-3xl lg:text-5xl font-bold">Popular Blogs</h2>
        </div>
        <div className="py-12 max-w-6xl text-left">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vel arcu gravida leo molestie semper vitae sit amet urna. Nulla
            consectetur nulla pharetra magna sodales maximus. Integer ornare,
            neque at convallis rutrum, odio risus mollis nibh, ut faucibus velit
            orci et turpis. Nam et dui purus. Aenean libero sem, varius
            fringilla iaculis quis, sodales eget eros. Aliquam malesuada at
            lacus sit amet volutpat. Quisque feugiat vulputate nulla et lacinia.
            Aenean vulputate facilisis augue a mollis. Pellentesque eget ipsum
            dapibus, volutpat tellus non, pretium risus. Sed semper, quam sit
            amet ornare bibendum, ipsum erat auctor libero, sit amet ultrices
            ligula libero at odio. Nam tempor lacus in finibus viverra. Fusce
            non lorem porta, suscipit est ut, mollis ex. Sed id mauris suscipit,
            aliquam tellus at, condimentum massa. Donec sed lacus consequat,
            consequat mauris at, sagittis felis. Aliquam erat volutpat. Duis
            <br/>

            malesuada ultrices lorem. In viverra congue fermentum. Donec
            consequat est tortor. Nulla id laoreet ligula. Aenean ullamcorper id
            turpis sit amet tempus. Nunc facilisis leo nec diam suscipit
            suscipit. Donec nibh velit, vulputate a est ac, molestie egestas
            lacus. Nam nisi nunc, lacinia eu mauris a, pretium placerat nisi.
            Mauris in enim ac odio egestas feugiat non vitae nisi. Nulla iaculis
            eu augue vel interdum. Nam non facilisis purus. Proin eu tortor
            cursus, accumsan ipsum nec, venenatis est. Etiam leo risus,
            porttitor vel faucibus id, facilisis quis est. Sed nisl diam,
            suscipit nec volutpat feugiat, egestas sed nisi. Curabitur nec felis
            vehicula, commodo diam sit amet, blandit risus. Cras posuere
            condimentum justo, nec cursus nisi faucibus ut. Donec pellentesque
            non nunc et mollis. Sed eget nunc nec leo auctor porttitor. Fusce ut
            viverra tellus. Proin tellus ligula, consectetur non nunc non,
            <br/>
            convallis vulputate quam. Sed sem risus, ornare a placerat quis,
            gravida a orci. Integer tincidunt consectetur dui ultrices dapibus.
            Ut eget convallis est. Donec vitae tincidunt mauris. Proin vitae
            justo eu metus viverra viverra. Quisque gravida arcu et luctus
            imperdiet. Suspendisse eget pretium tellus, sed mattis elit. Duis
            efficitur ex at libero facilisis dignissim. Praesent ac pretium
            justo. Proin semper est rhoncus tellus elementum semper. Fusce ex
            tellus, dapibus quis mauris et, tristique convallis dui. Vivamus
            fermentum urna a massa facilisis, sollicitudin malesuada odio
            semper. Aliquam tincidunt ipsum et pretium posuere. Etiam ut quam
            quam. Praesent eget libero cursus, blandit risus ornare, hendrerit
            turpis. Etiam volutpat porta nisi non scelerisque. Cras consequat
            egestas nisl, at posuere ligula gravida vitae. Pellentesque at eros
            eleifend, pulvinar arcu imperdiet, imperdiet enim. Cras maximus,
            ante vel imperdiet ultrices, lorem est blandit libero, id
            sollicitudin odio ligula et magna. Sed auctor mauris sed nulla
            dignissim posuere.
          </span>
        </div>
      </div>
    </main>
  );
}

export default BlogId;
