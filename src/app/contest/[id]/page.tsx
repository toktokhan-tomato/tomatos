"use client";

import { useState } from "react";
import Image from "next/image";
import DdayTag from "@/components/common/DdayTag";
import Filter from "@/components/contest/Filter";
import images from "@/assets/images/images";
import { twMerge } from "tailwind-merge";

export default function ContestDetailPage() {
  const [selectedTab, setSelectedTab] = useState("상세내용");
  return (
    <>
      <h1 className="text-[32px] font-recipe">공모전</h1>
      <Filter />
      <div className="mt-[60px] flex items-center flex-col">
        <div className="w-full flex gap-[100px] mb-[150px]">
          {/* 상세정보 left영역 start */}
          <div>
            <Image
              src={images.contestPoster}
              alt="contest_poster"
              width={495}
              height={698}
            />
          </div>
          {/* 상세정보 left영역 end */}
          {/* 상세정보 right영역 start */}
          <div className="w-[660px]">
            <DdayTag endAt="2024.11.12" iconNm="tomatoIconRed2" />
            <div className="max-w-[480px]">
              <h3 className="text-heading-3 py-[10px] ">
                2024 동성로 BI 슬로건 디자인 공모전
              </h3>
              <p className=" text-body-2 text-gray-300">
                등록일: 2024.09.30 | 조회 1,390회
              </p>
            </div>
            {/* 상세정보 grid영역 start */}
            <div className="w-full border-t border-gray-100 mt-[50px]">
              <div className="grid grid-cols-[20%_80%] text-heading-7 text-gray-500">
                <div className="text-heading-6 text-gray-500 border-b border-gray-100 py-[40px]">
                  공모 분야
                </div>
                <div className="border-b border-gray-100 py-[40px]">디자인</div>

                <div className="text-heading-6 text-gray-500 border-b border-gray-100 py-[40px]">
                  공모 기간
                </div>
                <div className="border-b border-gray-100 py-[40px]">
                  2024.09.02 ~ 2024.11.12
                </div>

                <div className="text-heading-6 text-gray-500 border-b border-gray-100 py-[40px]">
                  주최 기관
                </div>
                <div className="border-b border-gray-100 py-[40px]">
                  케이티앤지 상상유니브 대구운영사무국
                </div>

                <div className="text-heading-6 text-gray-500 border-b border-gray-100 py-[40px]">
                  참여 대상
                </div>
                <div className="border-b border-gray-100 py-[40px]">대학생</div>

                <div className="text-heading-6 text-gray-500 border-b border-gray-100 py-[40px]">
                  홈페이지
                </div>
                <div className="border-b border-gray-100 py-[40px]">
                  <a
                    href="https://www.sangsanguniv.com/"
                    target="_blank"
                    className="underline"
                  >
                    https://www.sangsanguniv.com/
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
          <div className="flex items-center justify-between border-b border-gray-100">
            <div
              className={twMerge(
                "tab",
                selectedTab === "상세내용" ? "active-tab" : ""
              )}
              onClick={() => setSelectedTab("상세내용")}
            >
              <span className="py-[10px]">상세내용</span>
            </div>
            <div
              className={twMerge(
                "tab",
                selectedTab === "토마토TIP" ? "active-tab" : ""
              )}
              onClick={() => setSelectedTab("토마토TIP")}
            >
              <span>토마토 TIP</span>
            </div>
            <div
              className={twMerge(
                "tab",
                selectedTab === "수상작갤러리" ? "active-tab" : ""
              )}
              onClick={() => setSelectedTab("수상작갤러리")}
            >
              <span>수상작 갤러리</span>
            </div>
          </div>
          <div className="my-[70px]">
            {selectedTab === "상세내용" && (
              <>
                <h1 className="text-heading-5 mb-[40px]">
                  2024 동성로 BI 슬로건 디자인 공모전
                </h1>
                <h2 className="text-body-3-bold">주제</h2>
                <p className="mb-[40px]">
                  대구 동성로의 가치를 이미지로 나타내는 BI와 슬로건
                </p>

                <h2 className="text-body-3-bold">일정</h2>
                <ul className="mb-[40px]">
                  <li>
                    접수 일정: 2024. 8. 23(금) - 2024. 9. 25(수) 15:00까지
                  </li>
                  <li>결과 발표: 2024. 10. 24(목)</li>
                  <li>※상세한 일정은 홈페이지 참고</li>
                </ul>

                <h2 className="text-body-3-bold">지원자격</h2>
                <p className="mb-[40px]">
                  동성로에 관심있는 대구경북 지역주민 누구나 (1명 이상 최대
                  5명까지 팀 구성 가능)
                </p>

                <h2 className="text-body-3-bold">출품규격</h2>
                <p className="mb-[10px]">
                  A3 사이즈, 300dpi 이상, 개트톤 색상이나 자유형식 구성
                </p>
                <p className="mb-[40px]">
                  ※JPG파일 제출할 경우 ZIP파일 형식으로 제출
                </p>

                <h2 className="text-body-3-bold">시상 내역</h2>
                <ul className="mb-[40px]">
                  <li>[대상]: 대구광역시장상, 상금200만원</li>
                  <li>[최우수상]: 동성로상가연합회장상, 상금100만원</li>
                  <li>[우수상]: 상상유니브운영사장상, 상금50만원</li>
                </ul>

                <h2 className="text-body-3-bold">홈페이지 링크</h2>
                <p className="mb-[40px]">
                  <a href="https://www.sangsanguniv.com/univ/program/view/programid=4d123p9144456a6c9db4318728a6a337">
                    상세 정보 보기
                  </a>
                </p>

                <h2 className="text-body-3-bold">유의사항</h2>
                <ul className="mb-[40px]">
                  <li>모든 출품작은 순수창작물 또는 순수창작물이어야 함</li>
                  <li>
                    출품작에 대한 저작권은 출품자에게 있으며, 수상작에 대한
                    저작권은 주최측에 귀속됨
                  </li>
                  <li>
                    출품작은 반환되지 않으며, 수상작은 필요한 경우 수정 및
                    보완이 가능함 (사전협의 하에)
                  </li>
                  <li>
                    기타 자세한 사항은 홈페이지를 참조하거나 운영사무국으로 문의
                    바람
                  </li>
                  <li>
                    - 운영사무국: 상상유니브 운영사무국 (전화번호: 053-123-4567)
                  </li>
                </ul>
              </>
            )}
            {selectedTab === "토마토TIP" && (
              <>
                <div>토마토 TIP 준비중입니다.</div>
              </>
            )}
            {selectedTab === "수상작갤러리" && (
              <>
                <div>수상작 갤러리 준비중입니다.</div>
              </>
            )}
          </div>
        </div>
        {/* 하단 탭영역 end */}
      </div>
    </>
  );
}
