"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function SortingOptions() {
  const [selectedOption, setSelectedOption] = useState("최신순");
  const options = ["관련도순", "최신순", "조회순", "마감순"];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex items-center space-x-2 ml-[16px] mt-[10px]">
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
  );
}
