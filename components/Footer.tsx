export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xl">🌍</span>
          <span className="font-bold text-lg">Globalist</span>
        </div>

        <nav className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
          <a href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a
            href="mailto:support@globalistapp.com"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>

        <p className="text-sm text-gray-500">© 2026 Bayria. All rights reserved.</p>
      </div>
    </footer>
  );
}
