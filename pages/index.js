import SpeakerSearch from '../components/SpeakerSearch'
import { useState } from 'react'
import Head from 'next/head'

const backgroundColors = [
  'bg-[#B16AF7]',
  'bg-[#5f7fff]',
  'bg-[#8FD4B7]',
  'bg-[#EE6A65]',
  'bg-[#F5DC66]',
  'bg-[#E47DF8]',
]

export default function Home() {
  const [speakers, setSpeakers] = useState([])
  const [title, setTitle] = useState('')
  const [backgroundColor, setBackgroundColor] = useState(backgroundColors[0])

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
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-50text-sm"
                      />
                    </div>
                  </div>
                  <SpeakerSearch speakers={speakers} setSpeakers={setSpeakers} />
                </div>
                <h4 className="block text-sm font-medium text-gray-700">Background Color</h4>
                {backgroundColors.map((color, i) => (
                  <button key={i} className={`w-[15px] h-[15px] ${color}`} />
                ))}
                <div className={`w-[575px] h-[323.4375px] ${backgroundColor} p-5`}>
                  <h1 className="mb-5 text-xl font-medium text-center text-white">
                    {title || 'Title'}
                  </h1>
                  <ul className="flex flex-wrap justify-center">
                    {speakers.map((speaker) => (
                      <li className="flex flex-col items-center mx-2 mb-2" key={speaker.name}>
                        <img
                          className="w-[4.9rem] h-[4.9rem] mx-auto rounded-full"
                          src={`https://unavatar.io/twitter/${speaker.username}`}
                          alt=""
                        />
                        <h3 className="text-[12px] font-medium text-white">{speaker.name}</h3>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
