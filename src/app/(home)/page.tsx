"use client";
import { Button } from "@/components/ui/button";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareDashedBottom,
} from "lucide-react";
import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/banner-home-01.png"
        width={0}
        height={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="Até 55% Desconto só esse mes"
      />
      <div className="mt-8">
        <Categories />
      </div>
      {/* <div className=" mx-5 mt-8 grid grid-cols-2 gap-2 ">
        <Button variant="outline" className="mx-1 my-1 rounded-xl">
          <KeyboardIcon size={18} />
          Teclados
        </Button>
        <Button variant="outline" className="mx-1 my-1 rounded-xl">
          <MouseIcon size={18} />
          Mouses
        </Button>
        <Button variant="outline" className="mx-1 my-1 rounded-xl">
          <HeadphonesIcon size={18} />
          Fones
        </Button>
        <Button variant="outline" className="mx-1 my-1 rounded-xl">
          <SquareDashedBottom size={18} />
          Mousepads
        </Button>
        <Button variant="outline" className="mx-1 my-1 rounded-xl">
          <MonitorIcon size={18} />
          Monitores
        </Button>
        <Button variant="outline" className="mx-1 my-1 rounded-xl">
          <SpeakerIcon size={18} />
          Speakers
        </Button>
      </div> */}
    </div>
  );
}
