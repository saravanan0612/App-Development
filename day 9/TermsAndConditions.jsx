import React from "react";
import "../assets/css/TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Terms and Conditions</h1>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>Acceptance of Terms</h2>
        </div>
        <div className="terms-section-content">
          <p>
            By accessing or using our website, you agree to comply with and be
            bound by these Terms and Conditions.
          </p>
        </div>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>Use of Services</h2>
        </div>
        <div className="terms-section-content">
          <p>
            You must be at least 18 years old to use our services. You agree to
            use the services only for lawful purposes.
          </p>
        </div>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>User Accounts</h2>
        </div>
        <div className="terms-section-content">
          <p>
            To access certain features of our website, you may be required to
            register for an account. You are responsible for maintaining the
            confidentiality of your account credentials.
          </p>
        </div>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>Events and Registration</h2>
        </div>
        <div className="terms-section-content">
          <p>
            Users can register for events posted by organizations. Organizers
            are responsible for the accuracy of event details.
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
          <h2>Privacy</h2>
        </div>
        <div className="terms-section-content">
          <p>
            Our Privacy Policy explains how we collect, use, and protect your
            personal information. By using our services, you agree to our
            Privacy Policy.
          </p>
        </div>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>Disclaimer</h2>
        </div>
        <div className="terms-section-content">
          <p>
            The information provided on our website is for general informational
            purposes only. We do not guarantee the accuracy or completeness of
            this information.
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

export default TermsAndConditions;