import React from "react";
import "../assets/css/HomePage.css";
import { selectUser } from "./redux/UserSlice";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : "Guest";

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <div className="navbar">
        {/* Navbar content */}
        <ul>
          <li>
            <a href="#organization">{email}</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/meditate">Meditate</a>
          </li>
          <li>
            <a href="/">Logout</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div class="text-box">
          <section class="ubisoft">
            <h1>CALMLY</h1>
            <p> A MEDITATION APP TO RELAX YOURSELF </p>

            <div class="row">
              <div class="ubisoft-col">
                <h3>Why?</h3>
                <p>Meditation is a transformative practice with a multitude of compelling reasons to embrace it. Foremost among these is its remarkable ability to reduce stress and promote relaxation, making it an invaluable tool for modern life's demands. Beyond stress relief, meditation fosters emotional well-being by enhancing self-awareness and mindfulness, facilitating better emotional regulation and a more optimistic perspective on life. </p>
              </div>

              <div class="ubisoft-col">
                <h3>How?</h3>
                <p> Meditation is a profoundly accessible practice that can be embraced by individuals of all backgrounds and levels of experience. To embark on a meditation journey, begin by finding a serene and distraction-free space where you can comfortably sit or lie down. The choice of posture is flexible; you can opt for a cross-legged position on a cushion or chair with a straight yet relaxed back, or simply lie down on your back with arms at your sides.</p>
              </div>

              <div class="ubisoft-col">
                <h3>Review</h3>
                <p>The games have received generally positive reviews for their gameplay elements, mission structure, and world design, with criticism for frequent technical issues, while the narratives and characters have garnered mixed reactions. The series has been financially successful, with lifetime sales for the first two games exceeding 20 million units in total.</p>
              </div>
            </div>
          </section>  
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">&copy; 2023 Copyright
        <div>
            <a href="/AdminLogin" style={{color:"White"}}>Admin Login  </a>
        </div>
      </footer>
            <footer className="footer">
            <a href="/tac" style={{color:"White"}}>Terms And Conditions</a>    
            </footer>
    </div>
  );
};

export default Dashboard;
