import MagazineFilter from "./MagazineFilter";

export default function MagazineMain() {
  return (
    <>
      <div className="px-[88px] pt-[75px] pb-[120px]">
        {/* 매거진 제목 컴포넌트로 만들어야함 */}
        <h1 className="text-[32px] font-recipe mb-6">매거진</h1>
        <MagazineFilter />
      </div>
    </>
  )
}