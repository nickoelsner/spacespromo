import axios from 'axios'
import { useState } from 'react'

const SpeakerSearch = ({ speakers, setSpeakers }) => {
  const [handle, setHandle] = useState('')

  const onHandleChange = (e) => {
    setHandle(e.target.value)
  }

  const handleAttributeChange = (e, id, attribute) => {
    const currentSpeakerIndex = speakers.findIndex((speaker) => speaker.id === id)
    if (currentSpeakerIndex >= 0) {
      setSpeakers((prev) => [
        ...prev.slice(0, currentSpeakerIndex),
        Object.assign({}, prev[currentSpeakerIndex], { [attribute]: e.target.value }),
        ...prev.slice(currentSpeakerIndex + 1),
      ])
    }
  }

  const onTwitterHandleSearch = (e) => {
    e.preventDefault()
    axios
      .get(`/api/twitter_users?handle=${handle}`)
      .then((res) => {
        const user = res.data
        user.title = 'cool person'
        console.log('user :>> ', user)
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
      <div className="mb-8 col-span-full">
        <ul className="list-reset list-unstyled list-inline list-inline-icon-left">
          {speakers.map((speaker) => (
            <li key={speaker.id} className="flex items-center w-full py-3 border-t border-gray-300">
              <div className="flex flex-col flex-1">
                <span className="mb-2 font-semibold text-gray-500">@{speaker.username}</span>
                <div className="flex flex-row">
                  <div>
                    <label
                      htmlFor={`${speaker.username}-name`}
                      className="block text-sm font-medium text-violet-900"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name={`${speaker.username}-name`}
                      id={`${speaker.username}-name`}
                      value={speaker.name}
                      onChange={(e) => handleAttributeChange(e, speaker.id, 'name')}
                      className="block text-sm border-gray-300 rounded-md focus:ring-violet-500 focus:border-violet-50"
                    />
                  </div>
                  <div className="flex-1 ml-3">
                    <label
                      htmlFor={`${speaker.username}-title`}
                      className="block text-sm font-medium text-violet-900"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name={`${speaker.username}-title`}
                      id={`${speaker.username}-title`}
                      value={speaker.title}
                      onChange={(e) => handleAttributeChange(e, speaker.id, 'title')}
                      className="block w-full text-sm border-gray-300 rounded-md focus:ring-violet-500 focus:border-violet-50"
                    />
                  </div>
                </div>
              </div>
              <span className="ml-6">
                <button
                  className="font-mono font-semibold text-gray-900 hover:text-red-700"
                  onClick={() => deleteSpeaker(speaker.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SpeakerSearch
