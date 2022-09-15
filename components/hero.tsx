export default function Hero() {
  return (
    <section className="min-h-screen text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 pt-16 pb-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Vestibulum mi sem, tempus quis sapien vitae
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
            pellentesque dolor. In maximus tellus eget erat sodales rhoncus.
            Cras vel sollicitudin lorem, non pharetra nisl. Nunc eget elit
            aliquet, dapibus mi ut, ultricies est.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg">
              Curious?
            </button>
            {/* <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Button
            </button> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://picsum.photos/720/603"
          />
        </div>
      </div>
      <div className="container mx-auto flex pb-16 md:flex-row flex-col items-center">
        <div className="px-5 py-5 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://picsum.photos/720/600"
          />
        </div>
        <div className="px-5 py-5 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://picsum.photos/720/601"
          />
        </div>
        <div className="px-5 py-5 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://picsum.photos/720/602"
          />
        </div>
      </div>
    </section>
  );
}
