import {FaGithub, FaLinkedinIn} from "react-icons/fa6";
import {ReactNode} from "react";
import {IoIosMail} from "react-icons/io";

interface Link{
  name: string;
  url: string;
  target?: string;
  icon?: ReactNode;
}
export default function Socials(){

  const socials: Link[] = [
    {
      name: "Github",
      url: "https://github.com/akashpate1",
      icon: <FaGithub />

    },
    {
      name: "Linkedin",
      url: "https://linkedin.com/in/akashpate",
      icon: <FaLinkedinIn color={"#2d64bc"}/>
    },
    {
      name: "Email",
      url: "mailto:hello@akashpate.com",
      icon: <IoIosMail />

    },
  ]
  return (
    <>
      <span className={"text-lg font-bold my-4"}>Socials</span>
      <ul>
        {socials.map((social, i) => (
          <li key={i}>
            <a className={"flex flex-row justify-between max-w-fit"} href={social.url} target={social.target ? social.target : '_blank'}><div className={"flex flex-col justify-center"} >{social.icon}</div> <span className={"ml-2"} > {social.name} </span> </a>
          </li>
        ))}
      </ul>
    </>

  )
}
