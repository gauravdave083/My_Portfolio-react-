import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Welcome to my digital space! I am a passionate and dedicated full-stack developer, recently graduated with a strong foundation in both front-end and back-end technologies. With a keen interest in crafting seamless user experiences, I am proficient in HTML, CSS, and JavaScript, and have hands-on experience with popular frameworks.
        </p>

        <br />

        <p className="text-xl">
        My goal is to bring creativity and efficiency to every project I undertake, and I am excited about the prospect of contributing my skills to dynamic and collaborative teams. As I embark on this exciting career as a full-stack developer, I am eager to learn, grow, and make a meaningful impact in the ever-evolving landscape of web development. Let's build something incredible together!
        </p>
      </div>
    </div>
  );
};

export default About;