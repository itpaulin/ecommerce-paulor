import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "@/components/ui/product-list";
import SectionTitle from "@/components/ui/section-title";
import PromoBanner from "./components/promo-banner";
import Image from "next/image";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const headphones = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "headphones",
      },
    },
  });
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });
  return (
    <>
      <div className="pt-7 md:hidden">
        <Image
          width={0}
          height={0}
          className="h-auto w-full px-5"
          sizes="100vw"
          src="/banner-home-01.png"
          alt="Até 55% Desconto só esse mes"
        />
      </div>
      <div className="hidden md:block">
        <Image
          width={0}
          height={0}
          className="h-auto w-full"
          sizes="100vw"
          src="/banner-desktop-home.png"
          alt="Promobanner desktop"
        />
      </div>
      <div className="flex flex-col gap-8 pt-10 md:px-24 md:pb-10">
        <div className=" px-5">
          <Categories />
        </div>

        <div className="">
          <SectionTitle>Ofertas</SectionTitle>
          <ProductList products={deals} />
        </div>

        <div className=" hidden grid-cols-2 gap-8 md:grid">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            className="bg-banner-light dark:bg-banner-dark h-auto w-full rounded-2xl"
            src="/banner-mouses.png"
            alt="Até 55% de desconto em mouses!"
          />
          <Image
            width={0}
            height={0}
            sizes="100vw"
            className="bg-banner-light dark:bg-banner-dark h-auto w-full rounded-2xl"
            src="/banner-fones.png"
            alt="Até 20% desconto em fones!"
          />
        </div>
        <div className="md:hidden">
          <PromoBanner
            src="/banner-mouses.png"
            alt="Até 55% de desconto em mouses!"
          />
        </div>

        <div className="md:">
          <SectionTitle>Mouses</SectionTitle>
          <ProductList products={mouses} />
        </div>

        <div className="md:hidden">
          <PromoBanner
            src="/banner-fones.png"
            alt="Até 20% desconto em fones!"
          />
        </div>

        <div className="hidden md:block">
          <Image
            width={0}
            height={0}
            className="h-auto w-full"
            sizes="100vw"
            src="/banner-fretegratis.png"
            alt="Promobanner desktop"
          />
        </div>

        <div>
          <SectionTitle>Fones</SectionTitle>
          <ProductList products={headphones} />
        </div>
      </div>
    </>
  );
}
