import React from "react";
import Title from "../global/Title";

function Services() {
  return (
    <div className="w-screen h-screen relative">
      <div className="w-full h-24 pr-8 flex justify-between">
        <Title title={"Services"} smallPhrase={true} />
        {/* <div className="py-4">
          <Icon />
        </div> */}
      </div>

      <div className="absolute inset-0 w-full h-[100%] -z-10 p-6 px-0 flex justify-between items-start">
        <svg
          width="500"
          height="690"
          viewBox="0 0 530 1000"
          className=" pb-4justify-start items-start"
          fill="#000"
        >
          <path
            d="M0 168C0 140.386 22.3858 118 50 118H308.69C335.231 118 357.147 97.2625 358.613 70.7617L359.887 47.7382C361.353 21.2375 383.269 0.5 409.81 0.5H535.812C563.694 0.5 586.189 23.3041 585.808 51.1828L573.674 939.683C573.3 967.028 551.026 989 523.678 989H50C22.3857 989 0 966.614 0 939V168Z"
            fill="#D9D9D9"
          />
        </svg>

        <div className="w-[38%] h-full flex justify-start pr-6 items-start flex-col gap-4 relative">
          <div className="w-5/6 h-[30%] rounded-3xl bg-gray-300 flex justify-start items-start gap-4"></div>
          <svg
           width="450"
            height="380"
            viewBox="0 0 500 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-10 top-[30.5%]"
          >
            <path
              d="M0 28C0 12.536 12.536 0 28 0H454C469.464 0 482 12.536 482 28V112.5C482 127.964 469.464 140.5 454 140.5H376C360.536 140.5 348 153.036 348 168.5V237C348 252.464 335.464 265 320 265H28C12.536 265 0 252.464 0 237V28Z"
              fill="black"
            />
          </svg>

          <svg
            width="455"
            height="370"
            viewBox="0 0 455 380"
            fill="none"
           xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-14 right-[22%]"
          >
            <path
              d="M0 128.715C0 113.804 12.0883 101.715 27 101.715H317.996C332.907 101.715 344.996 89.6269 344.996 74.7152V27C344.996 12.0883 357.084 0 371.996 0H427.339C442.25 0 454.339 12.0883 454.339 27V202.271V301.5C454.339 316.412 442.25 328.5 427.339 328.5H328.029H27C12.0883 328.5 0 316.412 0 301.5V128.715Z"
              fill="red"
            />
          </svg>
        </div>
        <div className="w-1/3 h-full flex justify-start items-start gap-4">
        <svg width="368" height="560" viewBox="0 0 368 560" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 26C0 11.6406 11.6406 0 26 0H265.818C280.177 0 291.818 11.6406 291.818 26V31.5C291.818 45.8594 303.458 57.5 317.818 57.5H342C356.359 57.5 368 69.1406 368 83.5V534C368 548.359 356.359 560 342 560H26C11.6406 560 0 548.359 0 534V26Z" fill="#D9D9D9"/>
</svg>

        </div>
      </div>
    </div>
  );
}

export default Services;
