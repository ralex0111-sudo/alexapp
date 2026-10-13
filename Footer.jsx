import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h3>Alex | Full Stack Developer</h3>

      <p>
        Building modern and responsive web applications.
      </p>

      <p className="footer-copy">
        © {new Date().getFullYear()} Alex. All rights reserved.
      </p>
    </footer>
  );
}