import Link from "next/link";
import Service from "./Service";


const Services = () => {
  return (
     <div id="Services" className="flex text-white min-h-full flex-col items-center mt-4">
   
    <p className="flex text-4xl mb-8 mt-8 justify-center text-white font-bold">Services</p>
    <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center">
      <Service hl="Single Page Applications" desc="Development of responsive web apps such as portfolios, landingpages and dashboards" img="/icons/1.svg" />
      <Service hl="API Integration" desc="Seamless integration into your solution for dynamic content delivery" img="/icons/2.svg" />
      <Service hl="SEO Optimization" desc="Enhancing visibility and rankings of your web application" img="/icons/3.svg" />
    </div>
    
  </div>);
}

export default Services;