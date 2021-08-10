import SpeakerSearch from '../components/SpeakerSearch'
import { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import * as htmlToImage from 'html-to-image'
import { RadioGroup } from '@headlessui/react'
import RangeSlider from '../components/Slider'
import StyleDetails from '../components/StyleDetails'
import { ImageLayout1 } from '../components/ImageLayout1'
import { ImageLayout2 } from '../components/ImageLayout2'

const download = require('downloadjs')

const backgroundColors = [
  'bg-gradient-to-br from-pink-500 to-indigo-800',
  'bg-gradient-to-br from-blue-200 to-blue-700',
  'bg-gradient-to-br from-orange-200 to-blue-200',
  'bg-gradient-to-br from-teal-500 to-blue-400',
  'bg-gradient-to-br from-yellow-100 to-lime-200',
  'bg-gradient-to-br from-violet-300 to-blue-100',
  'bg-gradient-to-br from-orange-400 to-red-600',
]

const textColors = ['#FFFFFF', '#E4E4E7', '#3F3F46', '#18181B']
// needed so that Tailwind JIT engine "sees" these classes and adds them to the tailwind.css file
const textBgColors = ['bg-white', 'bg-gray-200', 'bg-gray-700', 'bg-gray-900']

const seedUsers6 = [
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

const layouts = [
  {
    name: 'Layout 1',
    description: 'Maximum 8 Speakers',
  },
  {
    name: 'Layout 2',
    description: 'Maximum 6 Speakers',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [speakers, setSpeakers] = useState([])
  const [title, setTitle] = useState('')
  const [backgroundColor, setBackgroundColor] = useState(backgroundColors[0])
  const [textColor, setTextColor] = useState(textColors[0])
  const [dateTime, setDateTime] = useState('')
  const [titleTextSize, setTitleTextSize] = useState(32)
  const [dateTimeTextSize, setDateTimeTextSize] = useState(16)
  const [selected, setSelected] = useState(layouts[0])
  const [scale, setScale] = useState(1)
  const [refAquired, setRefAquired] = useState(false)
  const [bgColorPicker, setBgColorPicker] = useState('#ffffff')
  const [textColorPicker, setTextColorPicker] = useState('#000')
  console.log('textColor :>> ', textColor)

  const tweetText = `Join us ${dateTime} for a Twitter Space:%0D%0A${title}`

  const imageContainer = useRef()
  useEffect(() => {
    setRefAquired(true)
  }, [])

  useEffect(() => {
    setScale(imageContainer.current.offsetWidth / 576)
  }, [refAquired])

  useEffect(() => {
    setBackgroundColor(`bg-[${bgColorPicker}]`)
  }, [bgColorPicker])

  useEffect(() => {
    setTextColor(textColorPicker)
  }, [textColorPicker])

  useEffect(() => {
    setBackgroundColor(backgroundColors[0])
    setTextColor(textColors[0])
  }, [])

  const onSaveImage = () => {
    const imageElement = document.getElementById('promo-image')
    // const scale = 1600 / imageElement.offsetWidth
    const options = { height: 900, width: 1600, style: { transform: `scale(${scale})` } }
    htmlToImage.toPng(imageElement).then(function (dataUrl) {
      download(dataUrl, 'SpacesPromo.png')
    })
  }

  return (
    <div>
      <Head>
        <title>SpacesPromo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/Montserrat-Regular.ttf" as="font" crossOrigin="" />
        <script
          defer
          data-domain="spacespromo.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <div className="h-full pb-12 overscroll-none" style={{ minHeight: '100vh' }}>
        <header className="flex items-center justify-center w-full py-4">
          <div className="flex text-3xl">
            <span id="header">SpacesPromo</span>
            <svg
              className="w-8 h-8 ml-2"
              fill="url(#grad1)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#d946ef', stopOpacity: '1' }} />
                  <stop offset="100%" style={{ stopColor: '#5B21B6', stopOpacity: '1' }} />
                </linearGradient>
              </defs>
              <path d="M12.61,43.55l11.6,4.81a67,67,0,0,0-3.12,10.17l-.44,2L37.28,77.17l2-.43a67,67,0,0,0,10.17-3.12l4.81,11.6a.75.75,0,0,0,1.23.24l7.27-7.27a12,12,0,0,0,3.5-9.09L66,64.43C79.46,54.49,93.08,37.06,96.79,6.64A5,5,0,0,0,91.18,1C60.77,4.74,43.33,18.37,33.39,31.79l-4.66-.24A12,12,0,0,0,19.64,35l-7.27,7.27A.75.75,0,0,0,12.61,43.55ZM59.25,25.83a9,9,0,1,1,0,12.75A9,9,0,0,1,59.25,25.83ZM10.44,78.5a11.81,11.81,0,0,0-6-.48,1.08,1.08,0,0,1-1-.3,1.09,1.09,0,0,1-.22-1.23C5.35,71.91,11,62.7,21.23,70.14a.51.51,0,0,1,0,.76A11.11,11.11,0,0,0,17,80a.81.81,0,0,0,.78.78,11.1,11.1,0,0,0,9.1-4.14.51.51,0,0,1,.79,0c1.42,1.69,5.33,7.21,1,12.54a11.25,11.25,0,0,1-7.54,4C16.93,93.63,9.17,95,6,98.62a1.09,1.09,0,0,1-1.88-.4C3,94.4,1.26,85.86,10.44,78.5Z"></path>
            </svg>
          </div>
        </header>
        <main className="h-full px-4 mx-auto sm:px-6 lg:px-8 xl:flex xl:top-0 xl:w-full overscroll-none max-w-screen-2xl">
          <div className="max-w-xl mx-auto xl:w-1/2">
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="space-y-8 divide-y divide-gray-200">
                <div className="pt-8">
                  <h3 className="text-xl font-medium leading-6 text-violet-900">
                    Twitter Space Details
                  </h3>
                  <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label htmlFor="title" className="block text-sm font-medium text-violet-900">
                        Title
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="title"
                          id="title"
                          placeholder="Title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="block w-full text-sm border-gray-300 rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-50"
                        />
                      </div>
                      <StyleDetails>
                        <div className="text-violet-900">
                          <label
                            htmlFor="title-text-size"
                            className="block text-sm font-medium text-violet-900"
                          >
                            Text Size
                          </label>
                          <RangeSlider
                            setStateValue={setTitleTextSize}
                            min={8}
                            max={56}
                            step={1}
                            defaultValue={32}
                            label="title-text-size"
                            unit="px"
                          />
                        </div>
                      </StyleDetails>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="datetime"
                        className="block text-sm font-medium text-violet-900"
                      >
                        Date and Time
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="datetime"
                          id="datetime"
                          placeholder="Date and time as you'd like it to appear"
                          value={dateTime}
                          onChange={(e) => setDateTime(e.target.value)}
                          className="block w-full text-sm border-gray-300 rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-50"
                        />
                      </div>
                      <StyleDetails>
                        <div className="text-violet-900">
                          <label
                            htmlFor="date-time-text-size"
                            className="block text-sm font-medium text-violet-900"
                          >
                            Text Size
                          </label>
                          <RangeSlider
                            setStateValue={setDateTimeTextSize}
                            min={8}
                            max={24}
                            step={1}
                            defaultValue={16}
                            label="date-time-text-size"
                            unit="px"
                          />
                        </div>
                      </StyleDetails>
                    </div>
                    <SpeakerSearch speakers={speakers} setSpeakers={setSpeakers} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full max-w-xl mx-auto xl:w-1/2 xl:sticky xl:top-0">
            <div className="w-full sm:flex sm:flex-col">
              <div className="xl:order-3">
                <h4 className="block mb-2 text-sm font-medium text-violet-900">Background Color</h4>
                <div className="flex flex-wrap items-end gap-3 pb-2 mb-5">
                  {backgroundColors.map((color, i) => (
                    <button
                      key={i}
                      className={`w-14 h-8 shadow-md rounded-sm ${color} ${
                        backgroundColor === color ? 'transform scale-[120%]' : ''
                      }`}
                      onClick={() => setBackgroundColor(color)}
                    />
                  ))}

                  <button
                    className={`relative h-8 text-xs leading-tight text-center rounded-sm shadow-md cursor-pointer w-14 text-violet-900 ${
                      backgroundColor === `bg-[${bgColorPicker}]` ? 'transform scale-[120%]' : ''
                    }`}
                    style={{ backgroundColor: bgColorPicker }}
                  >
                    <input
                      type="color"
                      className="h-8 p-0 border-transparent rounded-sm shadow-md cursor-pointer w-14"
                      value={bgColorPicker}
                      onChange={(e) => setBgColorPicker(e.target.value)}
                    />
                    <span className="absolute left-0 w-full text-center -bottom-4">Custom</span>
                  </button>
                </div>
                <h4 className="block mb-2 text-sm font-medium text-violet-900">Text Color</h4>
                <div className="flex flex-wrap items-end gap-3 pb-2 mb-5">
                  {textColors.map((color, i) => (
                    <button
                      key={i}
                      className={`w-14 h-8 shadow-md rounded-sm ${
                        textColor === color ? 'transform scale-[120%]' : ''
                      }`}
                      onClick={() => setTextColor(color)}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                  <button
                    className={`relative h-8 text-xs leading-tight text-center rounded-sm shadow-md cursor-pointer w-14 text-violet-900 ${
                      textColor === `text-[${textColorPicker}]` ? 'transform scale-[120%]' : ''
                    }`}
                    style={{ backgroundColor: textColorPicker }}
                  >
                    <input
                      type="color"
                      className="h-8 p-0 border-transparent rounded-sm shadow-md cursor-pointer w-14"
                      value={textColorPicker}
                      onChange={(e) => setTextColorPicker(e.target.value)}
                    />
                    <span className="absolute left-0 w-full text-center -bottom-4">Custom</span>
                  </button>
                </div>
                <div className="pt-4">
                  <h4 className="block mb-2 text-sm font-medium text-violet-900">Layout</h4>
                  <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only">Layout</RadioGroup.Label>
                    <div className="-space-y-px bg-white rounded-md">
                      {layouts.map((layout, layoutIdx) => (
                        <RadioGroup.Option
                          key={layout.name}
                          value={layout}
                          className={({ checked }) =>
                            classNames(
                              layoutIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                              layoutIdx === layouts.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                              checked ? 'bg-violet-50 border-violet-200 z-10' : 'border-gray-200',
                              'relative border p-3 flex cursor-pointer focus:outline-none'
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <span
                                className={classNames(
                                  checked
                                    ? 'bg-violet-600 border-transparent'
                                    : 'bg-white border-gray-300',
                                  active ? 'ring-2 ring-offset-2 ring-violet-500' : '',
                                  'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                                )}
                                aria-hidden="true"
                              >
                                <span className="rounded-full bg-white w-1.5 h-1.5" />
                              </span>
                              <div className="flex flex-row gap-3 ml-3">
                                <RadioGroup.Label
                                  as="span"
                                  className={classNames(
                                    checked ? 'text-violet-900' : 'text-gray-900',
                                    'block text-sm font-medium'
                                  )}
                                >
                                  {layout.name}
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="span"
                                  className={classNames(
                                    checked ? 'text-violet-700' : 'text-gray-500',
                                    'block text-sm'
                                  )}
                                >
                                  {layout.description}
                                </RadioGroup.Description>
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="flex flex-row space-x-4 sm:order-3 xl:order-2">
                <button
                  className="inline-flex items-center justify-center px-4 py-2 mt-8 mb-8 text-sm font-medium text-white border border-transparent rounded-md shadow-sm sm:px-6 bg-violet-800 hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-800 "
                  onClick={onSaveImage}
                >
                  Save Image
                </button>
                <a
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2 mt-8 mb-8 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-[#49A1EB] hover:bg-[#198ae6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#49A1EB] "
                  href={`https://twitter.com/intent/tweet?text=${tweetText}`}
                  target="_blank"
                >
                  Compose Tweet
                </a>
              </div>
              <div>
                <div className="flex items-center mb-4 sm:pt-8">
                  <h3 className="mr-4 text-xl font-medium leading-6 text-violet-900">
                    Image Preview
                  </h3>
                </div>

                <div ref={imageContainer} id="imageContainer" className="w-full"></div>
                {selected.name === 'Layout 1' && (
                  <ImageLayout1
                    id="promo-image"
                    idx={speakers.length}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    titleTextSize={titleTextSize}
                    title={title}
                    speakers={speakers}
                    dateTime={dateTime}
                    dateTimeTextSize={dateTimeTextSize}
                    scale={scale}
                    bgColorPicker={bgColorPicker}
                    textColorPicker={textColorPicker}
                  />
                )}
                {selected.name === 'Layout 2' && (
                  <ImageLayout2
                    id="promo-image"
                    idx={speakers.length}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    titleTextSize={titleTextSize}
                    title={title}
                    speakers={speakers}
                    dateTime={dateTime}
                    dateTimeTextSize={dateTimeTextSize}
                    scale={scale}
                    bgColorPicker={bgColorPicker}
                    textColorPicker={textColorPicker}
                  />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="flex items-center justify-center h-8 -mt-8 text-gray-500">
        Made with <span className="mx-2">❤️</span> and <span className="mx-2">☕️</span> by
        <a className="ml-1 text-opacity-70 text-violet-900" href="https://twitter.com/NickOelsner">
          Nick Oelsner
        </a>
      </footer>
    </div>
  )
}
