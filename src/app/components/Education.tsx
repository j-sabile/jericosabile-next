import education from "@/app/data/education";

const Education = () => {
  return (
    <section id="education" style={{ position: "relative", backgroundColor: "#FFFFFF" }}>
      <div className="max-w-[1068px] p-12 mx-auto">
        <h1 className="font-semibold">Education</h1>
        <ul className="list-disc">
          {education.map((education, index) => (
            <li key={index}>
              <h6>{education.school + " (" + education.year + ")"}</h6>
              <p>{education.section}</p>
              <p>{education.award}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
