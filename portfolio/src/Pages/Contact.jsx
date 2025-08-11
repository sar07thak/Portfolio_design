import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "./Footer.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swal from "sweetalert2";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Heading animation (unchanged)
      tl.fromTo(
        ".heading-line",
        { y: 80, opacity: 0, rotateX: 60 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
        }
      );

      // Contact form animation with stagger
      gsap.fromTo(
        formRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, headingRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "20f804b9-6be8-4048-b516-e5b35dd55cc5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
        formRef.current.reset();
        setResult("");
      } else {
        Swal.fire({
          title: "Error",
          text: data.message || "Something went wrong, please try again.",
          icon: "error",
          confirmButtonColor: "#d33",
        });
        setResult("");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Unable to send message. Please check your connection.",
        icon: "error",
      });
      setResult("");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white text-black p-8 md:p-12 font-sans relative">
        <Navbar />

        {/* Heading */}
        <div
          ref={headingRef}
          className="max-w-8xl mx-auto px-4 sm:px-6 py-12 mb-20 overflow-hidden"
        >
          <div className="heading-line text-7xl md:text-[11rem] font-bold leading-none">
            SHOOT A
          </div>
          <div className="heading-line text-7xl md:text-[11rem] font-bold leading-none">
            REQUEST
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          className="max-w-3xl mx-auto space-y-6"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 bg-gray-100 text-lg outline-none border-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 bg-gray-100 text-lg outline-none border-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Masterpiece Starts Here"
            rows="6"
            className="w-full p-4 bg-gray-100 text-lg outline-none border-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white py-4 text-lg font-semibold hover:bg-gray-600 transition-colors"
          >
            Send It!
          </button>
        </form>

        {/* Status message */}
        {result && (
          <span className="block text-center mt-4 text-gray-600">{result}</span>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Contact;