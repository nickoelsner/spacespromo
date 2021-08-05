import SpeakerSearch from '../components/SpeakerSearch'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import * as htmlToImage from 'html-to-image'
import { fontSize, width } from 'tailwindcss/defaultTheme'
import RangeSlider from '../components/Slider'
import StyleDetails from '../components/StyleDetails'

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
  'bg-white',
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
    title: '',
  },
  {
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1354163904213966848/4dOl8di8_normal.jpg',
    id: '1354159191296864256',
    name: 'Katherine Peterson',
    username: 'katherinecodes',
    title: '',
  },
  {
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1421305898379608065/0iXfDSGP_normal.jpg',
    username: 'tanoaksam',
    id: '1311650703052476416',
    name: 'Sam Sycamore 🌲 ⛰',
    title: '',
  },
  {
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1412761083849457664/lsGkrZIQ_normal.jpg',
    username: 'edanbenatar',
    id: '1262720796511940609',
    name: 'Edan Ben-Atar 🐒',
    title: '',
  },
  {
    name: '🌲 James Cox 🦔',
    username: 'MemRook',
    id: '239982740',
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1402802422637117451/U-fjmCk6_normal.jpg',
    title: '',
  },
  {
    name: 'Rocco Sangellino',
    username: 'RoccoSangellino',
    id: '1337808128176340992',
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1388602894258114561/LYpjcAVx_normal.jpg',
    title: '',
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

export default function Home() {
  const [speakers, setSpeakers] = useState(seedUsers6)
  const [title, setTitle] = useState('')
  const [backgroundColor, setBackgroundColor] = useState(backgroundColors[0])
  const [textColor, setTextColor] = useState(textColors[0])
  const [dateTime, setDateTime] = useState('')
  const [titleTextSize, setTitleTextSize] = useState(32)
  const [layoutVersion, setLayoutVersion] = useState(1)

  const onSaveImage = () => {
    const imageElement = document.getElementById('promo-image')
    const scale = 1600 / imageElement.offsetWidth
    const options = { height: 900, width: 1600, style: { transform: `scale(${scale})` } }
    htmlToImage.toPng(imageElement).then(function (dataUrl) {
      download(dataUrl, 'SpacesPromo.png')
    })
  }

  const ImagePreview = ({ id }) => (
    <div
      id={id}
      className={`aspect-w-16 aspect-h-9 ${backgroundColor} transform ${textColor} rounded-lg`}
    >
      <div className="flex flex-col items-center justify-around w-full h-full p-3">
        <h1
          className="font-medium leading-none text-center"
          style={{ fontSize: titleTextSize + 'px' }}
        >
          {title || 'Title'}
        </h1>
        {/* <div className="flex-grow" /> */}
        <ul className="flex flex-wrap justify-center gap-2">
          {speakers.map((speaker) => (
            <li
              className="flex flex-col items-center font-bold text-center px-1 min-w-[100px] max-w-[130px]"
              key={speaker.name}
            >
              <img
                className="w-[60px] h-[60px] mx-auto rounded-full"
                src={speaker.profile_image_url.replace(/_normal/g, '')}
                alt=""
              />
              <h3 className={`text-[13px] font-medium ${textColor}`}>{speaker.name}</h3>
              {speaker.title && (
                <h3 className={`text-[10px] font-light ${textColor}`}>{speaker.title}</h3>
              )}
            </li>
          ))}
        </ul>
        <p className="font-bold text-center">{dateTime}</p>
      </div>
    </div>
  )
  const ImagePreview2 = ({ id }) => (
    <div
      id={id}
      className={`aspect-w-16 aspect-h-9 ${backgroundColor} transform ${textColor} rounded-lg`}
    >
      <div className="flex items-center justify-around w-full h-full">
        <div className="flex flex-col justify-around w-1/3 h-full p-4 item-center">
          <h1
            className="font-medium leading-none text-center"
            style={{ fontSize: titleTextSize + 'px' }}
          >
            {title || 'Title'}
          </h1>
          <p className="font-bold text-center">{dateTime}</p>
        </div>
        <ul className="flex flex-wrap justify-between w-2/3 h-full pr-4 items-around">
          {speakers.map((speaker) => (
            <li
              className="flex flex-col items-center justify-center font-bold text-center min-w-[100px] max-w-[123px]"
              key={speaker.name}
            >
              <img
                className="w-[5rem] h-[5rem] mx-auto rounded-full"
                src={speaker.profile_image_url.replace(/_normal/g, '')}
                alt=""
              />
              <h3 className={`text-[13px] font-medium ${textColor}`}>{speaker.name}</h3>
              {speaker.title && (
                <h3 className={`text-[10px] font-light ${textColor}`}>{speaker.title}</h3>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div className="bg-gray-50">
      <Head>
        <title>Spaces Promo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
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
                    <div className="">
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
                            min={20}
                            max={64}
                            step={4}
                            defaultValue={32}
                            label="title-text-size"
                            unit="px"
                          />
                        </div>
                      </StyleDetails>
                    </div>
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
                  </div>
                  <SpeakerSearch speakers={speakers} setSpeakers={setSpeakers} />
                </div>
                <h4 className="block mb-2 text-sm font-medium text-violet-900">Background Color</h4>
                <div className="flex items-end gap-3 mb-5">
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
                <div className="flex items-center pt-12 mb-4">
                  <h3 className="mr-4 text-lg font-medium leading-6 text-violet-900">
                    Image Preview
                  </h3>
                  <span className="relative z-0 inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      onClick={() => setLayoutVersion(1)}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${
                        layoutVersion === 1 ? 'bg-violet-200' : ''
                      }`}
                    >
                      Layout 1
                    </button>
                    <button
                      type="button"
                      onClick={() => setLayoutVersion(2)}
                      className={`relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${
                        layoutVersion === 2 ? 'bg-violet-200' : ''
                      }`}
                    >
                      Layout 2
                    </button>
                  </span>
                </div>
                <ImagePreview2 id="promo-image" />
                <br />
                <ImagePreview id="promo-ima" />
                <button
                  className="inline-flex items-center justify-center px-6 py-2 mt-8 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-violet-800 hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-800"
                  onClick={onSaveImage}
                >
                  Save Image
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
