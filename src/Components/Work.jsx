import React from 'react'
import img1 from "../assets/porforlio/ecomance-wedsite.png"
import img2 from "../assets/porforlio/first-portfolio.png"
import img3 from "../assets/porforlio/virtualBuildTools.png"

const myWorks = [
{heading: "ecommance website", tool1: "react", tool2: "tailwind css", tool3: "react-redux"},

{heading: "VirtualR build tools for developers", tool1: "react", tool2: "tailwind"},

{heading: "my first porfolio", tool1: "react", tool2: "tailwind"},

{heading: "my second portfolio", tool1: "react", tool2: "tailwind"}

]

const Work = () => {
  return (
    <div>
      <div>
        <h1>Projects</h1>
      </div>

      <div>
        <h1>Selected Work</h1>
        <p>Interactive showcase of my latest designs and development projects.</p>
      </div>
    </div>
  )
}

export default Work