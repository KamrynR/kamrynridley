import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-slate-800 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Kamryn Ridley</span>
          </a>
        </Link>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2022 — made while sleep deprived
          {/* <a
            href="https://twitter.com/knyttneve"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @kamrynridley
          </a> */}
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="https://twitter.com/kamryn_ridley">
            <a className="ml-3 text-gray-600">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </Link>
          <Link href="https://www.instagram.com/kamrynridley/">
            <a className="ml-3 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </Link>
        </span>
      </div>
    </footer>
  );
}
