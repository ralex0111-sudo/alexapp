
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Employee Management System",
    description:
      "Manage employee records with search, filters and forms.",
    tech: "React, JavaScript, CSS"
  },
  {
    id: 2,
    title: "User Management CRUD",
    description:
      "Fetch, display, add, edit and delete user records.",
    tech: "React, REST API"
  },
  {
    id: 3,
    title: "My Portfolio Website",
    description:
      "A responsive personal website to showcase my skills.",
    tech: "React, React Router, CSS"
  },
  {
    id: 4,
    title: "Digital Marketing Campaigns",
    description:
      "Campaign planning and lead generation for businesses.",
    tech: "Meta Ads, Google Ads, SEO"
  }
];

export default function Projects() {
  return (
    <section className="page">
      <p className="eyebrow">MY RECENT WORK</p>
      <h1 className="page-title">My Projects</h1>

      <div className="card-grid">
        {projects.map((project) => (
          <article className="content-card" key={project.id}>
            <span className="project-number">
              PROJECT 0{project.id}
            </span>

            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <p className="tech-stack">{project.tech}</p>

            <Link
              to={`/projects/${project.id}`}
              className="text-link"
            >
              View Details →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
