import { ContactData } from "../data/ContactData";
import { Link as RouterLink } from "react-router-dom";

const { resume } = ContactData;

const Resume = () => {
  return (
    <section className="flex justify-center h-screen w-screen items-center ">
      <RouterLink to="/portfolio-website">
        <div className="absolute top-5 left-5">
          <img
            className="relative w-16 h-12"
            src="/portfolio-website/images/back-arrow.png"
          />
        </div>
      </RouterLink>
      <a href={resume}>
        <h1 className="bg-gray-950 text-white rounded-2xl p-5 transition-all duration-1000 cursor-pointer hover:bg-red-500 hover:text-black">
          Resume
        </h1>
      </a>
    </section>
  );
};
export default Resume;
