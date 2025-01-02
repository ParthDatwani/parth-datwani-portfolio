export default function AboutPage() {
  return (
    <section
      className="p-8 max-w-3xl content-center mx-auto h-[80vh] md:overflow-hidden overflow-auto"
      style={{ background: "var(--background)", color: "var(--text-color)" }}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="mt-4">
        I’m Parth Datwani, a Bachelor of IT graduate who discovered a passion for data analysis during my university projects.
        Through my coursework, I learned to clean, model, and visualize data and found that I enjoy using tools like Power BI
        and Tableau to tell meaningful stories.
      </p>
      <p className="mt-4">
        Although I don’t have professional experience in the field yet, I’ve dedicated countless hours to personal projects
        that mimic real-world scenarios. I’m committed to continuous learning—enhancing my Python skills for data wrangling,
        deepening my Excel proficiency, and exploring new analytics methodologies.
      </p>
      <p className="mt-4">
        With strong communication skills, attention to detail, and a growth mindset, I’m excited to apply my technical
        knowledge and problem-solving approach to a real-world environment as a Data/Business Analyst.
      </p>
    </section>
  );
}
