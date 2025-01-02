export default function Footer() {
  return (
    <footer
      className="p-4 text-center"
      style={{
        background: "var(--nav-bg)",
        color: "var(--text-color)",
      }}
    >
      <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      <div className="mt-2 flex space-x-4 justify-center">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
