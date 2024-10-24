import images from "../../../public/images/images";
import { differenceInDays } from "date-fns";
import Image from "next/image";

/**
 * [D-day 태그 컴포넌트]
 *
 * endAt날짜 text를 props로 받아 오늘날짜로부터 남은 날짜를 계산해주는 컴포넌트
 * props: endAt-마감일자, iconNm-아이콘이름
 */

type DdayTagPropsType = {
  endAt: string;
  iconNm: keyof typeof images;
};

export default function DdayTag({ endAt, iconNm }: DdayTagPropsType) {
  // Dday계산
  const Dday = (endAt: string) => {
    const today = new Date();
    const endDate = new Date(endAt);
    return differenceInDays(endDate, today);
  };

  return (
    <>
      <div className="flex bg-red-100 text-red-500 w-[85px] h-[33px] text-body-2 gap-2 justify-center items-center rounded-full">
        <Image
          src={images[iconNm].src}
          alt={images[iconNm].alt}
          width={20}
          height={20}
        />
        D-{Dday(endAt)}
      </div>
    </>
  );
}
