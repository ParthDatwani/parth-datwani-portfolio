import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default async function BlogPage() {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'));
  const blogs = files.map((file) => {
    const content = fs.readFileSync(path.join('posts', file), 'utf-8');
    const { data } = matter(content);
    return { ...data, slug: file.replace('.md', '') };
  });

  return (
    <section
      className="p-8 h-[80vh] overflow-hidden flex flex-col"
      style={{ background: "var(--background)", color: "var(--text-color)" }}
    >
      <h2 className="text-3xl font-bold">Blog</h2>
      <ul className="mt-4 space-y-4">
        {blogs.map((blog: any, i: number) => (
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
