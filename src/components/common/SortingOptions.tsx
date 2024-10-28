"use client";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function SortingOptions() {
  const [selectedOption, setSelectedOption] = useState("최신순");
  const options = ["관련도순", "최신순", "조회순", "마감순"];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex items-center justify-between space-x-2 ml-[16px] mt-[10px]">
      <div className="inline-flex">
        {options.map((option, index) => (
          <div key={option} className="flex items-center text-[20px]">
            <span
              className={twMerge(
                "cursor-pointer",
                selectedOption === option ? "text-red-500" : "text-gray-200"
              )}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </span>
            {index < options.length - 1 && (
              <span className="text-gray-100 ml-6 mr-6">|</span>
            )}
          </div>
        ))}
      </div>
      <button className="flex gap-2.5 pr-8 items-center">
        초기화
        <Image
          src="/images/reset_icon.svg"
          alt="reset_button"
          width={17}
          height={17}
        />
      </button>
    </div>
  );
}
