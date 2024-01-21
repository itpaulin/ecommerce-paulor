"use client";

import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  const { addProductToCart } = useContext(CartContext);

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };
  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddProductToCart = () => {
    addProductToCart({ ...product, quantity });
  };
  return (
    <div className="flex flex-col md:bg-accent md:p-10">
      <h2 className="text-lg md:pb-8 md:text-[1.5625rem]">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold md:text-3xl">
          R$ {product.totalPrice.toFixed(2)}
        </h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}</DiscountBadge>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className="flex text-sm opacity-75 md:text-base">
          De:
          <p className=" pl-2 text-sm line-through opacity-75 md:text-base">
            R$ {Number(product.basePrice).toFixed(2)}
          </p>
        </p>
      )}

      <div className="items-center">
        <Button
          disabled={quantity === 1}
          size="icon"
          variant="outline"
          onClick={handleDecreaseQuantityClick}
        >
          <ArrowLeftIcon size={16} />
        </Button>
        {quantity}
        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreaseQuantityClick}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>

      <Button
        className="mt-8 font-bold uppercase "
        onClick={handleAddProductToCart}
      >
        Adicionar ao carrinho
      </Button>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2 md:bg-[#2A2A2A]">
        <div className="flex items-center gap-3">
          <TruckIcon />

          <div className="flex flex-col">
            <p>
              Entrega via <span className="font-bold">PRPacket®</span>
            </p>
            <p className="text-[#8162FF]">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>
        <p className="text-xs font-bold">Frete Grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
