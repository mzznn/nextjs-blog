export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="items-center justify-items-left min-h-screen gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
   <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <ul>
          <li>Testing: Link</li>
          <li>Testing: Link</li>
          <li>Testing: Link</li>
          <li>Testing: Link</li>
          <li>Testing: Link</li>
          <li>Testing: Link</li>
          <li>Testing: Link</li>
          <li>Testing: Link</li>
        </ul>
      </div>
  </main>;
}