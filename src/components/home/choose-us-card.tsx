import React from "react";

export default function ChooseUsCard(props: { title: string; body: string }) {
  return (
    <div className="space-y-6 bg-white p-10">
      <h3 className="text-2xl font-semibold md:text-4xl">{props.title}</h3>
      <p className="text-sm leading-[140%] text-slate-500 md:text-base">
        {props.body}
      </p>
    </div>
  );
}
