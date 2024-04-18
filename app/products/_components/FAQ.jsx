'use client'
import React from "react";
import Accordion from "./accordion";


const FAQ = ({feedingGuidelines,nutritionFacts}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <Accordion
        title="Feeding Guidelines"
        answer={feedingGuidelines}
      />
      <hr />
      <Accordion title="Nutrition Facts" className='font-serif' answer={nutritionFacts} />
    </div>
  );
};

export default FAQ;