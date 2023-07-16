import Link from "next/link";
import Image from "next/image";

export default function Homework() {
  return (
    <section className="min-h-screen text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-800 rounded overflow-hidden">
            <div className="w-24 h-full bg-slate-600"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
              How to Make a Website
            </h1>
            {/* <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              f
            </p> */}
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                className="object-cover object-center h-full w-full"
                height={325}
                width={600}
                src="https://i.postimg.cc/pd1C9hGG/CROPPED-example-IMAGE.jpg"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-white mt-5">
              Who would need their own website?
            </h2>
            <p className="text-base leading-relaxed mt-2">
              People like Entrepreneurs, Politicians, and Content Creators
            </p>
            <Link
              href="https://www.heilmanfornd.com/"
              className="text-slate-500 inline-flex items-center mt-3"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                className="object-cover object-center h-full w-full"
                height={325}
                width={600}
                src="https://i.postimg.cc/nh12KwzP/uniizt9iqjq30lxoh9vt.jpg"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-white mt-5">
              Step One
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Define the website&apos;s purpose, determine it&apos;s software
              needs, and give it a name and domain.
            </p>
            <Link
              href="https://domains.google/"
              className="text-slate-500 inline-flex items-center mt-3"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                className="object-cover object-center h-full w-full"
                height={325}
                width={600}
                src="https://i.postimg.cc/BbcPWkdW/1-oy1-Zlc-Vju-S-1v6-HQBM05p-A.jpg"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-white mt-5">
              Step Two
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Put together a project layout and file structure, begin
              structuring core functions, fill in placeholder data or texts, and
              write tests.
            </p>
            <Link
              href="https://nextjs.org/"
              className="text-slate-500 inline-flex items-center mt-3"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                className="object-cover object-center h-full w-full"
                height={325}
                width={600}
                src="https://i.postimg.cc/prnkDWhf/404.png"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-white mt-5">
              Step Three
            </h2>
            <p className="text-base leading-relaxed mt-2">
              If the design isn&apos;t already done go with what&apos;s easy.
              Start the creation of edge functions such as a 404 page and
              placeholders for images. Begin inserting real data or texts.
            </p>
            <Link
              href="/doesntexist"
              className="text-slate-500 inline-flex items-center mt-3"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                className="object-cover object-center h-full w-full"
                height={325}
                width={600}
                src="https://i.postimg.cc/J4j02fjP/8-Simple-Checkpoints-for-a-High-Speed-Web-Page.png"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-white mt-5">
              Step Four
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Optimize website for speed and accessibility.
            </p>
            <Link
              href="https://tools.pingdom.com/"
              className="text-slate-500 inline-flex items-center mt-3"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                className="object-cover object-center h-full w-full"
                height={325}
                width={600}
                src="https://i.postimg.cc/8PbDWNRQ/Screenshot20210212at115339-PM.png"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-white mt-5">
              Conclusion
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Maintain the website with updates to it&apos;s dependancies and
              pay for usage costs. Keep the client satisfied with the websites
              performance.
            </p>
            <Link
              href="https://www.npmjs.com/package/pure-react-carousel"
              className="text-slate-500 inline-flex items-center mt-3"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
