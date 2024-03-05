import exp from "node:constants";
import {Key} from "react";

interface Experience{
  id: Key;
  position: String;
  companyName: String;
  positionStart: String;
  positionEnd: String;
  description: String;
}

export default function Experience(){

  const experienceList: Experience[] = [
    {
      id: 1,
      position: "Backend Developer",
      companyName: "Cronix LLC",
      positionStart: "July 2023",
      positionEnd: "Present",
      description: ""
    },
    {
      id: 2,
      position: "PHP Developer",
      companyName: "Innovins Softtech Solutions Pvt. Ltd.",
      positionStart: "August 2022",
      positionEnd: "July 2023",
      description: ""
    },
    {
      id: 3,
      position: "Full Stack Developer",
      companyName: "Freelancer",
      positionStart: "June 2021",
      positionEnd: "July 2022",
      description: ""
    },
    {
      id: 4,
      position: "CTO",
      companyName: "Divspace LLP",
      positionStart: "January 2019",
      positionEnd: "May 2021",
      description: ""
    }
  ]


  return (
    <>
      <span className={"text-lg my-6"} >🏢 Experience</span>
      { experienceList.map(experience => (
        <div key={experience.id} className={"flex flex-col my-4"}>
          <span className={"text-lg font-bold"} >{ experience.position }, { experience.companyName }</span>
          <small className={"text-sm text-gray-600"}>{ experience.positionStart} - {experience.positionEnd} </small>
          <p className={"text-justify mt-2"}>
            { experience.description }
          </p>
        </div>
      ))}
    </>
  );
}
