import React from "react";
import profilepic from "../../assets/profile_pic_lavender.png";

export default function AboutMe() {
  return (
    <section className="detail">
      <article className="detail-heading">
        <h1 className="self">About Me</h1>
        <img className="profile-pic" src={profilepic} alt="" />
      </article>
      <article className="detail-text">
        <p>
          Hi, I'm Myro and I am a fullstack developer! I love making things look
          nice and functional on the web. I also love solving problems and
          helping others solve theirs.
        </p>
        <p>
          My first taste of coding came in college with a course in C++ and
          MatLab. After graduating in Psychology, I left tech for a while and
          had 2 wonderful children.
        </p>
        <p>
          After my foray into restaurant business management, I decided to try
          my hand again in tech and decided to enroll in a coding bootcamp at
          UPenn.
        </p>
        <p>
          Many debugging sessions later, I am still here and still loving it!
        </p>
      </article>
    </section>
  );
}
