import SpeakerSearch from '../components/SpeakerSearch'
import { useState } from 'react'
import Head from 'next/head'
import * as htmlToImage from 'html-to-image'
import { width } from 'tailwindcss/defaultTheme'
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
  'bg-gradient-to-br from-teal-100 to-teal-400',
]

const textColors = ['text-white', 'text-gray-200', 'text-gray-700', 'text-gray-900']

export default function Home() {
  const [speakers, setSpeakers] = useState([])
  const [title, setTitle] = useState('')
  const [backgroundColor, setBackgroundColor] = useState(backgroundColors[0])
  const [textColor, setTextColor] = useState(textColors[0])
  const [dateTime, setDateTime] = useState('')

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
      <h1 className={`mb-5 text-xl font-medium text-center ${textColor}`}>{title || 'Title'}</h1>
      <div className="flex-grow" />
      <ul className="flex flex-wrap justify-center">
        {speakers.map((speaker) => (
          <li className="flex flex-col items-center mx-2 mb-3" key={speaker.name}>
            <img
              className="w-[4.9rem] h-[4.9rem] mx-auto rounded-full"
              src={`https://unavatar.io/twitter/${speaker.username}`}
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
    <div>
      <Head>
        <title>Spaces Promo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="pt-8">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Twitter Space Details
                </h3>
                <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="col-span-full">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block w-full text-sm border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-50"
                      />
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="datetime" className="block text-sm font-medium text-gray-700">
                      Date and Time
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Enter the date and time as you'd like it to appear"
                        value={dateTime}
                        onChange={(e) => setDateTime(e.target.value)}
                        className="block w-full text-sm border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-50"
                      />
                    </div>
                  </div>
                  <SpeakerSearch speakers={speakers} setSpeakers={setSpeakers} />
                </div>
                <h4 className="block mb-1 text-sm font-medium text-gray-700">Background Color</h4>
                {backgroundColors.map((color, i) => (
                  <button
                    key={i}
                    className={`w-14 h-8 mr-2 shadow-md ${color} ${
                      backgroundColor === color ? 'w-14 h-6' : ''
                    }`}
                    onClick={() => setBackgroundColor(color)}
                  />
                ))}
                <h4 className="block mb-1 text-sm font-medium text-gray-700">Text Color</h4>
                {textColors.map((color, i) => {
                  const bgColor = color.replace(/text-/g, '')
                  console.log('typeOf(bgColor) :>> ', typeof bgColor)
                  console.log('color :>> ', color)
                  console.log('bgColor :>> ', bgColor)
                  return (
                    <button
                      key={i}
                      className={`w-14 h-8 mr-2 shadow-md bg-${bgColor} ${
                        textColor === color ? 'w-14 h-6' : ''
                      }`}
                      onClick={() => setTextColor(color)}
                    />
                  )
                })}
                <h3 className="pt-8 mb-4 text-lg font-medium leading-6 text-gray-900">
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
