import Image from "next/image";
import React from "react";

function Info() {
  return (
    <section className="px-5 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 my-10 md:my-40 items-center justify-center">
      <div className="flex items-center justify-center">
        <Image
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/df213ca0-multor-about_100000000000000000001o.jpg"
          width={500}
          height={500}
          alt="info"
          layout="responsive"
        />
      </div>
      <div className="flex flex-col md:ml-10 gap-3 md:gap-5 justify-center w-full md:w-3/4">
        <h4 className="text-secondary text-sm md:text-base describe text-text-secondary">
          ABOUT
        </h4>
        <h1 className="text-xl md:text-3xl font-bold describe">
          Some more information about your business
        </h1>
        <h4 className="text-sm md:text-base">
          Share a little about yourself as a business owner, or maybe describe
          what makes your service unique. Give visitors one more reason to care
          about your offer and want to work with you.
        </h4>
      </div>
    </section>
  );
}

export default Info;
