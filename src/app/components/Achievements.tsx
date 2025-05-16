import achievements from "@/app/data/achievements";

const Achievements = () => {
  return (
    <section id="achievements" className="flex justify-center bg-white relative">
      <div className="max-w-[1068px] w-full p-12 text-[#212529]">
        <h1 className="font-semibold mb-3">Achievements</h1>
        <ul className="list-disc">
          {achievements.map((achievement, index) => (
            <li key={index} className="">
              {achievement.title + " "}
              <span className="place">{" (" + achievement.place + " - " + achievement.round + ")"}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
