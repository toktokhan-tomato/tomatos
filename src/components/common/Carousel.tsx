"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const banners: {
  bannerId: number;
  title: string;
  period: string;
  field: string;
  target: string;
  imgUrl: string;
}[] = [
  {
    bannerId: 1,
    title: "2024 두드림 페스티벌 자원 봉사자 모집",
    period: "24.10.01 ~ 24.10.31",
    field: "봉사활동",
    target: "일반인, 대학생, 청소년",
    imgUrl: "/images/contest_poster2.png",
  },
  {
    bannerId: 2,
    title: "2024 두드림 페스티벌 자원 봉사자 모집",
    period: "24.10.01 ~ 24.10.31",
    field: "봉사활동",
    target: "일반인, 대학생, 청소년",
    imgUrl: "/images/contest_poster2.png",
  },
  {
    bannerId: 3,
    title: "2024 두드림 페스티벌 자원 봉사자 모집",
    period: "24.10.01 ~ 24.10.31",
    field: "봉사활동",
    target: "일반인, 대학생, 청소년",
    imgUrl: "/images/contest_poster2.png",
  },
  {
    bannerId: 4,
    title: "2024 두드림 페스티벌 자원 봉사자 모집",
    period: "24.10.01 ~ 24.10.31",
    field: "봉사활동",
    target: "일반인, 대학생, 청소년",
    imgUrl: "/images/contest_poster2.png",
  },
];

export function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const router = useRouter();
  const [selectedBanner] = useState(0);

  return (
    <div className="relative">
      <div
        className="carousel-container relative overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex">
          {banners.map((banner) => (
            <div
              className="carousel-item relative flex justify-center items-center w-full bg-[#EB6265]"
              key={banner.bannerId}
            >
              <div className="flex items-center justify-center w-[1264px]">
                <div className="flex flex-col w-[40%] gap-5">
                  <div className=" max-w-[450px] text-heading-3 text-white">
                    {banner.title}
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="text-white">
                      <span className="text-white text-body-1-bold">기간</span>
                      <span className="mx-6 border-l h-5 border-white"></span>
                      <span className="text-white text-body-2">
                        {banner.period}
                      </span>
                    </div>
                    <div>
                      <span className="text-white text-body-1-bold">분야</span>
                      <span className="mx-6 border-l h-5 border-white"></span>
                      <span className="text-white text-body-2">
                        {banner.field}
                      </span>
                    </div>
                    <div>
                      <span className="text-white text-body-1-bold">대상</span>
                      <span className="mx-6 border-l h-5 border-white"></span>
                      <span className="text-white text-body-2">
                        {banner.target}
                      </span>
                    </div>
                  </div>
                  <button
                    className="w-[160px] h-[52px] bg-green-500 rounded-[5px] px-[15px] text-white text-body-2 mt-[60px]"
                    onClick={() => router.push("/contest/1")}
                  >
                    자세히보기
                  </button>
                </div>
                <Image
                  src={banner.imgUrl}
                  alt="banner_img"
                  width={700}
                  height={586}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 캐러셀 length부분 */}
        <div className="absolute right-2 top-2 bg-[#0e0e0e72] rounded-full z-50 p-2">
          <div className="flex justify-evenly items-center text-xs w-20 font-semibold">
            <span className="text-white">{selectedBanner + 1}</span>
            <div className="w-[2.05px] h-[2.05px] rounded-full bg-[#ffffffb2]" />
            <span className="text-[#ffffffb2]">{banners.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
