import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="flex w-full justify-between mt-5 lg:mt-10 lg:justify-center lg:gap-56">
        <Link
          href={"/trips/search?text=Hotel&startDate=undefined&budget=undefined"}
        >
          <div className="flex flex-col items-center gap-1">
            <Image width={35} height={35} src="/hotel-icon.png" alt="Hotel" />
            <p className="text-sm lg:text-base text-grayPrimary">Hotel</p>
          </div>
        </Link>
        <Link
          href={
            "/trips/search?text=Fazenda&startDate=undefined&budget=undefined"
          }
        >
          <div className="flex flex-col items-center gap-1">
            <Image width={35} height={35} src="/farm-icon.png" alt="Hotel" />
            <p className="text-sm lg:text-base text-grayPrimary">Fazenda</p>
          </div>
        </Link>

        <Link
          href={"/trips/search?text=Chalé&startDate=undefined&budget=undefined"}
        >
          <div className="flex flex-col items-center gap-1">
            <Image width={35} height={35} src="/cottage-icon.png" alt="Hotel" />
            <p className="text-sm lg:text-base text-grayPrimary">Chalé</p>
          </div>
        </Link>

        <Link
          href={
            "/trips/search?text=Pousada&startDate=undefined&budget=undefined"
          }
        >
          <div className="flex flex-col items-center gap-1">
            <Image width={35} height={35} src="/inn-icon.png" alt="Hotel" />
            <p className="text-sm lg:text-base text-grayPrimary">Pousada</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default QuickSearch;
