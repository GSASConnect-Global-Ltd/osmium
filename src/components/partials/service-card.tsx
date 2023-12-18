import React from "react";
import { CardIcon } from "../icons";

interface IServiceCard {
  title: string;
  body: string;
  bg: string;
}

export default function ServiceCard(props: IServiceCard) {
  return (
    <div
      className={`space-y-6 h-full bg-white p-10 bg-panels bg-no-repeat object-cover`}
    >
      <h3 className="text-2xl text-primary font-semibold md:text-4xl">
        {props.title}
      </h3>
      <p className="text-sm leading-[140%] text-white md:text-base">
        {props.body}
      </p>
    </div>
  );
}
