import SpeakerSearch from '../components/SpeakerSearch'
import { useState } from 'react'
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
  const [speakers, setSpeakers] = useState([])
  const [title, setTitle] = useState('')
  const [backgroundColor, setBackgroundColor] = useState(backgroundColors[0])
  const [textColor, setTextColor] = useState(textColors[0])
  const [dateTime, setDateTime] = useState('')
  const [titleTextSize, setTitleTextSize] = useState(32)

  const onSaveImage = () => {
    const style = { width: '1150px', height: '646.875px' }
    const height = '646.875px'
    const width = '1150px'
    htmlToImage.toPng(document.getElementById('promo-image')).then(function (dataUrl) {
      download(dataUrl, 'SpacesPromo.png')
    })
  }

  const ImagePreview = ({ id }) => (
    <div
      id={id}
      className={`w-[575px] h-[323.4375px] ${backgroundColor} flex flex-col justify-between items-center p-5 mb-10`}
    >
      <h1
        className={`mb-5 font-medium text-center leading-none ${textColor}`}
        style={{ fontSize: titleTextSize + 'px' }}
      >
        {title || 'Title'}
      </h1>
      <div className="flex-grow" />
      <ul className="flex flex-wrap justify-center">
        {speakers.map((speaker) => (
          <li className="flex flex-col items-center mx-2 mb-3" key={speaker.name}>
            <img
              className="w-[4.9rem] h-[4.9rem] mx-auto rounded-full"
              src={speaker.profile_image_url.replace(/_normal/g, '')}
              alt=""
            />
            <h3 className={`text-[12px] font-medium ${textColor}`}>{speaker.name}</h3>
          </li>
        ))}
      </ul>
      <div className="flex-grow" />
      <div className="flex-grow" />
      <p className={`text-center ${textColor}`}>{dateTime}</p>
    </div>
  )

  return (
    <div className="h-screen bg-gray-50">
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
                <h3 className="pt-12 mb-4 text-lg font-medium leading-6 text-violet-900">
                  Image Preview
                </h3>
                <ImagePreview id="promo-image" />
                <button onClick={onSaveImage}>Save Image</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
