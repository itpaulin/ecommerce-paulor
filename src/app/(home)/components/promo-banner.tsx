import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    <div className="bg-banner-light dark:bg-banner-dark mx-5 rounded-lg">
      <Image
        width={0}
        height={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        {...props}
      />
    </div>
  );
};

export default PromoBanner;
