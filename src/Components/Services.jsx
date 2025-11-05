import React from "react";

const Services = () => {
  const mySevices = [
    {
      leading: "01",
      head: "Custom wedsite design",
      paragraph:
        "I design beautiful, user-friendly websites tailored to your business or brand — especially for nature, landscaping, or garden-related projects. Each design reflects your identity and vision with clean layouts and engaging visuals.",
    },

    {
      leading: "02",
      head: "Responsive & Mobile-First Layouts",
      paragraph:
        "Your website will look great on all devices — phones, tablets, and desktops — using a mobile-first approach for modern, flexible design",
    },

    {
      leading: "03",
      head: "UI/UX Development",
      paragraph:
        "I turn design ideas into real, interactive experiences using HTML, CSS, Tailwind CSS, and JavaScript, focusing on smooth navigation and easy usability.",
    },
    {
      leading: "04",
      head: "Portfolio & Business Websites",
      paragraph:
        "Whether you need a personal portfolio, business page, or service site, I build professional websites that help showcase your work — from flower landscaping to plant care and web design.",
    },
    {
      leading: "05",
      head: "Website Maintenance & Updates",
      paragraph:
        "I provide ongoing support — fixing issues, updating content, and keeping your website running smoothly and securely.",
    },
    {
      leading: "06",
      head: " Landing Pages",
      paragraph:
        "High-quality landing pages designed to attract visitors and convert them into customers — perfect for showcasing your services, seasonal offers, or garden projects.",
    },
    {
      leading: "07",
      head: "API & Interactive Features",
      paragraph:
        "Integration of APIs to display live content or interactive tools — for example, plant diagnosis tools, weather data for gardens, or quote request forms.",
    },
    {
      leading: "08",
      head: "Performance & SEO Optimization",
      paragraph:
        "I ensure fast-loading websites with SEO-friendly structure so your business can be easily found online.",
    },
  ];

  return (
    <div className="px-5 py-5  lg:px-10 lg:pt-10 text-gray-400">
      <div className="mb-2 lg:mb-5">
        <h1 className="text-[16px] font-bold lg:text-xl">
          Hi there! I’m a frontend developer with a passion for creating
          beautiful, easy-to-use websites. I love turning ideas into clean,
          responsive designs that work perfectly on any device. Whether you need
          a personal portfolio, a business site, or a simple page to showcase
          your services, I’m here to make your online presence stand out.
        </h1>
      </div>
      <div className="text-2xl font-bold lg:text-4xl capitalize mt-3 mb-3 lg:mb-5 lg:mt-5 ">
        <h1>my services as a frontend developer</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-2 lg:mt-5 ">
        {mySevices.map((mykey, index) => (
          <div
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            key={index}
          >
            <h1 className="text-2xl font-bold lg:text-4xl capitalize mb-2 lg:mb-5">
              {mykey.leading}
            </h1>
            <h1 className="text-xl font-bold lg:text-2xl capitalize mb-2 lg:mb-3">
              {mykey.head}
            </h1>
            <p>{mykey.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
