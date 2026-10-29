import React from "react";
import { IoClose } from "react-icons/io5";

const PopupPlayer = ({ isPlay, togglePlay }) => {
  return (
    <>
      {isPlay && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="VR World Demo Video"
          className="fixed z-[9999] top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm"
        >
          <div className="absolute w-full sm:max-w-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white dark:bg-dark p-5 m-3 rounded-lg shadow-md">
              {/* header section */}
              <div className="flex items-center justify-between pb-3">
                <h3 className="text-2xl font-semibold">VR World Showcase</h3>
                <button
                  onClick={togglePlay}
                  aria-label="Close video player modal"
                  className="p-1 hover:scale-110 duration-300 focus:outline-none"
                >
                  <IoClose className="text-3xl cursor-pointer" />
                </button>
              </div>

              {/* video player section */}
              <div>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/skz6VDfm03I?si=ZE0mBi5atyVsp_0C"
                  title="VR World Metaverse Gameplay and Cinematic Video Demo"
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupPlayer;
