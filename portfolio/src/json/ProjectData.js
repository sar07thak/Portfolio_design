// src/json/ProjectData.js

import expenseImage from "../assets/expense.jpg";
import expenseFront from "../assets/expense/Front.png";
import expense1 from "../assets/expense/1.png";
import expense2 from "../assets/expense/2.png";
import expense3 from "../assets/expense/3.png";
import expense4 from "../assets/expense/4.png";

import ecomImage from "../assets/eCom.jpg";
import ecomFront from "../assets/Aure/Front.png";
import ecom1 from "../assets/Aure/1.png";
import ecom2 from "../assets/Aure/2.png";
import ecom3 from "../assets/Aure/3.png";
import ecom4 from "../assets/Aure/4.png";

import guessImage from "../assets/guess.jpg";
import guessFront from "../assets/Guess/Front.png";
import guess1 from "../assets/Guess/1.png";
import guess2 from "../assets/Guess/2.png";
import guess3 from "../assets/Guess/3.png";

import portImage from "../assets/port.jpg";
import portFront from "../assets/Port/Front.png";
import port1 from "../assets/Port/1.png";
import port2 from "../assets/Port/2.png";

import furImage from "../assets/fur.jpg";
import furFront from "../assets/Fur/Front.png";
import fur1 from "../assets/Fur/1.png";
import fur2 from "../assets/Fur/2.png";
import fur3 from "../assets/Fur/3.png";
import fur4 from "../assets/Fur/4.png";

import aiImage from "../assets/ai.jpeg";
import aiFront from "../assets/Ai/Front.png";
import ai1 from "../assets/Ai/1.png";
import ai2 from "../assets/Ai/2.png";
import ai3 from "../assets/Ai/3.png";
import ai4 from "../assets/Ai/4.png";

