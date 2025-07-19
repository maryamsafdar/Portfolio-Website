"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML, CSS, JavaScript, TypeScript, Python</li>
        <li>React.js, Next.js, FastAPI, Streamlit</li>
        <li>LangChain, LangGraph, OpenAI API, Pinecone</li>
        <li>Generative AI, LLMs, Docker, Clerk Auth</li>
        <li>Responsive Web Design, AI Chatbots</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Bachelor's in Computer Science
          <div className="text-sm text-gray-400 pl-4">
            Lahore College for Women University (2021 – 2025)
          </div>
        </li>
        <li>
          Generative & Agentic AI Developer
          <div className="text-sm text-gray-400 pl-4">
            Panaversity (2023 – 2025)
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Generative & Agentic AI Developer - Panaverse</li>
        <li>Freelancer on Fiverr (2–3 years experience)</li>
        <li>Internship at NUEXUS Technologies (Nov 2024 – Jan 2025)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-16" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={600}
          alt="About Me"
          className="rounded-xl"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="lg:text-lg scroll-m-20 text-xl tracking-tight">
            I'm a versatile Full Stack Developer and AI Engineer with over 3 years of experience building
            modern web applications and generative AI solutions. I specialize in developing intelligent, real-time apps using{" "}
            <b className="text-purple-400">Next.js, TypeScript, Python, LangGraph, and OpenAI APIs</b>. My expertise includes agentic
            development, chatbot creation, vector databases, and LLM-powered tools. I've worked on projects like
            AI Q&A assistants, gesture-controlled games, and smart travel planners. With a strong foundation in{" "}
            <b className="text-purple-400">cloud-native tools, responsive UI, and real-time interaction</b>, I'm passionate about solving
            complex problems and delivering user-centered experiences. I'm also an active freelancer on Fiverr.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
