import Link from "next/link";
import Service from "./Service";

const Services = () => {
  return (
    <div id="Services" className="flex text-white min-h-full flex-col items-center ">
      <p className="text-4xl mb-8 mt-8 text-white font-bold text-center">Services</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        <Service hl="Single Page Applications" desc="Development of responsive web apps such as portfolios, landing pages, and dashboards" img="/icons/1.svg" />
        <Service hl="API Integration" desc="Seamless integration into your solution for dynamic content delivery" img="/icons/2.svg" />
        <Service hl="SEO Optimization" desc="Enhancing visibility and rankings of your web application" img="/icons/3.svg" />
      </div>
    </div>
  );
}

export default Services;
