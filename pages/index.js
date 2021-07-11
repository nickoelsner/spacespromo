import SpeakerSearch from '../components/SpeakerSearch'
import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [speakers, setSpeakers] = useState([])

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
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-50text-sm"
                      />
                    </div>
                  </div>
                  <SpeakerSearch speakers={speakers} setSpeakers={setSpeakers} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
