import { SearchIcon } from '@heroicons/react/solid'

const SpeakerSearch = ({speakers=[]}) => {

  return (
    <>
      <div className="col-span-full">
        <label htmlFor="speakers" className="block text-sm font-medium text-gray-700">
          Speakers
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="speakers"
            name="speakers"
            className="block w-full py-2 pl-10 pr-3 text-sm placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            type="search"
          />
        </div>
        <p className="mt-2 text-sm text-gray-500" id="email-description">
          Search for a Twitter user.
        </p>
      </div>
      <div className="col-span-full">
        <ul className="list-reset list-unstyled list-inline list-inline-icon-left">
          {speakers.map((speaker) => (
            <li key={speaker.id} className="mb-2">
              <img src={speaker.image} alt="" className="w-2 h-2" />
              <span className="font-semibold text-gray-500">{speaker.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SpeakerSearch
