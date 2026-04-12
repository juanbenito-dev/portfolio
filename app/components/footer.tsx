export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="my-5 text-center">
      <p>© {currentYear} Juan Benito. Built with Next.js.</p>
    </footer>
  );
}
