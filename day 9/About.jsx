import React from "react";
import "../assets/css/HomePage.css";
// import { selectUser } from "./redux/UserSlice";
// import { useSelector } from "react-redux";

const Dashboard = () => {
  // const user = useSelector(selectUser);
  // const email = user.user && user.user.email ? user.user.email : "Guest";

  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>About Calmly</h1>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>Calmly</h2>
        </div>
        <div className="terms-section-content">
          <p>
          Welcome to Calmly, where we are dedicated to helping you find inner peace, reduce stress, and improve your overall well-being through the practice of meditation.
           Our mission is to provide you with a tranquil oasis in the digital world, where you can discover the transformative power of mindfulness.
          </p>
        </div>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>Our Story</h2>
        </div>
        <div className="terms-section-content">
          <p>
          Calmly was born out of a shared passion for mindfulness and meditation. 
          We recognized the profound impact that meditation had on their lives and wanted to make this ancient practice accessible to people from all walks of life.
          </p>
        </div>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>Our Vision</h2>
        </div>
        <div className="terms-section-content">
          <p>
          Our vision is simple yet powerful: to empower individuals to lead happier, healthier lives by integrating mindfulness into their daily routines.
          We believe that meditation is a tool that can help you navigate life's challenges with grace and cultivate a sense of inner calm
          </p>
        </div>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>What Sets Us Apart?</h2>
        </div>
        <div className="terms-section-content">
          <p>
          Guided Meditation Sessions: We offer a wide range of guided meditation sessions designed to address various aspects of your life, from stress reduction and relaxation to personal growth and self-discovery.

Experienced Instructors: Our meditation instructors are experienced practitioners who bring their wisdom and expertise to every session. They are here to support you on your meditation journey.
<br></br>
Personalized Experience: We understand that meditation is a personal practice. That's why our app allows you to customize your meditation sessions to suit your needs and preferences.
<br></br>
Community Support: Join our community of like-minded individuals who share your passion for meditation. Connect with others, share your experiences, and inspire one another on your mindfulness journey.
          </p>
        </div>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>Organizations</h2>
        </div>
        <div className="terms-section-content">
          <p>
            Organizations can post events, and they are responsible for the
            content they publish. Misleading or inappropriate content is
            prohibited.
          </p>
        </div>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>Intellectual Property</h2>
        </div>
        <div className="terms-section-content">
          <p>
            All content and materials available on our website are protected by
            intellectual property laws. Users must not use, copy, or distribute
            our content without permission.
          </p>
        </div>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>Join Us on Your Meditation Journey</h2>
        </div>
        <div className="terms-section-content">
          <p>
          We invite you to embark on a journey of self-discovery and inner peace with Calmly. 
          Whether you're new to meditation or a seasoned practitioner, our app has something to offer you.
          Start your meditation journey today and experience the profound effects of mindfulness.
          </p>
        </div>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>Contact Us</h2>
        </div>
        <div className="terms-section-content">
          <p>
          If you have any questions, feedback, or suggestions, please feel free to reach out to us at calmly@gmail.com. We'd love to hear from you and assist you on your meditation path.
          <br></br>
          Thank you for choosing calmly as your trusted companion on your journey to a calmer, happier, and more mindful life.
          </p>
        </div>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>Contact Information</h2>
        </div>
        <div className="terms-section-content">
          <p>
            If you have any questions about these Terms and Conditions, please
            contact us at .....@gmail.com.
          </p>
        </div>
      </div>
      <div>
        <a href="/home">Back</a>
      </div>
    </div>
  );
};

export default Dashboard;
