import aboutMe from "@/app/data/aboutme";

const AboutMe = () => {
  return (
    <section id="about-me" className="relative">
      <div className="max-w-[1068px] p-12 mx-auto">
        <h1 className="font-semibold mb-3 !text-white">About Me</h1>
        <p className="!text-white">{aboutMe}</p>
      </div>
    </section>
  );
};

export default AboutMe;
