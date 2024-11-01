import React from "react";

export default function Contact() {
  return (
    <>
      <div className="card linkedinphoto" style={{width: "18rem;"}}>
        <div className="card-body">
          <h5 className="card-title">Raghavendra R Sheregar</h5>
          <p className="card-text">
            Connect with me on LinkedIn for networking, collaboration, or
            project discussions. Let's build something great together!
          </p>
          <a href="https://in.linkedin.com/in/raghavendra-r-sheregar-b43a71236?trk=profile-badge" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            LinkedIn
          </a>
          <a href="mailto:raghursheregra@mail.com" className="btn btn-primary" style={{marginLeft:"1vw"}}>Mail</a>
          <a href="/book-my-event" className="btn btn-primary" style={{marginLeft:"1vw"}}>Back to Home Page</a>
        </div>
      </div>
    </>
  );
}
