import RangeSlider from './Slider'
import StyleDetails from './StyleDetails'
import SpeakerSearch from './SpeakerSearch'

const TitleDateTime = ({
  title,
  setTitle,
  setTitleTextSize,
  dateTime,
  setDateTime,
  setDateTimeTextSize,
  speakers,
  setSpeakers,
}) => {
  return (
    <div className="pt-8 space-y-8 xl:w-full">
      <h3 className="text-xl font-medium leading-6 text-violet-900">Twitter Space Details</h3>
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
          <label htmlFor="datetime" className="block text-sm font-medium text-violet-900">
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
            <div className="text-violet-900">
              <label
                htmlFor="date-time-text-size"
                className="block text-sm font-medium text-violet-900"
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
        <SpeakerSearch speakers={speakers} setSpeakers={setSpeakers} />
      </div>
    </div>
  )
}

export default TitleDateTime
