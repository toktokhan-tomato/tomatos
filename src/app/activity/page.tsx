import CardList from "@/components/common/CardList";
import Filter from "@/components/common/Filter";
import PageTitle from "@/components/common/PageTitle";
import ResultCount from "@/components/common/ResultCount";
import SortingOptions from "@/components/common/SortingOptions";

const dummy: Card[] = [
  {
    id: 1,
    image: "/images/activity_poster.png",
    title: "[네이버클라우드캠프] 2024 서포터즈 '클로버 (CLOVER) 모집'",
    organizer: "EBS 한국교육방송공사",
    endAt: "2024.11.15",
    views: 309,
  },
  {
    id: 2,
    image: "/images/contest_poster.png",
    title:
      "아이템 타이틀이 너무너무 길어서 그리드 크기를 벗어난다면 어떻게 하면 좋을까요",
    organizer: "주최사이름이너무긴경우점점점으로처리하는예시",
    endAt: "2024.11.15",
    views: 99,
  },
  {
    id: 3,
    image: "/images/contest_poster.png",
    title: "아이템 타이틀",
    organizer: "주최사 이름",
    endAt: "2024.11.15",
    views: 99,
  },
  {
    id: 4,
    image: "/images/contest_poster.png",
    title: "아이템 타이틀",
    organizer: "주최사 이름",
    endAt: "2024.11.15",
    views: 99,
  },
  {
    id: 5,
    image: "/images/contest_poster.png",
    title: "아이템 타이틀",
    organizer: "주최사 이름",
    endAt: "2024.11.15",
    views: 99,
  },
  {
    id: 6,
    image: "/images/contest_poster.png",
    title: "아이템 타이틀",
    organizer: "주최사 이름",
    endAt: "2024.11.15",
    views: 99,
  },
];

export default function ActivityPage() {
  return (
    <div className="container">
      <PageTitle title="대외활동" />
      <Filter />
      <SortingOptions />
      <ResultCount />
      <CardList items={dummy} />
    </div>
  );
}
