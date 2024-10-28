import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import DdayTag from "./DdayTag";

const datas: {
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
    title: "두드림페스티벌 공모전",
    period: "24.10.01 ~ 24.10.31",
    imgUrl: "/images/contest_poster2.png",
  },
  {
    posterId: 3,
    title: "네이버클라우드 캠프",
    period: "24.10.01 ~ 24.10.31",
    imgUrl: "/images/activity_poster.png",
  },
  {
    posterId: 4,
    title: "한국체육산업개발(주) 홍보 웹툰 공모전",
    period: "24.10.01 ~ 24.10.31",
    imgUrl: "/images/contest_poster.png",
  },
  {
    posterId: 5,
    title: "두드림페스티벌 공모전",
    period: "24.10.01 ~ 24.10.31",
    imgUrl: "/images/contest_poster2.png",
  },
  {
    posterId: 6,
    title: "네이버클라우드 캠프",
    period: "24.10.01 ~ 24.10.31",
    imgUrl: "/images/activity_poster.png",
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
  {
    posterId: 9,
    title: "한국체육산업개발(주) 홍보 웹툰 공모전",
    period: "24.10.01 ~ 24.10.31",
    imgUrl: "/images/contest_poster.png",
  },
  {
    posterId: 10,
    title: "한국체육산업개발(주) 홍보 웹툰 공모전",
    period: "24.10.01 ~ 24.10.31",
    imgUrl: "/images/contest_poster.png",
  },
  {
    posterId: 11,
    title: "한국체육산업개발(주) 홍보 웹툰 공모전",
    period: "24.10.01 ~ 24.10.31",
    imgUrl: "/images/contest_poster.png",
  },
  {
    posterId: 12,
    title: "한국체육산업개발(주) 홍보 웹툰 공모전",
    period: "24.10.01 ~ 24.10.31",
    imgUrl: "/images/contest_poster.png",
  },
];

export default function SubCarousel() {
  return (
    <>
      <div className="h-[512px] w-full">
        <Swiper
          slidesPerView={3}
          modules={[Pagination]}
          pagination={{
            type: "fraction",
          }}
          className="mySwiper"
        >
          {datas.map((data) => (
            <SwiperSlide key={data.posterId}>
              <div className="flex flex-col max-w-[400px] h-[420px] gap-[16px] cursor-pointer">
                <div className="w-full h-[290px]">
                  <Image
                    className="rounded-[20px]"
                    src={data.imgUrl}
                    alt="contest_poster"
                    width={400}
                    height={290}
                    style={{ height: "290px" }}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
