const skills = [
  { name: "Power BI", description: "Building interactive dashboards and visual reports" },
  { name: "Tableau", description: "Creating insightful data visualizations" },
  { name: "Excel", description: "Data cleaning, pivot tables, and basic modeling" },
  { name: "Python", description: "Data manipulation with pandas, basic scripting" },
  { name: "SQL", description: "Querying and extracting data from relational databases" },
];

export default function SkillsPage() {
  return (
    <section
      className="p-8 max-w-3xl mx-auto h-[80vh] md:overflow-hidden overflow-auto"
      style={{ background: "var(--background)", color: "var(--text-color)" }}
    >
      <h2 className="text-3xl font-bold">Skills</h2>
      <p className="mt-4 opacity-80">
        I’ve gained a solid foundation in data analysis tools and techniques through academic projects
        and personal practice.
      </p>
      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map(({ name, description }) => (
          <li
            key={name}
            className="p-4 rounded hover:scale-105 transition-transform"
            style={{ background: "var(--nav-bg)" }}
          >
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="opacity-80 text-sm mt-2">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