const projects = [
  {
    name: "Expense Tracker",
    image: expenseImage,
    WorkingUrl: "https://expensetracker-front-rpp5.onrender.com/",
    githubUrl: "https://github.com/sar07thak/ExpenseTracker",
    type: "MERN",
    year: 2025,
    frontImage: expenseFront,
    sideImage: [expense1, expense2, expense3, expense4],
    shortDescription:
      "The Expense Tracker project is a sleek and functional, combining seamless UI with powerful backend logic to help users manage income and expenses effortlessly in real-time.",
    about:
      "The Expense Tracker App is a full-stack MERN (MongoDB, Express.js, React, Node.js) application designed to help users manage their finances effortlessly. It allows users to securely sign up or log in, track income and expenses with timestamps, upload avatar images, and view a responsive dashboard. Built with React and Tailwind CSS, the app ensures a clean and interactive UI. Data is securely stored using MongoDB Atlas, and the app is fully deployed on Render, offering accessibility across devices.",
  },
  {
    name: "E-Commerce",
    image: ecomImage,
    WorkingUrl: "https://e-commerce-mern-frontend-vr2x.onrender.com/login",
    githubUrl: "https://github.com/sar07thak/E-COMMERCE-MERN",
    type: "MERN",
    year: 2025,
    frontImage: ecomFront,
    sideImage: [ecom1, ecom2, ecom3, ecom4],
    about:
      "The MERN E-Commerce Platform is a complete full-stack application built with MongoDB, Express.js, React, and Node.js, offering a seamless shopping experience for both users and admins. Customers can sign up, browse products, manage carts, and place orders with ease, while JWT authentication ensures secure access. The platform also includes a dedicated Admin Panel for managing products, users, and orders, along with real-time dashboard stats.The frontend is built using React, Tailwind CSS, and Context API for state management, providing a clean and responsive interface. The backend leverages Express, Mongoose, and JWT for robust and scalable data handling.",
    shortDescription:
      "A full-stack MERN e-commerce platform featuring secure authentication, a responsive shopping experience, and an admin panel to manage products, users, and orders.",
  },
  {
    name: "GuessNumber",
    image: guessImage,
    WorkingUrl: "https://sar07thak.github.io/GuessNumber/",
    githubUrl: "https://github.com/sar07thak/GuessNumber?tab=readme-ov-file",
    year: 2024,
    type: "Frontend",
    frontImage: guessFront,
    sideImage: [guess1, guess2, guess3],
    about:
      "The GuessNumber Game is a fun and interactive web-based game built using HTML, CSS, and JavaScript. Players try to guess a randomly generated number within a limited number of attempts, receiving real-time feedback after each guess. The game features a clean and responsive design with simple logic that makes it engaging for all age groups. It's a great demonstration of core JavaScript concepts like DOM manipulation, conditionals, and event handling.",
    shortDescription:
      "The GuessNumber Game brings classic number guessing to life with a modern touch, blending minimalist design with responsive interactions. Built with pure HTML, CSS, and JavaScript, it's a quick and fun challenge for users of all ages.",
  },
  {
    name: "Portfolio",
    image: portImage,
    WorkingUrl: "#",
    githubUrl: "https://github.com/sar07thak/Portfolio_design",
    type: "ReactJS",
    frontImage: portFront,
    sideImage: [port1, port2],
    year: 2025,
    about:
      "The SAGU Portfolio is a sleek and modern personal website crafted by Sarthak Gupta using React.js. Inspired by minimal design, it showcases creativity and professionalism through smooth animations and responsive layouts. Enhanced with popular libraries like React Router, Framer Motion, GSAP, and React-Bits, the site offers fluid navigation, dynamic transitions, and interactive UI elements. Perfect for developers and designers, it includes sections like Home, Work, About, and Contact—fully customizable for a strong online presence. Optimized for performance and accessibility, this portfolio reflects Sarthak’s passion for clean code and cutting-edge frontend development.---Let me know if you'd like a shorter version too!",
    shortDescription:
      "The Portfolio is a bold, interactive showcase by Sarthak Gupta, built with React.js and enhanced by modern libraries like GSAP and Framer Motion — where clean design meets fluid user experience.",
  },
  {
    name: "Furniture",
    image: furImage,
    WorkingUrl: "https://furnishme.netlify.app/",
    githubUrl: "https://github.com/sar07thak/E-COMMERCE-WEBSITE?tab=readme-ov-file",
    type: "Frontend",
    frontImage: furFront,
    sideImage: [fur1, fur2, fur3, fur4],
    year: 2024,
    about:
      "The E-Commerce Website is a fully responsive online shopping platform developed using HTML, CSS, and Vanilla JavaScript. Designed with a clean, user-friendly interface, it offers dynamic product listings, real-time cart management, and a smooth checkout flow. The site includes features like product search, filtering, and sorting to enhance user experience across all devices. Version-controlled via GitHub, the project also integrates ChatGPT to streamline development and improve functionality with AI-driven suggestions. Its modular, well-organized codebase makes it easy to customize and maintain, making it an ideal foundation for personal or beginner-level e-commerce projects.",
    shortDescription:
      "The Furniture Haven project is a warm, inviting digital space , where handcrafted code meets handcrafted design—each element styled to reflect the elegance and comfort of modern living spaces",
  },
  {
    name: "AI-Image",
    image: aiImage,
    WorkingUrl: "https://ai-image-identifier-three.vercel.app/",
    githubUrl: "https://github.com/sar07thak/AI-Image-Identifier",
    type: "GenAi",
    frontImage: aiFront,
    sideImage: [ai1, ai2, ai3, ai4],
    year: 2025,
    about:
      "AI Image Identifier is a sleek React web app that uses the Google Gemini API to analyze and describe uploaded images. With drag-and-drop support, responsive design, and smooth error handling, it offers an intuitive experience for users. Built using React and Tailwind CSS, this project showcases how to integrate advanced AI capabilities into modern frontend applications.",
    shortDescription:
      "AI Image Identifier is a smart, minimal web app that turns images into words using the power of Google Gemini. Upload or drag-and-drop a photo, and let AI generate detailed, human-like descriptions—all within a clean, responsive interface.",
  },
];

export default projects;