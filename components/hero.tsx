import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 pt-16 pb-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Full Stack Web Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            As a programmer, working to create a better experience for the
            end-user is paramount. My proficiency in Web Development gives me
            the power to generate new ideas and design solutions to problems
            present in websites today. Currently, I&apos;m seeking opportunities
            that allow me to incorporate my knowledge to better the experience
            of the internet.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg">
              Take a look at my work
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-contain rounded"
            alt="hero"
            height={500}
            width={600}
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
      <div className="container mx-auto flex pb-16 md:flex-row flex-col items-center">
        <div className="px-5 py-5 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            height={500}
            width={600}
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div className="px-5 py-5 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            height={500}
            width={600}
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div className="px-5 py-5 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            height={500}
            width={600}
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
}
