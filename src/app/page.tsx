"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import images from "../../public/images/images";
import DdayTag from "@/components/common/DdayTag";
import SubCarousel from "@/components/common/SubCarousel";
import MainCarousel from "@/components/common/MainCarousel";

/**
 * [메인화면 페이지]
 *
 * @author seonga
 */
const bestPickDatas: {
  posterId: number;
  title: string;
  period: string;
  imgUrl: string;
}[] = [
  {
    posterId: 1,
    title: "한국체육산업개발(주) 홍보 웹툰 공모전",
    period: "24.10.01 ~ 24.10.31",
    imgUrl: "/images/contest_poster.png",
  },
  {
    posterId: 2,
    title: "한국체육산업개발(주) 홍보 웹툰 공모전",
    period: "24.10.01 ~ 24.10.31",
    imgUrl: "/images/contest_poster.png",
  },
  {
    posterId: 3,
    title: "한국체육산업개발(주) 홍보 웹툰 공모전",
    period: "24.10.01 ~ 24.10.31",
    imgUrl: "/images/contest_poster.png",
  },
  {
    posterId: 4,
    title: "한국체육산업개발(주) 홍보 웹툰 공모전",
    period: "24.10.01 ~ 24.10.31",
    imgUrl: "/images/contest_poster.png",
  },
  {
    posterId: 5,
    title: "한국체육산업개발(주) 홍보 웹툰 공모전",
    period: "24.10.01 ~ 24.10.31",
    imgUrl: "/images/contest_poster.png",
  },
  {
    posterId: 6,
    title: "한국체육산업개발(주) 홍보 웹툰 공모전",
    period: "24.10.01 ~ 24.10.31",
    imgUrl: "/images/contest_poster.png",
  },
  {
    posterId: 7,
    title: "한국체육산업개발(주) 홍보 웹툰 공모전",
    period: "24.10.01 ~ 24.10.31",
    imgUrl: "/images/contest_poster.png",
  },
  {
    posterId: 8,
    title: "한국체육산업개발(주) 홍보 웹툰 공모전",
    period: "24.10.01 ~ 24.10.31",
    imgUrl: "/images/contest_poster.png",
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="mt-[84px] flex flex-col items-center justify-center">
        <div className="w-full min-h-full border">
          <MainCarousel />
        </div>
        <div className="w-[1264px] min-h-full border">
          <div className="w-full mb-[120px]">
            <Image
              src={images.eventBanner.src}
              alt={images.eventBanner.alt}
              width={1264}
              height={170}
            />
          </div>
          {/* BEST PICK 영역 */}
          <div className="mb-[100px]">
            <h3 className="text-[32px] font-recipe text-red-500 mb-[40px]">
              BEST PICK
            </h3>
            <div className="flex flex-wrap gap-[20.5px] w-full">
              {bestPickDatas.map((data) => (
                <div
                  className="flex flex-col max-w-[300px] gap-[16px] mb-[60px] cursor-pointer"
                  key={data.posterId}
                  onClick={() => router.push("/contest/1")}
                >
                  <div className="w-full">
                    <Image
                      className="rounded-[20px]"
                      src={data.imgUrl}
                      alt="contest_poster"
                      width={300}
                      height={360}
                    />
                  </div>
                  <p className="text-heading-6">{data.title}</p>
                  <div className="flex gap-4">
                    <DdayTag endAt="2024.10.31" iconNm="tomatoIconRed2" />
                    <span className="text-body-2 text-[20px] text-gray-300">
                      {data.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-[100px]">
            <p className="flex mb-[35px] gap-3 items-center">
              <span className="text-[32px] font-recipe">토마토들</span>
              <span className="text-[32px] font-recipe text-red-500">
                추천 활동
              </span>
              <Image
                src={images.tomatoBadge.src}
                alt={images.tomatoBadge.alt}
                height={80}
                width={80}
              />
            </p>
            <div className="flex flex-wrap gap-[20.5px] w-full">
              {bestPickDatas.map((data) => (
                <div
                  className="flex flex-col max-w-[300px] gap-[16px] mb-[60px] cursor-pointer"
                  key={data.posterId}
                  onClick={() => router.push("/contest/1")}
                >
                  <div className="w-full">
                    <Image
                      className="rounded-[20px]"
                      src={data.imgUrl}
                      alt="contest_poster"
                      width={300}
                      height={360}
                    />
                  </div>
                  <p className="text-heading-6">{data.title}</p>
                  <div className="flex gap-4">
                    <DdayTag endAt="2024.10.31" iconNm="tomatoIconRed2" />
                    <span className="text-body-2 text-[20px] text-gray-300">
                      {data.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-[100px]">
            <h3 className="text-[32px] font-recipe mb-[40px]">공모전</h3>
            <SubCarousel />
          </div>
          <div className="mb-[100px]">
            <h3 className="text-[32px] font-recipe mb-[40px]">대외활동</h3>
            <SubCarousel />
          </div>
          <div className="mb-[100px]">
            <h3 className="text-[32px] font-recipe mb-[40px]">매거진</h3>
            <SubCarousel />
          </div>
        </div>
      </div>
    </>
  );
}
