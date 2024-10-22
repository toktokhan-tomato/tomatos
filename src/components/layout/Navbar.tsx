"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import images from "@/assets/images/images";

/**
 * [Navbar]
 *
 * 헤더 레이아웃 컴포넌트
 * 로고 (클릭 시, /home으로 routing)
 * 매거진, 공모전, 대외활동, 교육/강연 Link 버튼
 * 검색창 (전체 컨텐츠 검색)
 * 활성화되어있는 Link의 경우 green-500 underline, text-heading-6로 강조표시
 *
 * @author seonga
 */

export default function Navbar() {
  const pathname = usePathname();
  // magazine에서 업데이트된 컨텐츠 상태
  const [isUpdate] = useState(true);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="bg-white w-full h-[84px] flex items-center justify-center fixed top-0 z-10 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.05)]">
        <div className="flex items-center  w-[1264px] h-full  justify-between">
          <ul className="flex items-center justify-center gap-10 text-[24px] text-heading-7">
            <li className="py-[7px]">
              <div className="flex gap-3 items-center justify-center">
                <Link href="/">
                  <span>
                    <Image
                      src={images.tomatoLogo}
                      alt="tomato_logo"
                      width={125}
                      height={28}
                    />
                  </span>
                </Link>
                <span>
                  <Image
                    src={images.tomatoIconRed}
                    alt="tomato_icon"
                    width={28}
                    height={28}
                  />
                </span>
              </div>
            </li>
            <li className="py-[7px]">
              <Link
                href="/magazine"
                className={twMerge(
                  pathname === "/magazine" ? "active-link" : "",
                  isUpdate ? "red-dot" : ""
                )}
              >
                매거진
              </Link>
            </li>
            <li className="py-[7px]">
              <Link
                href="/contest"
                className={twMerge(
                  pathname === "/contest" ? "active-link" : ""
                )}
              >
                공모전
              </Link>
            </li>
            <li className="py-[7px]">
              <Link
                href="/activity"
                className={twMerge(
                  pathname === "/activity" ? "active-link" : ""
                )}
              >
                대외활동
              </Link>
            </li>
            <li className="py-[5px] bg-beige-100 px-[15px] rounded-full">
              <Link
                href="/register"
                className={twMerge(
                  pathname === "/register" && "text-heading-6"
                )}
              >
                공고등록/문의
              </Link>
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <input
              className=" w-[264px] h-[40px] border-2 border-red-500 rounded-full text-body-4 px-[40px] focus:outline-none"
              type="text"
              placeholder="나는야 춤을 출거야"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Image
              src={images.tomatoIconYellow}
              alt="tomato_icon"
              width={28}
              height={28}
              className="absolute left-[10px]"
            />
            {searchText === "" && (
              <Image
                src={images.musicIcon}
                alt="music_icon"
                width={13}
                height={18}
                className="absolute left-[150px]"
              />
            )}
            <Image
              src={images.searchIcon}
              alt="search_icon"
              width={24}
              height={24}
              className="absolute left-[230px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
