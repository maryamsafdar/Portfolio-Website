"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", level: "100%" },
  { name: "TypeScript", level: "95%" },
  { name: "Python", level: "90%" },
  { name: "React.js", level: "95%" },
  { name: "FastAPI", level: "85%" },
  { name: "Streamlit", level: "85%" },
  { name: "LangChain & LangGraph", level: "80%" },
  { name: "OpenAI API & Pinecone", level: "80%" },
  { name: "Docker", level: "70%" },
  { name: "Clerk Auth", level: "75%" },
  { name: "HTML/CSS", level: "95%" },
];

const Skills: React.FC = () => {
  return (
    <motion.div
      id="DevelopmentSkills"
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      <div className="w-full lgl:w-1/2 text-white px-4 mt-16">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Development Skills
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {skills.map((skill, index) => (
            <div className="overflow-x-hidden" key={skill.name}>
              <p className="text-sm uppercase font-medium">{skill.name}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  style={{ width: skill.level }}
                >
                  <span className="absolute -top-7 right-0">{skill.level}</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
