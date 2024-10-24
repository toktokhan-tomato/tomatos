import Filter from "@/components/common/Filter";
import SortingOptions from "@/components/common/SortingOptions";

export default function ContestPage() {
  return (
    <div className="container">
      <h1 className="text-[32px] font-recipe">공모전</h1>
      <Filter />
      <SortingOptions />
    </div>
  );
}
