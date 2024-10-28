"use client";

import { useState } from "react";
import Image from "next/image";
import DdayTag from "@/components/common/DdayTag";
import Filter from "@/components/common/Filter";
import images from "../../../../public/images/images";
import { twMerge } from "tailwind-merge";
import TabSwitchCase from "@/components/common/TabSwitchCase";
import TomatoTip from "@/components/magazine/constents/TomatoTip";
import AwardGallery from "@/components/magazine/constents/AwardGallery";
import DetailInfo from "@/app/contest/_components/DetailInfo";
import { detailFilterGroups } from "@/lib/filterGroups";

/**
 * [대외활동 상세 페이지]
 *
 * @author seonga
 */
export default function ActivityDetailPage() {
  const [selectedTab, setSelectedTab] = useState<string>(detailFilterGroups[0]);
  return (
    <>
      <div className="container">
        <h1 className="text-[32px] font-recipe">대외활동</h1>
        <Filter />
        <div className="mt-[60px] flex items-center flex-col">
          <div className="w-full flex gap-[100px] mb-[150px]">
            {/* 상세정보 left영역 start */}
            <div>
              <Image
                src={images.activityPoster.src}
                alt={images.activityPoster.alt}
                width={495}
                height={698}
              />
            </div>
            {/* 상세정보 left영역 end */}
            {/* 상세정보 right영역 start */}
            <div className="w-[660px]">
              <DdayTag endAt="2024.11.12" iconNm="tomatoIconRed2" />
              <div className="max-w-[480px] pl-[10px]">
                <h3 className="text-heading-3 py-[10px] ">
                  [네이버클라우드캠프] 2024 서포터즈 &apos;클로버 (CLOVER)
                  모집&apos;
                </h3>
                <p className=" text-body-2 text-gray-300">
                  등록일: 2024.10.14 | 조회 1,390회
                </p>
              </div>
              {/* 상세정보 grid영역 start */}
              <div className="w-full border-t border-gray-100 mt-[50px]">
                <div className="grid grid-cols-[25%_75%] text-heading-7 text-gray-500">
                  <div className="text-heading-6 text-gray-500 border-b border-gray-100 py-[25px] pl-[10px]">
                    기업형태
                  </div>
                  <div className="border-b border-gray-100 py-[25px]">
                    중소기업
                  </div>

                  <div className="text-heading-6 text-gray-500 border-b border-gray-100 py-[25px] pl-[10px]">
                    접수 기간
                  </div>
                  <div className="border-b border-gray-100 py-[25px]">
                    2024.09.02 ~ 2024.11.12
                  </div>

                  <div className="text-heading-6 text-gray-500 border-b border-gray-100 py-[25px] pl-[10px]">
                    모집 인원
                  </div>
                  <div className="border-b border-gray-100 py-[25px]">48명</div>

                  <div className="text-heading-6 text-gray-500 border-b border-gray-100 py-[25px] pl-[10px]">
                    참여 대상
                  </div>
                  <div className="border-b border-gray-100 py-[25px]">
                    대학생
                  </div>

                  <div className="text-heading-6 text-gray-500 border-b border-gray-100 py-[25px] pl-[10px]">
                    홈페이지
                  </div>
                  <div className="border-b border-gray-100 py-[25px]">
                    <a
                      href="https://bitcamp.co.kr/"
                      target="_blank"
                      className="underline"
                    >
                      https://bitcamp.co.kr/
                    </a>
                  </div>
                </div>
              </div>
              {/* 상세정보 grid영역 end */}
            </div>
            {/* 상세정보 right영역 end */}
          </div>
          {/* 하단 탭영역 start */}
          <div className="w-full">
            {/* tab 컴포넌트 */}
            <div className="relative flex gap-[77px] px-[14px] items-center justify-center w-full">
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-100" />
              {detailFilterGroups.map((group, i) => (
                <div
                  key={i}
                  className="flex relative w-full items-center justify-center"
                >
                  <button
                    onClick={() => setSelectedTab(group)}
                    className={twMerge(
                      "tab",
                      selectedTab === group ? "active-tab" : ""
                    )}
                  >
                    {group}
                  </button>
                  {selectedTab === group && (
                    <div className="absolute bottom-0 left-0 w-full h-[4px] bg-red-500 rounded-full" />
                  )}
                </div>
              ))}
            </div>

            {/* tab에 따른 컴포넌트 */}
            <div className="my-[70px]">
              <TabSwitchCase
                value={selectedTab}
                caseBy={{
                  상세정보: <DetailInfo />,
                  "토마토 TIP": <TomatoTip />,
                  "수상작 갤러리": <AwardGallery />,
                }}
                defaultComponent={<DetailInfo />}
              />
            </div>
          </div>
          {/* 하단 탭영역 end */}
        </div>
      </div>
    </>
  );
}
