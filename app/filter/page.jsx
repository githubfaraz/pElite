// app/filter/page.jsx
"use client"
import React, { useEffect, useState } from 'react';

const DynamicPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://pets-elite-b.fly.dev/api/bully-sticks');
        if (!res.ok) {
          throw new Error('Error fetching data');
        }
        const result = await res.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (!data) {
    return <div>Error: Data could not be fetched</div>;
  }

  return (
    // Your component code using the fetched data
    <div>
      {data.map(((d)=>(
        <div key={d._id}>
          <h1>{d.name}</h1>
        </div>
      )))}
    </div>
  );
};

export default DynamicPage;
