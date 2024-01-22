import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import computeProductTotalPrice from "@/helpers/product";
import ProductList from "@/components/ui/product-list";
import SectionTitle from "@/components/ui/section-title";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}
const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: { slug: slug },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col pb-8 md:px-[6.25rem]">
      <div className="hidden md:grid md:grid-cols-2 md:gap-8">
        <ProductImages imageUrls={product.imageUrls} name={product.name} />
        <ProductInfo product={computeProductTotalPrice(product)} />
      </div>
      <div className=" md:hidden">
        <ProductImages imageUrls={product.imageUrls} name={product.name} />
        <div className="px-5 py-8">
          <ProductInfo product={computeProductTotalPrice(product)} />
        </div>
      </div>

      <div className="flex flex-col gap-y-6 pt-8 md:pt-10">
        <SectionTitle>Produtos Recomendados</SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
