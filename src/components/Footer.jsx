export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Cosmos. All rights reserved.</p>
          <div className="flex gap-6 text-white/70">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
