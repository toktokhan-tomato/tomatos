"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { useRouter } from "next/navigation";

const banners = [
  {
    bannerId: 1,
    title: "2024 두드림 페스티벌 자원 봉사자 모집",
    period: "24.10.01 ~ 24.10.31",
    field: "봉사활동",
    target: "일반인, 대학생, 청소년",
    imgUrl: "/images/contest_poster2.png",
    bgColor: "#EB6265",
  },
  {
    bannerId: 2,
    title: "2024 동성로 BI 슬로건 디자인 공모전",
    period: "24.10.01 ~ 24.10.31",
    field: "봉사활동",
    target: "일반인, 대학생, 청소년",
    imgUrl: "/images/contest_poster.png",
    bgColor: "#ED6F2A",
  },
  {
    bannerId: 3,
    title: "[네이버클라우드캠프] 2024 서포터즈 '클로버 (CLOVER) 모집'",
    period: "24.10.01 ~ 2024.11.15",
    field: "대외활동",
    target: "무관",
    imgUrl: "/images/activity_poster.png",
    bgColor: "#2FA356",
  },
];

export default function MainCarousel() {
  const router = useRouter();
  return (
    <div className="h-[700px] w-full">
      <Swiper
        pagination={{ type: "fraction" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        // loop={true}
        // autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.bannerId} style={{ width: "100%" }}>
            <div
              className="flex justify-center items-center w-full h-full "
              style={{ backgroundColor: banner.bgColor }}
            >
              <div
                className="flex items-center justify-center w-[1280px] h-[650px]"
                // style={{ backgroundColor: banner.bgColor }}
              >
                <div className="flex flex-col w-[40%] gap-5">
                  <div className="max-w-[450px] text-heading-3 text-white">
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
                  width={500}
                  height={586}
                  style={{ height: "586px" }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
