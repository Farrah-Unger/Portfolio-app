import React from "react";
import { aboutMeData } from "./data/data";
import Image from "next/image";

const AboutMePage = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="flex flex-row sm:flex flex-col sm:w-10/12 items-center sm:flex-col w-full">
        <div className="sm:w-1/3 w-full flex justify-center mt-12">
          <Image
            priority={false}
            width={640}
            height={960}
            aria-label={"image of lunarNights.jpg"}
            alt={"lunarNights.jpg"}
            src={"/images/lunarNights.jpg"}
            className="profileImage"
          />
        </div>
        <div className="sm:ml-20 sm:w-2/3 w-full mt-6 sm:mt-0 p-10">
          <h2 className="flex justify-center"> {aboutMeData.title}</h2>
          <p className="text-base"> {aboutMeData.body}</p>
        </div>
      </section>
      <section className="w-full my-8 bg-blue-light p-10 h-full">
        {" "}
        <p> {aboutMeData.highlightedBody}</p>
      </section>
      <section className="flex sm:flex-row sm:w-10/12 p-10 items-center w-full flex-col">
        <div className="flex flex-col w-full mb-10 sm:mb-0 sm:w-7/12">
          <p>{aboutMeData.body2}</p> {""}
        </div>
        <div className="sm:w-5/12 sm:ml-10 w-full ml-0">
          <Image
            priority={false}
            width={500}
            height={200}
            aria-label={"image of legoland.jpg"}
            alt={"legoland.jpg"}
            src={"/images/legoland.jpg"}
            className="h-250 object-cover w-500"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutMePage;
