import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function FilterOption({
  option,
  toggled,
  onToggle,
}: {
  option: string;
  toggled: boolean;
  onToggle: () => void;
}) {
  const baseClasses =
    "relative border text-[20px] px-4 py-2 rounded-full transition-colors";
  const toggledClasses = toggled
    ? "bg-red-500 text-white border-red-500"
    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400";

  return (
    <button className={twMerge(baseClasses, toggledClasses)} onClick={onToggle}>
      {toggled && (
        <div className="absolute -top-[7px] left-1/2 transform -translate-x-1/2">
          <Image
            src="/images/tomato-stem.svg"
            width={20}
            height={20}
            alt="seleted option"
          />
        </div>
      )}
      {option}
    </button>
  );
}
