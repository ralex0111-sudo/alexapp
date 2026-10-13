
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero page">
      <div className="hero-content">
        <p className="eyebrow">HELLO, WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Alex R.</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <p className="hero-description">
          I build responsive websites and interactive web
          applications using modern web technologies.
          I also have experience in SEO and digital marketing.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            View My Projects
          </Link>

          <Link to="/contact" className="btn btn-outline">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="hero-card">
        <div className="profile-circle">AR</div>
        <h2>Alex R.</h2>
        <p>Full Stack Developer</p>
        <div className="hero-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>CSS</span>
        </div>
      </div>
    </section>
  );
}
