import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Store", href: "/store" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#111111] pt-16 pb-6 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[#2dd4c8] font-black uppercase text-2xl tracking-widest">
              RZRJAW
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefining facial aesthetics with Pakistan&apos;s 1st ultra-tough
              jaw training gum. Engineered for the elite.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2024 RZRJAW Performance Labs.
            </p>
            <p className="text-[#2dd4c8] text-xs tracking-widest uppercase">
              Est. Islamabad, PK
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-2 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#2dd4c8] inline-block" />
              Quick Links
            </h4>
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-400 text-sm hover:text-[#2dd4c8] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Col 3 — Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-2 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#2dd4c8] inline-block" />
              Contact
            </h4>
            <p className="flex items-center gap-3 text-gray-400 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#2dd4c8"
                className="w-4 h-4 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              i-8 Markaz, Islamabad
            </p>
            <p className="flex items-center gap-3 text-gray-400 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#2dd4c8"
                className="w-4 h-4 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              03234942408
            </p>
            <a
              href="mailto:rzrjawpk@gmail.com"
              className="flex items-center gap-3 text-gray-400 text-sm hover:text-[#2dd4c8] transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#2dd4c8"
                className="w-4 h-4 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              rzrjawpk@gmail.com
            </a>
          </div>

          {/* Col 4 — Follow Us */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-2 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#2dd4c8] inline-block" />
              Follow Us
            </h4>
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="#"
                className="border border-[#2f2f2f] p-2 hover:border-[#2dd4c8] hover:text-[#2dd4c8] text-gray-400 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="border border-[#2f2f2f] p-2 hover:border-[#2dd4c8] hover:text-[#2dd4c8] text-gray-400 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2f2f2f] mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-xs mb-3">
          <a
            href="#"
            className="hover:text-[#2dd4c8] transition-colors duration-300"
          >
            Privacy policy
          </a>
          <span>·</span>
          <a
            href="#"
            className="hover:text-[#2dd4c8] transition-colors duration-300"
          >
            Refund policy
          </a>
          <span>·</span>
          <a
            href="#"
            className="hover:text-[#2dd4c8] transition-colors duration-300"
          >
            Terms of service
          </a>
          <span>·</span>
          <a
            href="#"
            className="hover:text-[#2dd4c8] transition-colors duration-300"
          >
            Shipping policy
          </a>
          <span>·</span>
          <a
            href="#"
            className="hover:text-[#2dd4c8] transition-colors duration-300"
          >
            Contact information
          </a>
        </div>
        <p className="text-center text-gray-600 text-xs">
          Developed by Team Evalon
        </p>
      </div>
    </footer>
  );
};

export default Footer;
