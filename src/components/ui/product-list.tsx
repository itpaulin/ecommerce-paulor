import ProductItem from "@/components/ui/product-item";
import computeProductTotalPrice from "@/helpers/product";
import { Product } from "@prisma/client";
import React from "react";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="no-scrollbar flex w-full gap-4 overflow-x-auto px-5 md:px-0">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={computeProductTotalPrice(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
