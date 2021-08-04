import axios from 'axios'
import { useState } from 'react'

const SpeakerSearch = ({ speakers, setSpeakers }) => {
  const [handle, setHandle] = useState('')

  const onHandleChange = (e) => {
    setHandle(e.target.value)
  }

  const onTwitterHandleSearch = (e) => {
    e.preventDefault()
    axios
      .get(`/api/twitter_users?handle=${handle}`)
      .then((res) => {
        const user = res.data
        console.log('res.data :>> ', res.data)
        setSpeakers((prev) => [...prev, user])
        setHandle('')
      })
      .catch((err) => console.log(err))
  }

  const deleteSpeaker = (speakerId) => {
    setSpeakers((prev) => prev.filter(({ id }) => id !== speakerId))
  }

  return (
    <>
      <div className="col-span-full">
        <label htmlFor="speakers" className="block text-sm font-medium text-violet-900">
          Speakers
        </label>
        <form onSubmit={onTwitterHandleSearch} className="flex mt-1">
          <div className="relative block w-full rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500 sm:text-sm focus:text-gray-800">@</span>
            </div>
            <input
              type="text"
              name="speaker"
              id="speaker"
              className="block w-full pl-6 text-sm border-gray-300 rounded-md focus:ring-violet-500 focus:border-violet-50"
              placeholder=" Enter a Twitter handle to add a speaker"
              value={handle}
              onChange={onHandleChange}
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-2 ml-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-violet-800 hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-800"
          >
            Add
          </button>
        </form>
      </div>
      <div className="mb-4 col-span-full">
        <ul className="list-reset list-unstyled list-inline list-inline-icon-left">
          {speakers.map((speaker) => (
            <li key={speaker.id} className="mb-2">
              <span className="mr-2">
                <button
                  className="font-mono font-semibold text-gray-900 transform rotate-45"
                  onClick={() => deleteSpeaker(speaker.id)}
                >
                  +
                </button>
              </span>
              <span className="font-semibold text-gray-500">@{speaker.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SpeakerSearch
