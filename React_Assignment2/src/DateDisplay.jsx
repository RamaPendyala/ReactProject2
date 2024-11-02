import React from 'react';

function DateDisplay() {
  const now = new Date();
  const day = now.getDay(); 
  const date = now.getDate();
  const monthIndex = now.getMonth(); 
  const year = now.getFullYear(); 

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const dayOfWeek = daysOfWeek[now.getDay()];
  const month = months[monthIndex];

  return (
    <>
      <p>Today: {dayOfWeek}</p>
      <p>Month: {month}</p>
      <p>Year: {year}</p>
      <p>Date:{date}</p>
    </>
  );
}

export default DateDisplay;
