import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Blog {
  title: string;
  date: string;
  slug: string;
}

export default async function BlogPage() {
  let blogs: Blog[] = [];

  try {
    // Read the list of markdown files in the "posts" directory
    const files = fs.readdirSync(path.join(process.cwd(), 'posts'));

    blogs = files.map((file) => {
      const content = fs.readFileSync(path.join('posts', file), 'utf-8');
      const { data } = matter(content);

      // Ensure the `data` object contains the expected keys
      if (!data.title || !data.date) {
        throw new Error(`Missing required fields in blog post: ${file}`);
      }

      return {
        title: data.title as string,
        date: data.date as string,
        slug: file.replace('.md', ''),
      };
    });
  } catch (error) {
    console.error("Error reading blog posts:", error);
  }

  return (
    <section
      className="p-8 h-[80vh] overflow-hidden flex flex-col"
      style={{ background: "var(--background)", color: "var(--text-color)" }}
    >
      <h2 className="text-3xl font-bold">Blog</h2>
      <ul className="mt-4 space-y-4">
        {blogs.map((blog, i) => (
          <li
            key={i}
            className="p-4 rounded"
            style={{ background: "var(--nav-bg)" }}
          >
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="opacity-80">{blog.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
