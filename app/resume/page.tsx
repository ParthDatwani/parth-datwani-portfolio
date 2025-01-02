export default function ResumePage() {
  return (
    <section
      className="p-8 max-w-3xl mx-auto h-[85vh] md:overflow-hidden overflow-auto"
      style={{ background: "var(--background)", color: "var(--text-color)" }}
    >
      <h2 className="text-3xl font-bold">My Resume</h2>
      <p className="mt-4 opacity-80">
        Download my resume to see my educational background, completed coursework, and detailed skill set.
      </p>

      {/* Resume PDF Viewer */}
      <iframe src="/downloads/resume.pdf" className="w-full h-[600px] mt-4" />

      {/* Download Button */}
      <a
        href="/downloads/resume.pdf"
        download
        className="inline-block mt-4 px-4 py-2 rounded font-medium transition-colors duration-300 bg-[var(--nav-bg)] text-[var(--text-color)] hover:bg-[var(--hover-color)] hover:text-black"
      >
        Download Resume
      </a>
    </section>
  );
}
