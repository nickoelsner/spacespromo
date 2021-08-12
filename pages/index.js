import Head from 'next/head'
import { ArrowRightIcon } from '@heroicons/react/solid'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SpacesPromo</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          data-domain="spacespromo.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <header className="flex items-center justify-start w-full px-8 py-4 mx-auto">
        <a className="flex items-center text-2xl text-primary" href="/">
          <span className="font-bold">SpacesPromo</span>
          <svg
            className="w-6 h-6 ml-2"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path d="M12.61,43.55l11.6,4.81a67,67,0,0,0-3.12,10.17l-.44,2L37.28,77.17l2-.43a67,67,0,0,0,10.17-3.12l4.81,11.6a.75.75,0,0,0,1.23.24l7.27-7.27a12,12,0,0,0,3.5-9.09L66,64.43C79.46,54.49,93.08,37.06,96.79,6.64A5,5,0,0,0,91.18,1C60.77,4.74,43.33,18.37,33.39,31.79l-4.66-.24A12,12,0,0,0,19.64,35l-7.27,7.27A.75.75,0,0,0,12.61,43.55ZM59.25,25.83a9,9,0,1,1,0,12.75A9,9,0,0,1,59.25,25.83ZM10.44,78.5a11.81,11.81,0,0,0-6-.48,1.08,1.08,0,0,1-1-.3,1.09,1.09,0,0,1-.22-1.23C5.35,71.91,11,62.7,21.23,70.14a.51.51,0,0,1,0,.76A11.11,11.11,0,0,0,17,80a.81.81,0,0,0,.78.78,11.1,11.1,0,0,0,9.1-4.14.51.51,0,0,1,.79,0c1.42,1.69,5.33,7.21,1,12.54a11.25,11.25,0,0,1-7.54,4C16.93,93.63,9.17,95,6,98.62a1.09,1.09,0,0,1-1.88-.4C3,94.4,1.26,85.86,10.44,78.5Z"></path>
          </svg>
        </a>
      </header>
      <main>
        <section className="text-gray-800 body-font lg:pt-16">
          <div className="container px-5 pt-6 mx-auto md:pt-32 lg:px-4 lg:py-4">
            <div className="flex flex-col w-full mb-10 text-left lg:text-center">
              <h1 className="mb-6 text-4xl font-black leading-tight text-gray-800 md:leading-tight lg:leading-tight md:text-5xl lg:text-7xl">
                Images for Twitter Spaces
                <br className="block" />
                In 5 minutes.
              </h1>
              <p className="mx-auto text-lg leading-snug text-gray-700 lg:w-1/2">
                Generate an image to promote a Twitter Space. Enter information about the Space and
                the speakers' Twitter handles and use the generated image to Tweet about the event.
              </p>
            </div>
            <div className="flex flex-col justify-center mb-10 sm:flex-row">
              <div className="inline-flex items-center justify-center text-lg font-normal text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ">
                <a
                  href="/image-creator"
                  className="flex items-center justify-center w-full h-full px-6 py-3"
                >
                  <span>Let's do it!</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container flex flex-col items-center justify-center px-5 mx-auto mb-10 rounded-lg md:px-10 lg:px-40 ">
            <img
              id="hero-image"
              className="object-cover object-center w-full rounded-xl"
              alt="hero"
              src="/example.png"
            />
          </div>
        </section>
      </main>
    </div>
  )
}
