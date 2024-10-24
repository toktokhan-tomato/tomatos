"use client";
import { magazineFilterGroups } from "@/lib/filterGroups";
import { useState } from "react";
import TomatoPick from "@/components/magazine/constents/TomatoPick";
import TomatoTip from "@/components/magazine/constents/TomatoTip";
import AwardGallery from "@/components/magazine/constents/AwardGallery";
import TomatoReport from "@/components/magazine/constents/TomatoReport";

export default function MagazineFilter() {
  const [selectedButton, setSelectedButton] = useState<string>(magazineFilterGroups[0]);

  const renderContent = () => {
    switch (selectedButton) {
      case "토마토 Pick":
        return <TomatoPick />;
      case "토마토 Tip":
        return <TomatoTip />;
      case "수상작 갤러리":
        return <AwardGallery />;
      case "토마토리포트":
        return <TomatoReport />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* 필터 */}
      <div className="relative flex gap-[77px] px-[14px]">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-100" />
        {magazineFilterGroups.map((group, i) => (
          <div key={i} className="relative">
            <button
              onClick={() => setSelectedButton(group)}
              className={`relative text-[26px] pb-2 transition-colors ${
                selectedButton === group
                  ? "text-gray-500"
                  : "text-gray-200"
              }`}
            >
              {group}
            </button>
            {selectedButton === group && (
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#222222] rounded-full" />
            )}
          </div>
        ))}
      </div>
      {/* 컨텐츠 */}
      <div className="mt-6">
        {renderContent()}
      </div>
    </>
  );
}