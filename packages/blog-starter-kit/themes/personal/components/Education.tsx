import exp from "node:constants";
import {Key} from "react";

interface Education{
  id: Key;
  degree: String;
  university: String;
  graduatedAt: String;
}

export default function Education(){

  const experienceList: Education[] = [
    {
      id: 1,
      degree: "B.Tech in Computer Science & Engineering",
      university: "Sandip University",
      graduatedAt: "2022",
    },
    {
      id: 2,
      degree: "Diploma in Computer Engineering",
      university: "Sandip Polytechnic",
      graduatedAt: "2019",
    }
  ]


  return (
    <>
      <span className={"text-lg my-6"} >🎓 Education</span>
      { experienceList.map(education => (
        <div key={education.id} className={"flex flex-col my-4"}>
          <span className={"text-lg font-bold"} >{ education.degree }  </span>
          <small className={"text-sm text-gray-600"}>{ education.university } - { education.graduatedAt}</small>
          <p className={"text-justify mt-2"}>
          </p>
        </div>
      ))}
    </>
  );
}
