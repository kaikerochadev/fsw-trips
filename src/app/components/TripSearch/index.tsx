'use client'
import CurrencyInput from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import React from "react";

const TripSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-2xl text-primaryDarker text-center">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde você quer ir? "/>

        <div className="flex gap-4">
            <DatePicker placeholderText="Data de Ida" onChange={() => {}} className="w-full"/>
            <CurrencyInput placeholder="Orçamento"/>
        </div>
      </div>
    </div>
  );
};

export default TripSearch;