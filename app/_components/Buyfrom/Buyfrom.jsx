"use client"; // This is a client component
import { useState } from "react";
import Amazon_India_logo from "@/public/Amazon_India_logo.png";
import right_now_ebay from "@/public/right_now_ebay.png";
import Image from "next/image";

const Buyfrom = ({ links }) => {
  const [selectedTab, setSelectedTab] = useState("amazon");
  // console.log(links, "links")

  // console.log("Amazon_India_logo", links);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (

    // <div className="flex flex-col items-left justify-left  text-left w-full">

    <div className="flex flex-col w-full space-y-6">
      {
        links?.map(item => {
          // return <div className="mt-4 flex items-center justify-start h-20 gap-3">
          return <div className="flex items-center space-x-4 py-3 border-b border-gray-100">
            <a
              href={`${item?.link}`}
              // className="text-blue-500   hover:underline underline text-sm md:text-xl"
              className="text-blue-500 hover:underline underline text-sm md:text-lg flex-shrink-0 min-w-[180px] md:min-w-[220px]"
              target="_blank"
              rel="noreferrer"
            >
              {` Search on ${item?.company?.companyName}`}
            </a>

            {/* <div className='pt-1'> */}
            <div className='flex-shrink-0 w-16 h-16 flex items-center justify-center'>

              {/* <img className="h-14"  */}
              <img className="max-h-14 max-w-full object-contain" 
              src={item?.company?.imageUrl} alt={item?.company?.companyName} />
            </div>
            {/* {item?.price} */}
            <div className="text-sm md:text-base font-medium ml-auto">
              {item?.price}
            </div>
          </div>

        })}


    </div>
  );
};

export default Buyfrom;


