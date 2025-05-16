"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import LinkTo from "./LinkTo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "About Me", href: "#about-me" },
    { name: "Education", href: "#education" },
    { name: "Get In Touch", href: "#get-in-touch" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <LinkTo href="#welcome" className="text-2xl font-bold text-gray-900">
            Jerico
          </LinkTo>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <LinkTo key={link.href} href={link.href} className="text-black">
                {link.name}
              </LinkTo>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-black focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-white px-4 pb-4 shadow"
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                <LinkTo key={link.href} href={link.href} className="text-black">
                  <button onClick={() => setIsOpen(false)}>{link.name}</button>
                </LinkTo>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// // import { Link } from "react-scroll";

// import React from "react";
// import LinkTo from "./LinkTo";

// const NavBar = () => {
//   return (
//     <nav className=" navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: "#031927" }}>
//       <div className="container py-1">
//         {/* <Link activeClass="active" className="navlink px-3" offset={-40} smooth spy to="welcome" duration={500} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"> */}
//         <h4 className="text-white my-auto">Jerico</h4>
//         {/* </Link> */}
//         {/* TOGGLE BUTTON FOR MOBILE */}
//         <button
//           className="navbar-toggler"
//           style={{ border: "none" }}
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#main-nav"
//           aria-controls="main-nav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* NAVBAR LINKS */}
//         {/* <div className="collapse navbar-collapse justify-content-end" id="main-nav"> */}
//         <ul className="navbar-nav gap-0 gap-sm-3 mt-2 mt-sm-0 align-items-center">
//           <li className="">
//             <button>About Me</button>
//             <LinkTo href="#projects" className="text-white">
//               Projects
//             </LinkTo>
//           </li>
//           <li className="nav-item">
//             <LinkTo href="#achievements">Achievements</LinkTo>
//           </li>
//           <li className="nav-item">
//             <LinkTo href="#about-me">About Me</LinkTo>
//           </li>
//           {/* <li className="nav-item">
//               <a className="nav-link text-white" href="#education">
//                 Education
//               </a>
//             </li> */}
//           <li className="nav-item">
//             {/* <Link activeClass="active" className="navlink px-3" offset={-40} smooth spy to="getintouch" duration={500} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
//                 Get in touch
//               </Link> */}
//           </li>
//         </ul>
//         {/* <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link" href="#home">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#about">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#experiences">
//                 Experiences
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#projects">
//                 Projects
//               </a>
//             </li>
//             <li className="nav-item ms-2 d-none d-md-inline">
//               <a className="btn btn-secondary" href="#getintouch">
//                 Get in touch
//               </a>
//             </li>
//           </ul> */}
//         {/* </div> */}
//       </div>
//     </nav>
//     // <nav className="navbar navbar-expand-md fixed-top" style={{ backgroundColor: "#031927" }}>
//     //   <div className="container">
//     // <a className="navbar-brand text-white" href="#welcome">
//     //   Jerico
//     // </a>
//     //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
//     //       <span className="navbar-toggler-icon"></span>
//     //     </button>

//     //     <div className="collapse navbar-collapse justify-content-end allign-center" id="main-nav">
//     // <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
//     //   <li className="nav-item">
//     //     <a className="nav-link text-white" href="#projects">
//     //       Projects
//     //     </a>
//     //   </li>
//     //   <li className="nav-item">
//     //     <a className="nav-link text-white" href="#achievements">
//     //       Achievements
//     //     </a>
//     //   </li>
//     //   <li className="nav-item">
//     //     <a className="nav-link text-white" href="#aboutme">
//     //       About Me
//     //     </a>
//     //   </li>
//     //   {/* <li className="nav-item">
//     //     <a className="nav-link text-white" href="#education">
//     //       Education
//     //     </a>
//     //   </li> */}
//     //   <li className="nav-item">
//     //     <a className="nav-link text-white" href="#aboutme">
//     //       Contact
//     //     </a>
//     //   </li>
//     // </ul>
//     //     </div>
//     //   </div>
//     // </nav>
//   );
// };

// export default NavBar;
