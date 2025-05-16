// import projects from "./data/projects.js";
// import achievements from "./data/achievements";
// import aboutme from "./data/aboutme";
// import education from "./data/education";
// import { Modal, ModalBody } from "react-bootstrap";
// import { useState } from "react";
// import { Link } from "react-scroll";
import AboutMe from "./components/AboutMe";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import GetInTouch from "./components/GetInTouch";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Welcome from "./components/Welcome";

export default function Home() {
  // const [showProject, setShowProject] = useState(false);
  // const [currentViewedProject, setCurrentViewedProject] = useState(null);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [haveSubmitted, setHaveSubmitted] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   fetch(`${import.meta.env.VITE_API}/email`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ name: name, email: email, message: message }),
  //   }).then((res) => {
  //     setIsSubmitting(false);
  //     setHaveSubmitted(true);
  //     setName("");
  //     setEmail("");
  //     setMessage("");
  //   });
  // };

  // const handleViewProject = (project) => {
  //   setCurrentViewedProject(project);
  //   setShowProject(true);
  // };

  return (
    <div>
      <NavBar />

      <Welcome />

      <Projects />

      <Achievements />

      <AboutMe />

      <Education />

      <GetInTouch />
    </div>
  );
}
