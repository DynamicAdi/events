import React from "react";
import Icon from "../global/navbar/Icon";
import Title from "../global/Title";


function AboutUs() {
  return (
    
    <div className="w-screen sm:h-screen h-auto relative">
      <div className="w-full h-24 pr-8 flex justify-between">
        <Title title={"About Us"}/>
        <div className="py-4">
          <Icon />
        </div>
      </div>

      <div className="w-full h-[60%] sm:h-[90%]  py-0 sm:py-7 px-4">
        <div className="bg-primary w-full h-full rounded-[40px] flex justify-between sm:flex-row flex-col">
          <div className="w-full sm:w-[60%] h-full flex justify-between pb-32 items-start flex-col">
            <p
            className="text-white sm:text-[1.30rem] text-xs font-mon leading-8 text-justify font-light w-full sm:w-5/6 p-6 pb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              nemo, iste dolorum necessitatibus tenetur fuga est optio minus
              natus odit, asperiores veniam accusantium! Impedit eaque rerum,
              ratione explicabo, totam voluptas cumque asperiores voluptate iste
              illo assumenda accusamus? Quos quidem iure deleniti earum sunt
              laudantium. Sequi exercitationem deleniti perferendis magnam
              ullam.
            </p>

            <svg
              className="hover:scale-90 sm:scale-100 scale-75 transition duration-300 hover:-translate-x-3 sm:translate-x-0 -translate-x-7 cursor-pointer"
              width="220"
              height="115"
              viewBox="0 0 318 163"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0C0 18.8355 15.2692 34.1046 34.1046 34.1046H274.366C298.464 34.1046 318 53.6402 318 77.7385C318 101.837 298.464 121.372 274.366 121.372H41.6277C18.6374 121.372 0 140.01 0 163V0Z"
                fill="#ffffff"
              />
              <path
                d="M45.408 94V60.4H57.456C60.112 60.4 62.304 60.864 64.032 61.792C65.792 62.688 67.088 63.904 67.92 65.44C68.784 66.944 69.216 68.656 69.216 70.576C69.216 72.368 68.8 74.032 67.968 75.568C67.136 77.104 65.84 78.336 64.08 79.264C62.32 80.192 60.064 80.656 57.312 80.656H51.168V94H45.408ZM62.928 94L55.872 79.168H62.112L69.504 94H62.928ZM51.168 76.384H57.072C59.216 76.384 60.784 75.872 61.776 74.848C62.8 73.792 63.312 72.416 63.312 70.72C63.312 69.056 62.816 67.728 61.824 66.736C60.832 65.712 59.248 65.2 57.072 65.2H51.168V76.384ZM82.9365 94.576C80.5365 94.576 78.4245 94.064 76.6005 93.04C74.7765 91.984 73.3525 90.512 72.3285 88.624C71.3045 86.736 70.7925 84.56 70.7925 82.096C70.7925 79.536 71.2885 77.296 72.2805 75.376C73.3045 73.456 74.7285 71.952 76.5525 70.864C78.4085 69.776 80.5525 69.232 82.9845 69.232C85.3525 69.232 87.4165 69.76 89.1765 70.816C90.9365 71.872 92.2965 73.296 93.2565 75.088C94.2165 76.848 94.6965 78.832 94.6965 81.04C94.6965 81.36 94.6965 81.712 94.6965 82.096C94.6965 82.48 94.6645 82.88 94.6005 83.296H74.9205V79.6H88.8885C88.8245 77.84 88.2325 76.464 87.1125 75.472C85.9925 74.448 84.6005 73.936 82.9365 73.936C81.7525 73.936 80.6645 74.208 79.6725 74.752C78.6805 75.296 77.8965 76.112 77.3205 77.2C76.7445 78.256 76.4565 79.6 76.4565 81.232V82.624C76.4565 84.128 76.7285 85.424 77.2725 86.512C77.8485 87.6 78.6165 88.432 79.5765 89.008C80.5685 89.552 81.6725 89.824 82.8885 89.824C84.2325 89.824 85.3365 89.536 86.2005 88.96C87.0965 88.384 87.7525 87.616 88.1685 86.656H94.0245C93.5765 88.16 92.8405 89.52 91.8165 90.736C90.7925 91.92 89.5285 92.864 88.0245 93.568C86.5205 94.24 84.8245 94.576 82.9365 94.576ZM106.159 94.576C104.175 94.576 102.527 94.24 101.215 93.568C99.9028 92.896 98.9268 92 98.2867 90.88C97.6467 89.76 97.3267 88.544 97.3267 87.232C97.3267 85.696 97.7107 84.368 98.4787 83.248C99.2787 82.128 100.447 81.264 101.983 80.656C103.519 80.016 105.407 79.696 107.647 79.696H113.743C113.743 78.416 113.567 77.36 113.215 76.528C112.863 75.664 112.319 75.024 111.583 74.608C110.847 74.192 109.903 73.984 108.751 73.984C107.439 73.984 106.319 74.288 105.391 74.896C104.463 75.472 103.887 76.368 103.663 77.584H97.9988C98.1908 75.856 98.7667 74.384 99.7268 73.168C100.687 71.92 101.951 70.96 103.519 70.288C105.119 69.584 106.863 69.232 108.751 69.232C111.023 69.232 112.959 69.632 114.559 70.432C116.159 71.2 117.375 72.32 118.207 73.792C119.071 75.232 119.503 76.976 119.503 79.024V94H114.607L114.031 90.112C113.711 90.752 113.295 91.344 112.783 91.888C112.303 92.432 111.743 92.912 111.103 93.328C110.463 93.712 109.727 94.016 108.895 94.24C108.095 94.464 107.183 94.576 106.159 94.576ZM107.455 90.016C108.383 90.016 109.199 89.856 109.903 89.536C110.639 89.184 111.263 88.704 111.775 88.096C112.319 87.456 112.735 86.752 113.023 85.984C113.311 85.216 113.503 84.4 113.599 83.536V83.44H108.271C107.151 83.44 106.223 83.584 105.487 83.872C104.751 84.128 104.223 84.512 103.903 85.024C103.583 85.536 103.423 86.128 103.423 86.8C103.423 87.472 103.583 88.048 103.903 88.528C104.223 89.008 104.687 89.376 105.295 89.632C105.903 89.888 106.623 90.016 107.455 90.016ZM134.489 94.576C132.249 94.576 130.249 94.032 128.489 92.944C126.729 91.856 125.353 90.352 124.361 88.432C123.401 86.512 122.921 84.336 122.921 81.904C122.921 79.472 123.417 77.312 124.409 75.424C125.401 73.504 126.777 72 128.537 70.912C130.329 69.792 132.345 69.232 134.585 69.232C136.409 69.232 137.993 69.584 139.337 70.288C140.713 70.96 141.801 71.92 142.601 73.168V59.44H148.361V94H143.177L142.601 90.496C142.089 91.2 141.465 91.872 140.729 92.512C139.993 93.12 139.113 93.616 138.089 94C137.065 94.384 135.865 94.576 134.489 94.576ZM135.689 89.584C137.065 89.584 138.281 89.264 139.337 88.624C140.393 87.952 141.209 87.04 141.785 85.888C142.361 84.736 142.649 83.408 142.649 81.904C142.649 80.4 142.361 79.072 141.785 77.92C141.209 76.768 140.393 75.872 139.337 75.232C138.281 74.592 137.065 74.272 135.689 74.272C134.377 74.272 133.193 74.592 132.137 75.232C131.081 75.872 130.249 76.768 129.641 77.92C129.065 79.072 128.777 80.4 128.777 81.904C128.777 83.408 129.065 84.736 129.641 85.888C130.249 87.04 131.081 87.952 132.137 88.624C133.193 89.264 134.377 89.584 135.689 89.584ZM162.647 94V69.808H167.735L168.215 73.12C168.983 71.904 169.991 70.96 171.239 70.288C172.519 69.584 173.975 69.232 175.607 69.232C176.823 69.232 177.911 69.392 178.871 69.712C179.863 70.032 180.727 70.512 181.463 71.152C182.231 71.792 182.855 72.592 183.335 73.552C184.231 72.208 185.399 71.152 186.839 70.384C188.279 69.616 189.847 69.232 191.543 69.232C193.559 69.232 195.271 69.648 196.679 70.48C198.087 71.28 199.159 72.48 199.895 74.08C200.631 75.648 200.999 77.584 200.999 79.888V94H195.287V80.464C195.287 78.416 194.871 76.848 194.039 75.76C193.207 74.672 191.975 74.128 190.343 74.128C189.223 74.128 188.231 74.4 187.367 74.944C186.535 75.488 185.879 76.288 185.399 77.344C184.919 78.368 184.679 79.632 184.679 81.136V94H178.967V80.464C178.967 78.416 178.551 76.848 177.719 75.76C176.887 74.672 175.639 74.128 173.975 74.128C172.919 74.128 171.959 74.4 171.095 74.944C170.263 75.488 169.607 76.288 169.127 77.344C168.647 78.368 168.407 79.632 168.407 81.136V94H162.647ZM216.445 94.576C214.141 94.576 212.061 94.048 210.205 92.992C208.381 91.904 206.941 90.416 205.885 88.528C204.861 86.608 204.349 84.416 204.349 81.952C204.349 79.424 204.877 77.216 205.933 75.328C206.989 73.408 208.429 71.92 210.253 70.864C212.109 69.776 214.189 69.232 216.493 69.232C218.797 69.232 220.861 69.776 222.685 70.864C224.541 71.92 225.981 73.392 227.005 75.28C228.061 77.168 228.589 79.376 228.589 81.904C228.589 84.432 228.061 86.64 227.005 88.528C225.949 90.416 224.493 91.904 222.637 92.992C220.813 94.048 218.749 94.576 216.445 94.576ZM216.445 89.632C217.597 89.632 218.637 89.344 219.565 88.768C220.525 88.192 221.293 87.328 221.869 86.176C222.445 85.024 222.733 83.6 222.733 81.904C222.733 80.208 222.445 78.8 221.869 77.68C221.325 76.528 220.573 75.664 219.613 75.088C218.685 74.512 217.645 74.224 216.493 74.224C215.373 74.224 214.333 74.512 213.373 75.088C212.413 75.664 211.645 76.528 211.069 77.68C210.493 78.8 210.205 80.208 210.205 81.904C210.205 83.6 210.493 85.024 211.069 86.176C211.645 87.328 212.397 88.192 213.325 88.768C214.285 89.344 215.325 89.632 216.445 89.632ZM232.307 94V69.808H237.443L237.971 74.32C238.547 73.264 239.267 72.368 240.131 71.632C240.995 70.864 242.003 70.272 243.155 69.856C244.339 69.44 245.635 69.232 247.043 69.232V75.328H245.027C244.067 75.328 243.155 75.456 242.291 75.712C241.427 75.936 240.675 76.32 240.035 76.864C239.427 77.376 238.947 78.096 238.595 79.024C238.243 79.92 238.067 81.056 238.067 82.432V94H232.307ZM260.278 94.576C257.878 94.576 255.766 94.064 253.942 93.04C252.118 91.984 250.694 90.512 249.67 88.624C248.646 86.736 248.134 84.56 248.134 82.096C248.134 79.536 248.63 77.296 249.622 75.376C250.646 73.456 252.07 71.952 253.894 70.864C255.75 69.776 257.894 69.232 260.326 69.232C262.694 69.232 264.758 69.76 266.518 70.816C268.278 71.872 269.638 73.296 270.598 75.088C271.558 76.848 272.038 78.832 272.038 81.04C272.038 81.36 272.038 81.712 272.038 82.096C272.038 82.48 272.006 82.88 271.942 83.296H252.262V79.6H266.23C266.166 77.84 265.574 76.464 264.454 75.472C263.334 74.448 261.942 73.936 260.278 73.936C259.094 73.936 258.006 74.208 257.014 74.752C256.022 75.296 255.238 76.112 254.662 77.2C254.086 78.256 253.798 79.6 253.798 81.232V82.624C253.798 84.128 254.07 85.424 254.614 86.512C255.19 87.6 255.958 88.432 256.918 89.008C257.91 89.552 259.014 89.824 260.23 89.824C261.574 89.824 262.678 89.536 263.542 88.96C264.438 88.384 265.094 87.616 265.51 86.656H271.366C270.918 88.16 270.182 89.52 269.158 90.736C268.134 91.92 266.87 92.864 265.366 93.568C263.862 94.24 262.166 94.576 260.278 94.576Z"
                fill="#002367"
              />
            </svg>
          </div>
          <div className="sm:flex w-2/5 h-full hidden p-4">
            <div className="w-full h-full rounded-3xl">
              <img
                src="https://picsum.photos/1080"
                alt="ok"
                className="w-full h-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
