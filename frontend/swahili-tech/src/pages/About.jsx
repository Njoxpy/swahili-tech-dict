import React from "react";
import "../index.css"

function About() {
  return (
    <div className="about">
      <div className="w-1">
      <h3>About, Swahili Tech Dictionary</h3>
      <p className="about-info">
        Welcome to TechDict – your go-to resource for understanding the
        specialized terminology used in the world of software localization and
        internationalization. Whether you're just starting out in the tech
        industry or looking to contribute to open-source projects on GitHub,
        mastering these terms is essential to your success. Localization and
        internationalization can be daunting areas for newcomers, with a myriad
        of terms and concepts that are often taken for granted by seasoned
        professionals. Our mission is to simplify this journey by providing
        clear, concise definitions and explanations of the most commonly used
        terms in these fields.
      </p>
      </div>
      <div className="w-2">
      <h3>Why TechDict?</h3>
      <p className="why">
        When you're contributing to GitHub projects, especially those aimed at a
        global audience, understanding localization is key. Terms like "locale,"
        "translation memory," "string interpolation," and "pluralization rules"
        are just a few examples of the concepts you'll encounter. At TechDict,
        we break down these terms and provide examples, so you can confidently
        navigate and contribute to projects that reach users worldwide. Whether
        you're translating software into different languages, adjusting date
        formats for various regions, or making sure your code handles different
        currencies correctly, TechDict is here to help. Our dictionary is
        continuously updated with the latest terms and practices in localization
        and internationalization, ensuring you stay informed and equipped.
      </p>
      </div>
      <div className="w-3">
      <h3>Get Started with TechDict</h3>
      <p className="started">
      Explore our dictionary to find definitions and examples of key terms, or use our search feature to quickly find the information you need. We're here to support you as you grow in your tech journey, making it easier to contribute to projects on GitHub and beyond.
      </p>
      </div>
    </div>
  );
}

export default About;
