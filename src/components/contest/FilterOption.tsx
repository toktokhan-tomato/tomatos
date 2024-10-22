import Image from "next/image";

export default function FilterOption({
  option,
  toggled,
  onToggle,
}: {
  option: string;
  toggled: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      className={`relative border text-[16px] px-3 py-1 rounded-full transition-colors ${
        toggled
          ? "bg-red-200 text-white border-red-200"
          : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
      }`}
      onClick={onToggle}
    >
      {toggled && (
        <div className="absolute -top-[7px] left-1/2 transform -translate-x-1/2">
          <Image
            src="/images/tomato-stem.svg"
            width={20}
            height={20}
            alt="Tomato stem"
          />
        </div>
      )}
      {option}
    </button>
  );
}
