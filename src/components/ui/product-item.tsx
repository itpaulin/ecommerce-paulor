import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "./badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}
const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex w-[170px] flex-col gap-4">
      <div className="relative flex h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className=" h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
          alt={product.name}
        />
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">
            <ArrowDownIcon size={14} />
            {product.discountPercentage}%
          </Badge>
        )}
      </div>
      <div>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <p className="font-semibold ">
            R$ {Number(product.totalPrice).toFixed(2)}
          </p>
          {product.discountPercentage > 0 && (
            <>
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs line-through opacity-75">
                R$ {product.basePrice.toFixed(2)}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
