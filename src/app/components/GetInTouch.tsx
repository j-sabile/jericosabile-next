"use client";

import { FormEvent, useState } from "react";

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [haveSubmitted, setHaveSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // fetch(`${import.meta.env.VITE_API}/email`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name: name, email: email, message: message }),
    // }).then((res) => {
    //   setIsSubmitting(false);
    //   setHaveSubmitted(true);
    //   setName("");
    //   setEmail("");
    //   setMessage("");
    // });
  };

  return (
    <section id="get-in-touch" className="relative bg-[#031927]">
      <div className="flex flex-col p-12 max-w-[1200px] mx-auto">
        <h1 className="font-semibold mb-4 !text-white">Get In Touch</h1>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="flex flex-col flex-grow gap-2">
            <input
              type="text"
              placeholder="Name"
              className="bg-white text-black placeholder-gray-500 rounded-md shadow px-3 py-1"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={haveSubmitted}
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-white text-black placeholder-gray-500 rounded-md shadow px-3 py-1"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={haveSubmitted}
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="bg-white text-black placeholder-gray-500 rounded-md shadow px-3 py-1"
              required
              style={{ resize: "none" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={haveSubmitted}
            />
            <button type="submit" className="btn bg-[#0D6EFD] text-white rounded-md px-6 py-1" disabled={isSubmitting || haveSubmitted}>
              {isSubmitting ? (
                <>
                  <div className="" role="status">
                    <span className="visually-hidden">Submitting...</span>
                  </div>
                  Submitting...
                </>
              ) : (
                <>{haveSubmitted ? "Submitted!" : "Submit"}</>
              )}
            </button>
          </form>
          <div className="flex flex-col flex-grow mt-8 gap-4">
            <p className="!text-white">Thank you for taking the time to visit my portfolio. I look forward to hearing from you.</p>
            <p className="!text-white">+63 967 713 5871</p>
            <p className="!text-white">jericosabile@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
