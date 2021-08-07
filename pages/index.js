import SpeakerSearch from '../components/SpeakerSearch'
import { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import * as htmlToImage from 'html-to-image'
import { fontSize, width } from 'tailwindcss/defaultTheme'
import { RadioGroup } from '@headlessui/react'
import RangeSlider from '../components/Slider'
import StyleDetails from '../components/StyleDetails'
import { ImageLayout1 } from '../components/ImageLayout1'
import { ImageLayout2 } from '../components/ImageLayout2'

const download = require('downloadjs')

const backgroundColors = [
  'bg-[#B16AF7]',
  'bg-[#5f7fff]',
  'bg-[#8FD4B7]',
  'bg-[#EE6A65]',
  'bg-[#F5DC66]',
  'bg-[#E47DF8]',
  'bg-gradient-to-br from-pink-500 to-indigo-800',
  'bg-gradient-to-br from-blue-200 to-blue-700',
]

const textColors = ['text-white', 'text-gray-200', 'text-gray-700', 'text-gray-900']
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
    title: 'Freelancer & Business Owner',
  },
  {
    name: 'James Cox',
    username: 'MemRook',
    id: '239982740',
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1402802422637117451/U-fjmCk6_normal.jpg',
    title: 'Software Developer at Webstraunt',
  },
  {
    name: 'Rocco Sangellino',
    username: 'RoccoSangellino',
    id: '1337808128176340992',
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1388602894258114561/LYpjcAVx_normal.jpg',
    title: 'Software Lead at Mondo Robot',
  },
]
const seedUsers7 = [
  {
    username: 'NickOelsner',
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1364044816649121796/uLmGPnwy_normal.jpg',
    id: '1364044326334918656',
    name: 'Nick Oelsner',
  },
  {
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1354163904213966848/4dOl8di8_normal.jpg',
    id: '1354159191296864256',
    name: 'Katherine Peterson',
    username: 'katherinecodes',
  },
  {
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1421305898379608065/0iXfDSGP_normal.jpg',
    username: 'tanoaksam',
    id: '1311650703052476416',
    name: 'Sam Sycamore 🌲 ⛰',
  },
  {
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1412761083849457664/lsGkrZIQ_normal.jpg',
    username: 'edanbenatar',
    id: '1262720796511940609',
    name: 'Edan Ben-Atar 🐒',
  },
  {
    name: '🌲 James Cox 🦔',
    username: 'MemRook',
    id: '239982740',
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1402802422637117451/U-fjmCk6_normal.jpg',
  },
  {
    name: 'Rocco Sangellino',
    username: 'RoccoSangellino',
    id: '1337808128176340992',
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1388602894258114561/LYpjcAVx_normal.jpg',
  },
  {
    username: 'shookcodes',
    name: 'Sarah Shook 🎀💎',
    id: '1212524335174311936',
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1400216053280559104/WvAf6G1M_normal.jpg',
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

const SaveButton = ({ onSaveImage }) => (
  <button
    className="inline-flex items-center justify-center px-6 py-2 mt-8 mb-8 text-sm font-medium text-white border border-transparent rounded-md shadow-sm xl:mr-auto bg-violet-800 hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-800 "
    onClick={onSaveImage}
  >
    Save Image
  </button>
)

export default function Home() {
  const [speakers, setSpeakers] = useState(seedUsers6)
  const [title, setTitle] = useState('')
  const [backgroundColor, setBackgroundColor] = useState(backgroundColors[0])
  const [textColor, setTextColor] = useState(textColors[0])
  const [dateTime, setDateTime] = useState('August 8, 2021 - 8AM PT / 11AM ET')
  const [titleTextSize, setTitleTextSize] = useState(32)
  const [dateTimeTextSize, setDateTimeTextSize] = useState(16)
  const [selected, setSelected] = useState(layouts[0])
  const [scale, setScale] = useState(1)
  const [refAquired, setRefAquired] = useState(false)

  const imageContainer = useRef()
  useEffect(() => {
    setRefAquired(true)
  }, [])

  useEffect(() => {
    setScale(imageContainer.current.offsetWidth / 576)
  }, [refAquired])

  const onSaveImage = () => {
    const imageElement = document.getElementById('promo-image')
    // const scale = 1600 / imageElement.offsetWidth
    const options = { height: 900, width: 1600, style: { transform: `scale(${scale})` } }
    htmlToImage.toPng(imageElement).then(function (dataUrl) {
      download(dataUrl, 'SpacesPromo.png')
    })
  }

  return (
    <div className="h-full pb-8 bg-gray-50 overscroll-none">
      <Head>
        <title>Spaces Promo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full px-4 mx-auto sm:px-6 lg:px-8 xl:flex xl:top-0 xl:w-full overscroll-none">
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
                    <label htmlFor="datetime" className="block text-sm font-medium text-violet-900">
                      Date and Time
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="datetime"
                        id="datetime"
                        placeholder="Enter the date and time as you'd like it to appear"
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
              <div className="flex flex-wrap items-end gap-3 mb-5">
                {backgroundColors.map((color, i) => (
                  <button
                    key={i}
                    className={`w-14 h-8 shadow-md rounded-sm ${color} ${
                      backgroundColor === color ? 'transform scale-[120%]' : ''
                    }`}
                    onClick={() => setBackgroundColor(color)}
                  />
                ))}
              </div>
              <h4 className="block mb-2 text-sm font-medium text-violet-900">Text Color</h4>
              <div className="flex items-end gap-3">
                {textColors.map((color, i) => {
                  const bgColor = color.replace(/text-/g, '')
                  return (
                    <button
                      key={i}
                      className={`w-14 h-8 shadow-md rounded-sm bg-${bgColor} ${
                        textColor === color ? 'transform scale-[120%]' : ''
                      }`}
                      onClick={() => setTextColor(color)}
                    />
                  )
                })}
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
            <div className="sm:order-3 xl:order-2 sm:inline-block">
              <SaveButton onSaveImage={onSaveImage} />
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
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
