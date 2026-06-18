import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col items-center text-center">

          <h2 className="text-white text-2xl font-bold tracking-tight">
            SERVD
          </h2>

          <p className="text-zinc-400 mt-3 text-sm md:text-base">
            Designed & Developed by{" "}
            <span className="text-white font-medium">
              Laxmi Singh
            </span>
          </p>

          <p className="text-zinc-500 text-sm mt-1">
            Connect with me
          </p>

          <div className="flex items-center gap-6 mt-6">

            <a
              href="https://github.com/laxmisingh01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/laxmi-singh-369492297/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="https://www.instagram.com/kindaa.lucky/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
            >
              <Instagram size={22} />
            </a>

          </div>

          <div className="w-full border-t border-zinc-800 mt-10 pt-6">
            <p className="text-zinc-500 text-sm">
              © 2026 SERVD. All rights reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}