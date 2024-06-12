import Navbar from "@/components/nav-bar";
import NewsCard from "@/components/news-card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <ScrollArea className="h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 py-20 pl-10 gap-1 place-items-center">
          <div className="">
            <h2 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-5xl">
              Welcome to the Alumni-Student networking platform
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris.
            </p>

            <Button className="rounded-full px-5 py-2 me-auto mt-10">
              Let get started
            </Button>
          </div>
          <div className="fle">
            <Image src="/grad.png" width={500} height={450} alt="" />
          </div>
        </div>
        <div className="px-10 py-8 flex flex-col gap-4 bg-gray-100 mb-16">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight capitalize">
            latest updates
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[2, 3, 4, 4].map((v) => (
              <NewsCard key={v + "kay"} />
            ))}
          </div>
        </div>
      </ScrollArea>
    </main>
  );
}
