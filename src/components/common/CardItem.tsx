import Image from "next/image";
import DdayTag from "@/components/common/DdayTag";

interface CardItemProps {
  item: {
    image: string;
    title: string;
    organizer: string;
    endAt: string;
    views: number;
  };
}

export default function CardItem({ item }: CardItemProps) {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  // 제목은 42자, 주최사는 25자로 제한
  const truncatedTitle = truncateText(item.title, 42);
  const truncatedOrganizer = truncateText(item.organizer, 25);

  return (
    <div className="flex flex-col mb-14">
      <Image
        src={item.image}
        alt={item.title}
        width={300}
        height={360}
        className="border-2 border-[#D3D3D3] rounded-[20px] mb-4"
      />
      <p className="text-[24px] text-[#222222] font-[600] h-[74px] mb-2 line-clamp-2">
        {truncatedTitle}
      </p>
      <p className="text-[20px] text-[#424242] mb-2 truncate">
        {truncatedOrganizer}
      </p>
      <div className="flex items-center gap-2">
        <DdayTag endAt="2024.11.12" iconNm="tomatoIconRed2" />
        <span className="text-[20px] text-[#7A7A7A]">
          조회수 {item.views}회
        </span>
      </div>
    </div>
  );
}
