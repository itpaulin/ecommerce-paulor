import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

const computeProductTotalPrice = (product: Product): ProductWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    };
  }

  const totalPrice =
    Number(product.basePrice) -
    Number(product.basePrice) * (product.discountPercentage / 100);

  return {
    ...product,
    totalPrice,
  };
};

export default computeProductTotalPrice;
