import React from "react";
import { TCard } from "@/ui_components/Card";

function Testimonial() {
  return (
    <section className="px-5 lg:px-40 mb-20">
      <h1 className="text-text-secondary text-center text-base md:text-xl mb-10 md:mb-20">
        DON&#39;T JUST TAKE OUR WORD FOR IT
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TCard
          noOfStars={5}
          message="Share a real testimonial that hits some of your benefits (but isn't too sales-y)."
          imgSrc="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/52bdc545-multor-testimonial1-headshot_100000000000000000001o.jpg"
          name="Real Name"
          location="Location"
        />
        <TCard
          noOfStars={5}
          message="Share a real testimonial that hits some of your benefits (but isn't too sales-y)."
          imgSrc="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/94045dbc-multor-testimonial2-headshot_100000000000000000001o.jpg"
          name="Real Name"
          location="Location"
        />
      </div>
    </section>
  );
}

export default Testimonial;
