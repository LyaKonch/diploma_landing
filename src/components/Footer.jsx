export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container flex flex-col items-center justify-center py-4 gap-2">
        <small className="text-muted">© {year} Project Landing — Diploma Project</small>
        <div className="footer__links flex gap-6">
          <a href="#" className="text-muted text-sm hover:text-primary-light">Privacy</a>
          <a href="#" className="text-muted text-sm hover:text-primary-light">Terms</a>
          <a href="#" className="text-muted text-sm hover:text-primary-light">GitHub</a>
        </div>
      </div>
    </footer>
  );
}