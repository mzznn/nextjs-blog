import { getAllPosts } from "./lib/getBlogPosts";
import Link from 'next/link'

export default async function Home() {
  const allPosts = await getAllPosts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl sm:text-xl">ROSEQUARTZ</h1>
        <ul className="grid gap-4">
          {allPosts.map((post) => (
            <li
              key={post.slug}
              className="rounded hover:bg-white-900 dark:hover:bg-blue-900 transition-colors"
            >
              <a href={`/${post.slug}`} className="block p-2 m-2 rounded">
                📖 {post.title} →
              </a>
                 <p className="grid border-1 p-6">{post.slug}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={`/colophon/`}
        >
          📁 Colophon
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          📚 Kontakt
        </a>
      </footer>
    </div>
  );
}
