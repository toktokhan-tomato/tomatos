import Image from "next/image";
import images from "../../../../public/images/images";

export default function TomatoPick() {
  return (
    <div>
      <div className="w-full mb-[106px]">
        <Image
          src={images.tomatoPickBanner.src}
          alt={images.tomatoPickBanner.alt}
          width={1000}
          height={1000}
          className="w-full h-auto"
          priority
        />
      </div>
      <div className="flex flex-col gap-[40px]">
        <h1 className="text-[32px] font-recipe">지금 꼭 봐야하는 매거진</h1>
        <div>null</div>
      </div>
    </div>
  );
}
