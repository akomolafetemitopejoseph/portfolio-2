import React, { useRef } from "react";
import { BsEnvelopeArrowDownFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { FiSend } from "react-icons/fi";
// import { FaSquareGithub } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";
// import { SiWhatsapp } from "react-icons/si";
// import { FaLinkedinIn } from "react-icons/fa";
import { BsTelephoneInbound } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { data } from "react-router-dom";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_47tn6df", "template_gffygo6", form.current, {
        publicKey: "U_CPVRyHKY9JSPKGr",
      })
      .then(
        () => {
          // alert("message sent successfully😂");
          toast.success("Form submitted successfully");

          form.current.reset();
        },
        (error) => {
          alert("FAILED...", error.text);
          toast.error(data.text);
        }
      );
  };
  return (
    <div
      // data-aos="zoom-in-down"
      // data-aos-easing="linear"
      // data-aos-duration="2300"
      id="contact"
      className="px-5 py-5  lg:px-10 lg:pt-10"
    >
      <div>
        <h1 className="flex justify-center mb-5 items-center gap-2 text-2xl lg:text-4xl bg-gradient-to-r from-emerald-900 via-green-600 to-stone-900 bg-clip-text text-transparent font-extrabold capitalize">
          <BsEnvelopeArrowDownFill className="text-gray-400" />
          contact
        </h1>
      </div>

      <div className=" lg:flex justify-center items-center gap-10">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="2300"
        >
          <h1 className="text-gray-400 text-xl lg:text-2xl font-bold mb-3">
            Let's talk
          </h1>
          <div>
            <p className="text-gray-400 text-[17px] lg:text-l">
              Have a project in mind or just want to say hi? Feel free to reach
              out. I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>
            <div className="mt-3">
              <h1 className="text-gray-400 text-xl lg:text-2xl font-bold mb-2">
                Email :
              </h1>
              <p className="mb-3">
                <a
                  className="text-gray-400 text-[17px] lg:text-l hover:text-gray-300 active:text-gray-200"
                  href="#"
                >
                  akomolafetemitope6@gmail.com
                </a>
              </p>
              <span className="text-gray-400 text-[17px] lg:text-l flex items-center gap-2 hover:text-gray-300 active:text-gray-200">
                <BsTelephoneInbound /> +234 9164127577
              </span>
            </div>
            <div>
              <h1 className="text-gray-400 text-xl lg:text-2xl font-bold mb-2 flex items-center gap-2 capitalize mt-3">
                <MdLocationPin /> location :
              </h1>
              <span className="text-gray-400 text-[17px] lg:text-l flex items-center gap-2 capitalize">
                lagos
              </span>
            </div>
          </div>
        </div>

        <form className="w-full" ref={form} onSubmit={sendEmail}>
          <div
            className="mb-5 lg:mb-10"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="2300"
          >
            <label className="peer-focus:font-medium text-xl lg:text-2xl text-green-500 dark:text-green-400 rtl:peer-focus:left-auto peer-focus:text-green-600  peer-focus:-translate-y-6">
              Name
            </label>
            <input
              className=" w-full text-xl lg:text-2xl text-gray-300 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-green-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer capitalize"
              placeholder=" "
              required
              type="text"
              name="name"
            />
          </div>

          <div
            className="mb-5 lg:mb-10"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="2700"
          >
            <label className="peer-focus:font-medium text-xl lg:text-2xl text-green-500 dark:text-green-400 rtl:peer-focus:left-auto peer-focus:text-green-600  peer-focus:-translate-y-6">
              Email
            </label>
            <input
              className=" w-full text-xl lg:text-2xl text-gray-300 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-green-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              required
              type="email"
              name="email"
            />
          </div>

          <div
            className="mb-5 lg:mb-10"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <label className="peer-focus:font-medium text-xl lg:text-2xl text-green-500 dark:text-green-400  rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500">
              Message
            </label>

            <textarea
              className="w-full resize-none outline-none text-xl lg:text-2xl text-gray-300 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-green-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer "
              name="message"
            />
          </div>

          <div className="w-full flex justify-center items-center gap-3 text-white bg-green-900 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xl p-3 lg:p-5 lg:text-2xl w lg:p-5-lg:full 2xl:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition-all duration-600 cursor-pointer">
            <FiSend />
            <input className="cursor-pointer" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
