import React from "react";

function About() {
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
      <video
        id="video"
        autoPlay
        poster="https://embed-ssl.wistia.com/deliveries/29da46dbc01985d85354fde8c733a9b2.webp?image_crop_resized=1920x1081"
        loop
        muted
        playsInline
        className="w-[80%] mt-20 md:mt-40 lg:mt-0 absolute lg:top-[400px] top-44"
        src={"https://unbounce.com?wvideo=9o5wexcj4p"}
      ></video>
    </section>
  );
}

export default About;
