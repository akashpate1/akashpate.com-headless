import { ReactNode } from "react";
import {FaAws, FaDigitalOcean, FaLaravel, FaReact, FaShopify} from "react-icons/fa6";
import {SiBigcommerce, SiMysql} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";

interface Skill{
  name: String;
  icon?: ReactNode;
}
export default function Skills(){

  const skills: Skill[] = [
    {
      name: "Laravel",
      icon: <FaLaravel color={"#e04c3c"} />
    },
    {
      name: "Mysql",
      icon: <SiMysql color={"#32738c"} />
    },
    {
      name: "AWS",
      icon: <FaAws color={"#df9545"} />
    },
    {
      name: "React",
      icon: <FaReact color={"#387ca0"} />
    },
    {
      name: "NextJs",
      icon: <TbBrandNextjs />
    },
    {
      name: "Bigcommerce",
      icon: <SiBigcommerce />
    },
    {
      name: "Shopify",
      icon: <FaShopify color={"#9ebe59"} />
    },
    {
      name: "Digital Ocean",
      icon: <FaDigitalOcean color={"#2c67f6"} />
    }
  ]
  return (
    <>
      <span className={"text-lg font-bold my-4"}>Skills</span>
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>
            <div className={"flex flex-row justify-between max-w-fit"} ><div className={"flex flex-col justify-center"} >{skill.icon}</div> <span className={"ml-2"} > {skill.name} </span> </div>
          </li>
        ))}
      </ul>
    </>

  )
}
