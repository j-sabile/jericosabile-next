import ResumeButton from "./buttons/ResumeButton";
import LinkTo from "./LinkTo";

const Welcome = () => {
  return (
    <>
      <section id="welcome" />
      <section id="welcome-section" className="flex flex-col items-center justify-center sticky w-full" style={{ inset: 0, position: "sticky" }}>
        {/* <section id="welcome" className="flex flex-col items-center sticky w-full"> */}
        <div className="flex justify-between max-w-[1068px] w-full">
          <div className="flex justify-center items-center ps-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-7xl !text-white">Hi, I am</h3>
              <h2 className="font-semibold text-7xl !text-white">Jerico Sabile</h2>
              <h3 className="text-4xl !text-white">a Software Engineer</h3>
              <div className="flex justify-start items-center mt-4 gap-3">
                <LinkTo href="#get-in-touch" highlight={false}>
                  <button className="bg-[#70A77D] font-semibold px-6 py-2 rounded-md btn">Get In Touch</button>
                </LinkTo>
                <ResumeButton />
              </div>
            </div>
          </div>
          <div className="max-md:hidden">
            <img src="/img/port.png" className="w-full" alt="jerico" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
