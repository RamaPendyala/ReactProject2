import React from 'react';

function LocalDate() {
  const now = new Date();
  const currentDate = now.toLocaleDateString(); 
  const currentTime = now.toLocaleTimeString();  

  return (
    <>
      <h2>Current Date: {currentDate}</h2>
      <h2>Current Time: {currentTime}</h2>
    </>
  );
}

export default LocalDate;