import axios from 'axios'
import { useState } from 'react'

const SpeakerSearch = () => {
  const [speakers, setSpeakers] = useState([])

  const onSearchInputChange = (e) => {
    axios
      .get('/api/twitter_users')
      .then((res) => {
        setSpeakers(res.data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <div className="col-span-full">
        <label htmlFor="speakers" className="block text-sm font-medium text-gray-700">
          Speakers
        </label>
        <div className="mt-1">
          <input
            id="speakers"
            name="speakers"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-50text-sm"
            type="text"
            placeholder="Twitter Handle"
            onChange={onSearchInputChange}
          />
        </div>
      </div>
      <div className="col-span-full">
        <ul className="list-reset list-unstyled list-inline list-inline-icon-left">
          {speakers.map((speaker) => (
            <li key={speaker.id} className="mb-2">
              <span className="font-semibold text-gray-500">@{speaker.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SpeakerSearch
