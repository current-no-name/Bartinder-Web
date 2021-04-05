import React from 'react';

function ScrollDown() {
  const opacityList = [0.5, 0.4, 0.3, 0.3, 0.4, 0.5];

  return (
    <div className="w-full border-primary border-solid border-t flex-1 mt-9">
      <div className="relative h-full">
        <div className="w-full h-full flex flex-wrap">
          {opacityList.map((opacity, index) => {
            return <Murmur opacity={opacity} key={index} />;
          })}
        </div>
        <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <div className="text-primary text-5xl flex flex-wrap items-center animate-bounce">
            <Arrow />
            <span className="mx-4">SCORLL DOWN</span>
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
}
type Props = {
  opacity: number;
};
function Murmur({ opacity }: Props) {
  return (
    <p
      className="text-primary text-4xl whitespace-nowrap overflow-hidden flex-grow"
      style={{ opacity: opacity }}
    >
      Where am I What am I When am I Why am I Where am I What am I When am I Why
      am I Where am I What am I When
    </p>
  );
}

function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default ScrollDown;
