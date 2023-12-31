import React from "react";
import Image from "next/image";
import { Github, Window } from "@/app/icons";

type ProjectCardProps = {
	data: {
		title: string;
		body1: string;
		body2: string;
		image: string;
		links: {
			text: string;
			url: string;
		}[];
	};
};


export const ProjectCard = ({data}: ProjectCardProps) => {
    const {title, body1, body2, image, links} = data;
    return (
    <div className="rounded-lg shadow-lg bg-grey-light">
      <Image
        aria-label={`Image of ${title}`}
        src={`/images/${image}`}
        alt={title}
        className='object-scale-down w-full h-48'
        priority={false}
        width={500}
        height={250}
      />
      <div className="p-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm mt-2 min-h-50">{body1}</p>
        <p className="text-sm mt-2 min-h-50">{body2}</p>
        <div className="flex flex-row mt-4justify-between">
            <a href={links[0]?.url} className="flex items-center">
                <Github className='icons_contactme' />
                <span className="text-black"> {links[0].text}</span>
            </a>
            <a href={links[1]?.url} className="flex items-center">
                <Github className='icons_contactme' />
                <span className="text-black"> Backend</span>
            </a>
        </div>
      </div>
    </div>
  );
};
