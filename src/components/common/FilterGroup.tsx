import { useState } from "react";
import FilterOption from "./FilterOption";
import { filterOptions } from "@/lib/filterOptions";

export default function FilterGroup({ group }: { group: string }) {
  const { major, award, prize, entry, organizer } = filterOptions;

  const getOptionsForGroup = (groupName: string) => {
    switch (groupName) {
      case "학과":
        return major;
      case "시상규모":
        return award;
      case "수상혜택":
        return prize;
      case "응모대상":
        return entry;
      case "주최기관":
        return organizer;
      default:
        return [];
    }
  };

  const options = getOptionsForGroup(group);

  const [toggledOptions, setToggledOptions] = useState<Set<string>>(new Set());

  const toggleOption = (option: string) => {
    setToggledOptions((prev) => {
      const updated = new Set(prev);
      if (updated.has(option)) {
        updated.delete(option);
      } else {
        updated.add(option);
      }
      return updated;
    });
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {options.map((option, i) => (
          <FilterOption
            option={option}
            key={i}
            toggled={toggledOptions.has(option)}
            onToggle={() => toggleOption(option)}
          />
        ))}
      </div>
    </>
  );
}
