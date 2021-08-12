import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/Link'
import { ArrowRightIcon } from '@heroicons/react/solid'

const speakers = [
  {
    username: 'NickOelsner',
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1364044816649121796/uLmGPnwy_normal.jpg',
    id: '1364044326334918656',
    name: 'Nick Oelsner',
    title: 'Frontend Developer/ Freelancer',
  },
  {
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1354163904213966848/4dOl8di8_normal.jpg',
    id: '1354159191296864256',
    name: 'Katherine Peterson',
    username: 'katherinecodes',
    title: 'Software Engineer at Github',
  },
  {
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1421305898379608065/0iXfDSGP_normal.jpg',
    username: 'tanoaksam',
    id: '1311650703052476416',
    name: 'Sam Sycamore',
    title: 'Content & Marketing at Hashnode',
  },
  {
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1412761083849457664/lsGkrZIQ_normal.jpg',
    username: 'edanbenatar',
    id: '1262720796511940609',
    name: 'Edan Ben-Atar',
    title: 'Founder of Weblime',
  },
  {
    name: 'Rocco Sangellino',
    username: 'RoccoSangellino',
    id: '1337808128176340992',
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1388602894258114561/LYpjcAVx_normal.jpg',
    title: 'Software Lead at Mondo Robot',
  },
  {
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1400216053280559104/WvAf6G1M_normal.jpg',
    username: 'shookcodes',
    id: '1212524335174311936',
    name: 'Sarah Shook',
    title: 'Freelance Developer',
  },
]

const speakers1A = [
  {
    username: 'NickOelsner',
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1364044816649121796/uLmGPnwy_normal.jpg',
    id: '1364044326334918656',
    name: 'Nick Oelsner',
    title: 'Frontend Developer/ Freelancer',
  },
  {
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1421305898379608065/0iXfDSGP_normal.jpg',
    username: 'tanoaksam',
    id: '1311650703052476416',
    name: 'Sam Sycamore',
    title: 'Content & Marketing at Hashnode',
  },
  {
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1412761083849457664/lsGkrZIQ_normal.jpg',
    username: 'edanbenatar',
    id: '1262720796511940609',
    name: 'Edan Ben-Atar',
    title: 'Founder of Weblime',
  },
]
const speakers1B = [
  {
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1354163904213966848/4dOl8di8_normal.jpg',
    id: '1354159191296864256',
    name: 'Katherine Peterson',
    username: 'katherinecodes',
    title: 'Software Engineer at Github',
  },
  {
    name: 'Rocco Sangellino',
    username: 'RoccoSangellino',
    id: '1337808128176340992',
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1388602894258114561/LYpjcAVx_normal.jpg',
    title: 'Software Lead at Mondo Robot',
  },
  {
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1400216053280559104/WvAf6G1M_normal.jpg',
    username: 'shookcodes',
    id: '1212524335174311936',
    name: 'Sarah Shook',
    title: 'Freelance Developer',
  },
]

const SpeakerComponent = ({ speaker }) => (
  <li
    className="flex flex-col items-center justify-start font-bold text-center w-[33%] max-h-[167px] overflow-hidden"
    key={speaker.id}
  >
    <img
      className="w-[5rem] h-[5rem] mx-auto rounded-full"
      src={speaker.profile_image_url.replace(/_normal/g, '')}
      alt=""
    />
    {speaker.name && <h3 className="text-[13px] font-medium w-full">{speaker.name}</h3>}
    {speaker.title && <h3 className="text-[10px] font-light w-full">{speaker.title}</h3>}
  </li>
)

const ImageLayout2 = ({ scale }) => {
  return (
    <div
      className="w-[576px] h-[324px] bg-gradient-to-br from-blue-300 to-blue-700 transform text-white rounded-lg shadow-md"
      style={{
        transform: 'scale(' + scale + ')',
        transformOrigin: '0 0 0',
      }}
    >
      <div className="flex items-center justify-around w-full h-full">
        <div className="flex flex-col items-center justify-around w-1/3 h-full p-4 pr-2">
          <h1 className="font-medium leading-none text-center text-[28px]">
            Building Cool Projects with Cool People
          </h1>
          <p className="font-bold text-center text-[16px]">All day every day</p>
        </div>
        <ul className="flex flex-wrap justify-center w-2/3 pr-4 gap-y-4 items-around">
          {speakers.map((speaker) => (
            <SpeakerComponent key={speaker.id} speaker={speaker} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Home() {
  // const [scale, setScale] = useState(1)
  // const [refAquired, setRefAquired] = useState(false)

  // const imageContainer = useRef()

  // useEffect(() => {
  //   setRefAquired(true)
  // }, [])

  // useEffect(() => {
  //   setScale(imageContainer.current.offsetWidth / 576)
  // }, [refAquired])

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
          <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
            <div className="flex flex-col w-full mb-10 text-left lg:text-center">
              <h1 className="mb-6 text-4xl font-black leading-tight text-gray-800 md:leading-tight lg:leading-tight md:text-5xl lg:text-7xl">
                Images for Twitter Spaces
                <br className="block" />
                In 5 minutes.
              </h1>
              <p className="mx-auto text-lg leading-snug text-gray-700 lg:w-1/2">
                Generate an image to promote a Twitter Space. Enter the information about the Space
                and the speakers' Twitter handles and use the generated image to Tweet about the
                event.
              </p>
            </div>
            <div className="flex flex-col mb-10 justify-left lg:justify-center md:flex-row">
              <div className="inline-flex items-center justify-center text-lg font-normal text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ">
                <a href="/image-creator" className="flex items-center w-full h-full px-6 py-3">
                  <span>Let's do it!</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container flex flex-col items-center justify-center px-10 py-10 mx-auto mb-10 rounded-lg lg:px-40 lg:-mt-28">
            <img
              id="hero-image"
              className="object-cover object-center w-full rounded-xl"
              alt="hero"
              src="/example.png"
            />
            {/* <div ref={imageContainer} className="w-full max-w-4xl">
              <div style={{ marginBottom: `${scale * 324 - 324}px` }}>
                <ImageLayout2 scale={scale} />
              </div>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  )
}
