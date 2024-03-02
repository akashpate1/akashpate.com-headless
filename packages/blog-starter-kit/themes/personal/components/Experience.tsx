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
      description: "Developed and maintained server-side components for an e-commerce platform using PHP and MySQL.\n" +
        "I implemented a RESTful API for a mobile application using Core PHP, allowing seamless communication between the app and the\n" +
        "server.\n" +
        "Integrated Payment Gateway & Shipping Gateway in e-commerce web application.\n" +
        "Created and managed a cloud-based infrastructure using Amazon Web Services, including setting up and configuring EC2\n" +
        "instances and S3 storage buckets.\n"
    },
    {
      id: 2,
      position: "PHP Developer",
      companyName: "Innovins Softtech Solutions Pvt. Ltd.",
      positionStart: "August 2022",
      positionEnd: "July 2023",
      description: "Developed and maintained server-side components for an e-commerce platform using PHP and MySQL.\n" +
        "I implemented a RESTful API for a mobile application using Core PHP, allowing seamless communication between the app and the\n" +
        "server.\n" +
        "Integrated Payment Gateway & Shipping Gateway in e-commerce web application.\n" +
        "Created and managed a cloud-based infrastructure using Amazon Web Services, including setting up and configuring EC2\n" +
        "instances and S3 storage buckets.\n"
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
