import React from "react";

interface IProjectCard {
  title: string;
  body: string;
  img: string;
}

export default function ProjectCard(props: IProjectCard) {
  return (
    <div className=" h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <img className="rounded-t-lg" src={props.img} alt="" />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.body}
        </p>
      </div>
    </div>
  );
}
