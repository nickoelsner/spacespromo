import RangeSlider from './Slider'
import StyleDetails from './StyleDetails'
import SpeakerSearch from './SpeakerSearch'

const SpaceDetails = ({
  title,
  setTitle,
  setTitleTextSize,
  dateTime,
  setDateTime,
  setDateTimeTextSize,
  speakers,
  setSpeakers,
  numSpeakersError,
}) => {
  return (
    <div className="space-y-8 xl:w-full">
      {/* <h3 className="text-xl font-medium leading-6 text-primary-text">Twitter Space Details</h3> */}
      <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="col-span-full">
          <label htmlFor="title" className="block text-sm font-medium text-primary-text">
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
          <StyleDetails>
            <div className="text-primary-text">
              <label
                htmlFor="title-text-size"
                className="block text-sm font-medium text-primary-text"
              >
                Text Size
              </label>
              <RangeSlider
                setStateValue={setTitleTextSize}
                min={8}
                max={56}
                step={1}
                defaultValue={32}
                label="title-text-size"
                unit="px"
              />
            </div>
          </StyleDetails>
        </div>
        <div className="col-span-full">
          <label htmlFor="datetime" className="block text-sm font-medium text-primary-text">
            Date and Time
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="datetime"
              id="datetime"
              placeholder="Date and time as you'd like it to appear"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="block w-full text-sm border-gray-300 rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-50"
            />
          </div>
          <StyleDetails>
            <div className="text-primary-text">
              <label
                htmlFor="date-time-text-size"
                className="block text-sm font-medium text-primary-text"
              >
                Text Size
              </label>
              <RangeSlider
                setStateValue={setDateTimeTextSize}
                min={8}
                max={24}
                step={1}
                defaultValue={16}
                label="date-time-text-size"
                unit="px"
              />
            </div>
          </StyleDetails>
        </div>
        <SpeakerSearch
          speakers={speakers}
          setSpeakers={setSpeakers}
          numSpeakersError={numSpeakersError}
        />
      </div>
    </div>
  )
}

export default SpaceDetails
