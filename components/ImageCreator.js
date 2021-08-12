import { useEffect, useState, useRef } from 'react'
import * as htmlToImage from 'html-to-image'
import { ImageLayout1 } from './ImageLayout1'
import { ImageLayout2 } from './ImageLayout2'
import SpaceDetails from './SpaceDetails'
import LayoutPicker from './LayoutPicker'
import ColorPickers from './ColorPickers'
import useStickyState from '../hooks/useStickyState'

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

const layouts = [
  {
    name: 'Layout 1',
    description: 'Maximum 8 Speakers',
    max: 8,
  },
  {
    name: 'Layout 2',
    description: 'Maximum 6 Speakers',
    max: 6,
  },
]

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

export default function ImageCreator() {
  const [speakers, setSpeakers] = useStickyState([], 'speakers')
  const [title, setTitle] = useStickyState('', 'title')
  const [dateTime, setDateTime] = useStickyState('', 'dateTime')
  const [backgroundColor, setBackgroundColor] = useStickyState(
    backgroundColors[0],
    'backgroundColor'
  )
  const [textColor, setTextColor] = useStickyState(textColors[0], 'textColor')
  const [titleTextSize, setTitleTextSize] = useStickyState(32, 'titleTextSize')
  const [dateTimeTextSize, setDateTimeTextSize] = useStickyState(16, 'dateTimeTextSize')
  const [selected, setSelected] = useStickyState(layouts[0], 'selectedLayout')
  const [bgColorPicker, setBgColorPicker] = useStickyState('#ffffff', 'bgColorPicker')
  const [textColorPicker, setTextColorPicker] = useStickyState('#000000', 'textColorPicker')
  const [scale, setScale] = useState(1)
  const [refAquired, setRefAquired] = useState(false)
  const [numSpeakersError, setNumSpeakersError] = useState(false)

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
    const storedBackgroundColor = window.localStorage.getItem('backgroundColor')
    const storedTextColor = window.localStorage.getItem('textColor')
    setBackgroundColor(
      storedBackgroundColor !== null ? JSON.parse(storedBackgroundColor) : backgroundColors[0]
    )
    setTextColor(storedTextColor !== null ? JSON.parse(storedTextColor) : textColors[0])
  }, [])

  useEffect(() => {
    if (speakers.length > selected.max) {
      setNumSpeakersError(true)
    } else {
      setNumSpeakersError(false)
    }
  }, [selected, speakers])

  const margbot = scale * 324 - 324

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
      <div className="h-full pb-12 overscroll-none" style={{ minHeight: '100vh' }}>
        <header className="flex items-center justify-start w-full max-w-xl px-4 py-4 mx-auto sm:px-0 xl:max-w-screen-2xl xl:px-20">
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
        <main className="h-full px-4 mx-auto sm:px-6 lg:px-8 xl:flex xl:top-0 xl:w-full overscroll-none max-w-screen-2xl">
          <div className="max-w-xl mx-auto xl:w-1/3 xl:mx-12">
            <SpaceDetails
              title={title}
              setTitle={setTitle}
              setTitleTextSize={setTitleTextSize}
              dateTime={dateTime}
              setDateTime={setDateTime}
              setDateTimeTextSize={setDateTimeTextSize}
              speakers={speakers}
              setSpeakers={setSpeakers}
              numSpeakersError={numSpeakersError}
            />
            <div className="xl:order-3">
              <LayoutPicker selected={selected} setSelected={setSelected} layouts={layouts} />
              <ColorPickers
                backgroundColors={backgroundColors}
                backgroundColor={backgroundColor}
                setBackgroundColor={setBackgroundColor}
                bgColorPicker={bgColorPicker}
                setBgColorPicker={setBgColorPicker}
                textColors={textColors}
                textColor={textColor}
                setTextColor={setTextColor}
                textColorPicker={textColorPicker}
                setTextColorPicker={setTextColorPicker}
              />
            </div>
          </div>
          <div className="h-full max-w-xl mx-auto xl:max-w-4xl xl:w-2/3 xl:sticky xl:top-0">
            <div className="w-full sm:flex sm:flex-col">
              <div className="pt-8">
                {/* <div className="flex items-center mb-4 sm:pt-8">
                  <h3 className="mr-4 text-xl font-medium leading-6 text-primary-text">
                    Image Preview
                  </h3>
                </div> */}

                <div ref={imageContainer} id="imageContainer" className="w-full"></div>
                <div style={{ marginBottom: `${margbot}px` }}>
                  {selected.name === 'Layout 1' && (
                    <ImageLayout1
                      id="promo-image"
                      idx={speakers.length}
                      backgroundColor={backgroundColor}
                      textColor={textColor}
                      titleTextSize={titleTextSize}
                      title={title}
                      speakers={speakers.slice(0, 8)}
                      dateTime={dateTime}
                      dateTimeTextSize={dateTimeTextSize}
                      scale={scale}
                      bgColorPicker={bgColorPicker}
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
                      speakers={speakers.slice(0, 6)}
                      dateTime={dateTime}
                      dateTimeTextSize={dateTimeTextSize}
                      scale={scale}
                      bgColorPicker={bgColorPicker}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <button
                  className="inline-flex items-center justify-center px-4 py-2 mt-8 mb-8 text-sm font-bold text-white border border-transparent rounded-md shadow-sm sm:px-6 bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary "
                  onClick={onSaveImage}
                >
                  Save Image
                </button>
                <a
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2 mt-8 mb-8 text-sm font-bold text-white border border-transparent rounded-md shadow-sm bg-[#49A1EB] hover:bg-[#198ae6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#49A1EB] "
                  href={`https://twitter.com/intent/tweet?text=${tweetText}`}
                  target="_blank"
                >
                  Compose Tweet
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="flex items-center justify-center h-8 -mt-8 text-gray-500">
        Made with <span className="mx-2">❤️</span> and <span className="mx-2">☕️</span> by
        <a
          className="ml-1 text-opacity-70 text-primary-text"
          href="https://twitter.com/NickOelsner"
        >
          Nick Oelsner
        </a>
      </footer>
    </div>
  )
}
