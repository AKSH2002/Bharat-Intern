import React from "react";
import "./AboutUs.css"; // Import the CSS file for AboutUs

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* <h2>About Us</h2> */}
      <div className="about-content">
        <img src="aksh.png" alt="Your Photo" />
        <h1 style={{ fontSize: "1.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

        <p>
         I am Aksh Darji. As a software engineering student with a keen interest in  DevOps 🚀, Cyber Security 🔒, Software Development 💻, Computer Networks 🌐, Cloud ☁️, Ethical Hacking 🔍, Web Development 🎯 and also in areas related to Artificial intelligence 🌈 and Machine Learning 🤖. 
        </p>
        <p>
         With experience in languages like Java, Python, JavaScript, React.js, and C, 😎 I enjoy tackling technical challenges 👨‍💻 and creating innovative solutions 🧠. I am also passionate about utilizing tools like Docker 🐳, Kubernetes, and Jenkins to enhance development processes 🚀 and enhance software delivery 🚀.  Also, I work in the field of Web Development with Modern Javascript Library 🌐 and Frameworks like React.js and Node.js 🛠️. 
        </p>
        
        <div>
             <h1>
                 <a href="https://www.linkedin.com/in/aksh-darji-127316210/">🌐 LinkedIn</a>
                 <br />
                 <br />
                 <a href="https://github.com/AKSH2002">💻 GitHub</a>
             </h1>
        </div>


        
      </div>
    </div>
  );
};

export default AboutUs;
