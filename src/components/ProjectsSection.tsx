import React from "react";
import Title from "./title";
import ProjectsCard from "./ProjectCards";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center text-white">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 text-white">
        <ProjectsCard
         
          title="E-commerece Website"
          des="Discover Marie Online Market – your premier hub for all things maritime. Explore our portfolio for the latest marie products and services tailored to elevate your experience. Dive in now!"
          src={"/images/projectOne.png"}
         
          vercelLink="https://hackathon-seven-kohl.vercel.app/"
        />
        <ProjectsCard
          title="My Portfolio Website"
          des="Welcome to my portfolio! Explore a curated collection of my projects showcasing expertise in web development, design, and digital marketing. Let's connect and bring your ideas to life!"
          src={"/images/projectTwo.png"}
         
          vercelLink="https://portfolio-website-five-orpin-68.vercel.app/"
        />
        <ProjectsCard
          title="Startup Agency Landing Page"
          des="Welcome to Startup Agency, your launchpad for startup success! Explore our services and let's ignite your journey to greatness together."
          src={"/images/projectThree.png"}
        
          vercelLink="https://landing-page-sandy-eta.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
