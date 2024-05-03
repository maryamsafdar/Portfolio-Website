import SocialMedia from "./SocialService";


function Footer() {
  return (<footer className="flex flex-col items-center  border border-[#33353F] bg-[#121212] ">
    
    <div className="pt-5">
    <SocialMedia size={35}/>
    </div>
    <div className="flex text-white text-center p-5">&copy; {new Date().getFullYear()} Maryam-Safdar. All rights reserved.</div>
  </footer>);
}

export default Footer;
