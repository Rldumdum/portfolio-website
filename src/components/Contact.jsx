import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ContactData } from "../data/ContactData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { emailService } = ContactData;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        emailService.serviceID,
        emailService.templateID,
        form.current,
        emailService.publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(form.current);
          toast.success(
            "Form Submitted!. Thank you. I'll get back to you as soon as possible"
          );
        },
        (error) => {
          console.log(error.text);
          toast.error("Form Submission Failed");
        }
      );
  };

  return (
    <div className="grid justify-center">
      <h1 className="text-black text-9xl mt-20 place-self-center" id="contact">
        Contact
      </h1>
      <p className="text-slate-500 mt-5 mb-6">
        Interested in working together? Fill out the form below with some info
        about
        <br /> your project and I will get back to you as soon as I can.
      </p>
      <div className="bg-neutral-500 p-5 rounded-xl">
        <div className="">
          <form className="grid mt-5" ref={form} onSubmit={sendEmail}>
            <label htmlFor="fullname" className="text-white">
              Full Name:
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="border border-black rounded"
              required
            />
            <label htmlFor="email" className="text-white">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="border border-black rounded"
              required
            />
            <label htmlFor="message" className="text-white">
              Message:
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              className="border border-black min-h-44 rounded"
              placeholder="I would like to schedule an interview with you for a project xyz"
              required
            />
            <button className="mt-5" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
