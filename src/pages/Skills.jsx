
const skills = [
  {
    title: "HTML",
    description: "Building structured web pages"
  },
  {
    title: "CSS",
    description: "Responsive layouts and styling"
  },
  {
    title: "JavaScript",
    description: "Interactive website functionality"
  },
  {
    title: "React",
    description: "Reusable components and UI development"
  },
  {
    title: "React Router",
    description: "Navigation and page routing"
  },
  {
    title: "REST APIs",
    description: "Fetching and displaying data"
  },
  {
    title: "SEO",
    description: "Search engine optimization"
  },
  {
    title: "Google Ads",
    description: "Search and performance campaigns"
  },
  {
    title: "Meta Ads",
    description: "Facebook and Instagram advertising"
  }
];

export default function Skills() {
  return (
    <section className="page">
      <p className="eyebrow">WHAT I WORK WITH</p>
      <h1 className="page-title">My Skills</h1>

      <div className="card-grid">
        {skills.map((skill) => (
          <article className="content-card" key={skill.title}>
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
