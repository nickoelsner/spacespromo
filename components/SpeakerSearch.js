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
        setSpeakers((prev) => [...prev, ...res.data])
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
          <input
            id="speaker"
            name="speaker"
            className="block w-full text-sm border-gray-300 rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-50"
            type="text"
            placeholder="Enter a Twitter handle to add a speaker"
            value={handle}
            onChange={onHandleChange}
          />
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
              <button
                className="mr-4 font-mono font-semibold text-gray-900"
                onClick={() => deleteSpeaker(speaker.id)}
              >
                x
              </button>
              <span className="font-semibold text-gray-500">@{speaker.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SpeakerSearch
