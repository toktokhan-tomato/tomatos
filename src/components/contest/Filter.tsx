"use client";
import { useState } from "react";
import FilterGroup from "./FilterGroup";
import { filterGroups } from "@/lib/filterGroups";

export default function Filter() {
  const [selectedGroup, setSelectedGroup] = useState<string>(filterGroups[0]);

  return (
    <div className="p-4">
      <div className="flex space-x-[77px] mb-6">
        {filterGroups.map((group, i) => (
          <button
            key={i}
            onClick={() => setSelectedGroup(group)}
            className={`box-border text-[26px] font-[400] pb-2 ${
              selectedGroup === group
                ? "text-gray-500 border-b-4 border-[#222222]"
                : "text-gray-600"
            }`}
          >
            {group}
          </button>
        ))}
      </div>
      {selectedGroup && <FilterGroup group={selectedGroup} />}
    </div>
  );
}
