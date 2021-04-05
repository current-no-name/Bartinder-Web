import DateTimeHandler from 'components/DateTimeHandler';
import { Footer } from 'components/organisms/Footer';
import ScrollDown from 'components/ScrollDown';
import React from 'react';

function MainPage() {
  return (
    <div className="MainPageAnimation h-screen px-12 flex flex-wrap content-between flex-col">
      <DateTimeHandler />
      <ScrollDown />
      <Footer />
    </div>
  );
}

export default MainPage;
