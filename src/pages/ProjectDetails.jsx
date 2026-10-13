
import { Link, useParams } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Employee Management System",
    description:
      "An employee management application with search, department filters and an employee form.",
    tech: "React, JavaScript, CSS"
  },
  {
    id: 2,
    title: "User Management CRUD",
    description:
      "A CRUD application that works with user data through API requests.",
    tech: "React, REST API"
  },
  {
    id: 3,
    title: "My Portfolio Website",
    description:
      "A personal portfolio with multiple pages and responsive navigation.",
    tech: "React, React Router, CSS"
  },
  {
    id: 4,
    title: "Digital Marketing Campaigns",
    description:
      "Digital marketing campaigns focused on audience targeting and lead generation.",
    tech: "Meta Ads, Google Ads, SEO"
  }
];

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <section className="page">
        <h1>Project Not Found</h1>
        <Link to="/projects" className="text-link">
          Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="page">
      <p className="eyebrow">PROJECT DETAILS</p>
      <h1 className="page-title">{project.title}</h1>

      <div className="content-card">
        <h2>Overview</h2>
        <p>{project.description}</p>

        <h2>Technologies Used</h2>
        <p>{project.tech}</p>

        <Link to="/projects" className="btn btn-primary">
          Back to Projects
        </Link>
      </div>
    </section>
  );
}
