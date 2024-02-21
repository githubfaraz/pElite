'use client'
import React, { useState } from 'react';

function RadioExample() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  

  return (
    <div className='flex flex-col space-y-3 justify-between align-middle items-start'>
      <div className='flex flex-row space-x-2'>
        <input
          type="radio"
          id="option1"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        <label htmlFor="option1">Option 1</label>
      </div>
      <div className='flex flex-row space-x-2'>
        <input
          type="radio"
          id="option7"
          value="option7"
          checked={selectedOption === 'option7'}
          onChange={handleOptionChange}
        />
        <label htmlFor="option1">Option 7</label>
      </div>
      <div>
        <input
          type="radio"
          id="option2"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        <label htmlFor="option2">Option 2</label>
      </div>
      <div>
        <input
          type="radio"
          id="option3"
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
        <label htmlFor="option3">Option 3</label>
      </div>
      <div>
        <input
          type="radio"
          id="option4"
          value="option4"
          checked={selectedOption === 'option4'}
          onChange={handleOptionChange}
        />
        <label htmlFor="option4">Option 4</label>
      </div>
      <div>
        {/* <p>Selected Option: {selectedOption}</p> */}
      </div>
    </div>
  );
}

export default RadioExample;
