"use client"; // This directive makes it a Client Component

import Link from "next/link";

export default function ProductFilters({ selectedFilters, searchParams }) {
  const handleFilterChange = (filter) => {
    const newFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter) // Remove filter if already selected
      : [...selectedFilters, filter]; // Add filter if not selected

    return {
      pathname: "/products",
      query: {
        ...searchParams,
        filter: newFilters.length > 0 ? newFilters : undefined, // Set filter to undefined if empty
      },
    };
  };

  // Define new filter options
  const filterOptions = [
    { label: "Men", value: "Men" },
    { label: "Women", value: "Women" },
    { label: "Light", value: "Light" },
    { label: "Hard", value: "Hard" },
    { label: "School", value: "School" },
    { label: "Office", value: "Office" },
  ];

  return (
    <div className="px-4 py-2">
      {filterOptions.map((option) => (
        <div className="flex items-center mb-2" key={option.value}>
          <input
            type="checkbox"
            value={option.value}
            checked={selectedFilters.includes(option.value)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded cursor-default"
            readOnly // Make it read-only to prevent error
          />
          <label className="ml-2 text-sm text-gray-700 cursor-pointer">
            <Link href={handleFilterChange(option.value)}>
              {option.label}
            </Link>
          </label>
        </div>
      ))}
    </div>
  );
}
