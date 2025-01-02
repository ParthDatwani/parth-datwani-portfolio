const projects = [
  {
    name: "Retail Sales Power BI Dashboard",
    category: "Power BI",
    description: "An interactive dashboard analyzing monthly sales trends, top products, and regional performance.",
    image: "/images/retail-sales-dashboard.png",
  },
  {
    name: "Customer Churn Analysis with Python",
    category: "Python",
    description: "A data cleaning and preprocessing script using pandas to identify churn patterns in sample data.",
    image: "/images/customer-churn.png",
  },
  {
    name: "Financial Reporting with Excel",
    category: "Excel",
    description: "A financial report with pivot tables and charts to summarize expenses and revenues over quarters.",
    image: "/images/financial-report.png",
  },
  {
    name: "Marketing Analytics with Tableau",
    category: "Tableau",
    description: "A Tableau dashboard illustrating marketing campaign effectiveness across different channels.",
    image: "/images/marketing-analytics.png",
  },
];

export default function ProjectsPage() {
  return (
    <section
      className="p-8 max-w-5xl mx-auto h-[80vh] md:overflow-hidden overflow-auto"
      style={{ background: "var(--background)", color: "var(--text-color)" }}
    >
      <h2 className="text-3xl font-bold">Projects</h2>
      <p className="mt-4 opacity-80">
        Below are some practice projects I’ve created to develop my data analysis and visualization skills.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <div key={i} className="p-4 rounded hover:scale-105 transition-transform" style={{ background: "var(--nav-bg)" }}>
            {project.image && (
              <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded mb-4" />
            )}
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="opacity-80">{project.category}</p>
            <p className="opacity-80 mt-2 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
