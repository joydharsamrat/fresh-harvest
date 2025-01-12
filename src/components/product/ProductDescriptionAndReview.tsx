"use client";

import React, { useState } from "react";

interface TabProps {
  label: string;
  content: React.ReactNode;
}

const ProductDescriptionAndReviews = ({
  description,
}: {
  description: string;
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs: TabProps[] = [
    {
      label: "Description",
      content: (
        <div>
          <p>{description}</p>
        </div>
      ),
    },
    {
      label: "Reviews (1)",
      content: (
        <div>
          <p>One review </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full max-w-2xl mt-12">
      <div className="flex items-center gap-5">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 rounded-lg focus:outline-none ${
              activeTab === index
                ? "  bg-secondary text-white "
                : "text-theme-extend-colors-gray border"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 text-lg bg-theme-extend-colors-gray-light2 mt-5 rounded-lg">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default ProductDescriptionAndReviews;
