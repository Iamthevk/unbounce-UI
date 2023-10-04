"use client";
import React from "react";
import ReactPlayer from "react-player";

const About: React.FC = () => {
  const videoURL = "https://youtu.be/IiZTfbpmy7I";
  return (
    <section className="flex flex-col justify-start items-center relative px-5 pt-5 sm:pt-10 md:pt-20 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] mb-[250px] sm:mb-[300px] md:mb-[350px] bg-[rgba(232,251,251,1)]">
      <div className="flex flex-col gap-10 text-center mt-10">
        <h1 className="text-3xl md:text-5xl font-bold describe">
          Show visitors what <br className="hidden md:block" />
          they&#39;re signing up for
        </h1>
        <h3 className="text-sm md:text-lg">
          Include a video or photo from one of your sessions to help people
          <br className="hidden md:block" />
          understand your service &#40;or just to hype &#39;em up&#41;.
        </h3>
      </div>
      <div className="w-[80%] pt-20 md:p-0 md:h-full mt-20 md:mt-40 lg:mt-0 absolute lg:top-[400px] top-44">
        <ReactPlayer
          url={videoURL}
          controls // Show video controls (play, pause, etc.)
          loop // Loop the video
          muted // Mute the video
          playsinline // Play inline on supported devices
          width="100%"
          height="100%"
        />
      </div>
    </section>
  );
};

export default About;
