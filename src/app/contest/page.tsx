import Filter from "@/components/common/Filter";
import PageTitle from "@/components/common/PageTitle";
import ResultCount from "@/components/common/ResultCount";
import SortingOptions from "@/components/common/SortingOptions";

export default function ContestPage() {
  return (
    <div className="container">
      <PageTitle />
      <Filter />
      <SortingOptions />
      <ResultCount />
    </div>
  );
}
