import CardList from "@/components/common/CardList";
import Filter from "@/components/common/Filter";
import PageTitle from "@/components/common/PageTitle";
import ResultCount from "@/components/common/ResultCount";
import SortingOptions from "@/components/common/SortingOptions";

const dummy: Card[] = [
  {
    id: 0,
    image: "/images/contest_poster.png",
    title: "제2회 EBS 온라인클래스 교육 콘텐츠 공모전",
    organizer: "EBS 한국교육방송공사",
    endAt: "2024.11.15",
    views: 309,
  },
  {
    id: 1,
    image: "/images/contest_poster.png",
    title:
      "아이템 타이틀이 너무너무 길어서 그리드 크기를 벗어난다면 어떻게 하면 좋을까요",
    organizer: "주최사이름이너무긴경우점점점으로처리하는예시",
    endAt: "2024.11.15",
    views: 99,
  },
  {
    id: 2,
    image: "/images/contest_poster.png",
    title: "아이템 타이틀",
    organizer: "주최사 이름",
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
];

export default function ContestPage() {
  return (
    <div className="container">
      <PageTitle />
      <Filter />
      <SortingOptions />
      <ResultCount />
      <CardList items={dummy} />
    </div>
  );
}
