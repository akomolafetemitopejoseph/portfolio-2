import React from "react";
import { BsEnvelopeArrowDownFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { FaSquareGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTelephoneInbound } from "react-icons/bs";

const ContactPage = () => {
  return (
    <div className="px-5 py-5  lg:px-10 lg:pt-10">
      <div>
        <h1 className="flex items-center gap-2 text-2xl lg:text-4xl bg-gradient-to-r from-emerald-900 via-green-600 to-stone-900 bg-clip-text text-transparent font-extrabold capitalize">
          <BsEnvelopeArrowDownFill className="text-gray-400" /> contact
        </h1>
      </div>

      <div className="flex justify-center items-center gap-10">
        <div>
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
                <a className="text-gray-400 text-[17px] lg:text-l" href="#">
                  akomolafetemitope6@gmail.com
                </a>
              </p>
              <span className="text-gray-400 text-[17px] lg:text-l flex items-center gap-2">
                <BsTelephoneInbound /> +234 9164127577
              </span>
            </div>
            <div>
              <h1 className="text-gray-400 text-xl lg:text-2xl font-bold mb-2 flex items-center gap-2 capitalize mt-3">
                <MdLocationPin /> location :
              </h1>
              <span className="text-gray-400 text-[17px] lg:text-l flex items-center gap-2 capitalize">lagos </span>
            </div>
          </div>
        </div>
        <form className="w-full">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_name"
              id="floating_name"
              class="block py-2.5 px-0 w-full text-xl p-3 lg:p-5 lg:text-2xl text-green-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-green-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_name"
              class="peer-focus:font-medium absolute text-xl p-3 lg:p-5 lg:text-2xl text-green-500 dark:text-green-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name :
            </label>
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-xl p-3 lg:p-5 lg:text-2xl text-green-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-green-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-xl p-3 lg:p-5 lg:text-2xl text-green-500 dark:text-green-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address :
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              class="block py-2.5 px-0 w-full text-xl p-3 lg:p-5 lg:text-2xl text-green-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-green-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_text"
              class="peer-focus:font-medium absolute text-xl p-3 lg:p-5 lg:text-2xl text-green-500 dark:text-green-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message :
            </label>
          </div>

          <button
            type="submit"
            class="w-full text-white bg-green-900 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xl p-3 lg:p-5 lg:text-2xl w lg:p-5-lg:full 2xl:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <FiSend /> Submit
          </button>
        </form>
      </div>
      <div>
        <h1>Reach out to me on</h1>
        <div>
          <FaSquareGithub />
          <FaXTwitter />
          <SiWhatsapp />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
