'use client'
import React from "react";
import Accordion from "./accordion";

interface props{
    feedingGuidelines: string;
    nutritionFacts: string;
}

const FAQ = ({feedingGuidelines,nutritionFacts}: props) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <Accordion
        title="Feeding Guidelines"
        answer={feedingGuidelines}
      />
      <hr />
      <Accordion title="Nutrition Facts" answer={nutritionFacts} />
    </div>
  );
};

export default FAQ;