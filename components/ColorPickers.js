import { PlusIcon } from '@heroicons/react/solid'

const ColorPickers = ({
  backgroundColors,
  backgroundColor,
  setBackgroundColor,
  bgColorPicker,
  setBgColorPicker,
  textColors,
  textColor,
  setTextColor,
  textColorPicker,
  setTextColorPicker,
  handleImageUpload,
  bgImageRef,
  bgImage,
}) => {
  return (
    <>
      <h4 className="block mb-2 text-sm font-medium text-primary-text">Background Color</h4>
      <div className="flex flex-wrap items-end gap-3 pb-2 mb-5">
        {backgroundColors.map((color, i) => (
          <button
            key={i}
            className={`w-14 h-8 shadow-md rounded-sm ${color} ${
              backgroundColor === color ? 'transform scale-[120%]' : ''
            }`}
            onClick={() => {
              setBackgroundColor(color)
              bgImageRef.current.value = null
            }}
            aria-label={`gradient background color option ${i + 1}`}
          />
        ))}
        <button
          className={`relative h-8 text-xs leading-tight text-center rounded-sm shadow-md cursor-pointer w-14 text-primary-text ${
            backgroundColor === `bg-[${bgColorPicker}]` ? 'transform scale-[120%]' : ''
          }`}
          style={{ backgroundColor: bgColorPicker }}
          aria-label="custom background color picker"
        >
          <input
            id="custom-background-color"
            name="custom-background-color"
            type="color"
            className="h-8 p-0 border-transparent rounded-sm shadow-md cursor-pointer w-14"
            value={bgColorPicker}
            onChange={(e) => {
              setBgColorPicker(e.target.value)
              bgImageRef.current.value = null
            }}
          />
          <label
            htmlFor="custom-background-color"
            className="absolute left-0 w-full text-center -bottom-4"
          >
            Custom
          </label>
        </button>
        <button
          className={`relative h-8 text-xs leading-tight text-center rounded-sm shadow-md cursor-pointer w-14 text-primary-text ${
            !backgroundColor && bgImage ? 'transform scale-[120%]' : ''
          }`}
        >
          <img className="absolute top-0 left-0 w-full h-full rounded-sm" src={bgImage} alt="" />
          <label
            htmlFor="custom-bg-image"
            className={`absolute top-0 left-0 flex items-center justify-center w-full h-full rounded-sm cursor-pointer bg-primary ${
              bgImage ? 'opacity-0' : ''
            }`}
          >
            <PlusIcon className="w-6 h-6 text-white" />
            <input
              type="file"
              id="custom-bg-image"
              name="custom-bg-image"
              ref={bgImageRef}
              onChange={handleImageUpload}
              className="w-[0.1px] h-[0.1px] opacity-0 overflow-hidden absolute z-[-1]"
            />
          </label>
          <span className="absolute left-0 w-full -bottom-4">Image</span>
        </button>
      </div>
      <h4 className="block mb-2 text-sm font-medium text-primary-text">Text Color</h4>
      <div className="flex flex-wrap items-end gap-3 pb-2 mb-5">
        {textColors.map((color, i) => (
          <button
            key={i}
            className={`w-14 h-8 shadow-md rounded-sm outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary ${
              textColor === color ? 'transform scale-[120%]' : ''
            }`}
            onClick={() => setTextColor(color)}
            style={{ backgroundColor: color }}
            aria-label={`text color ${color}`}
          />
        ))}
        <button
          className={`relative h-8 text-xs leading-tight text-center rounded-sm shadow-md cursor-pointer w-14 text-primary-text outline-none focus-within:ring-2 focus-within:ring-offset-1 focus-within:ring-primary ${
            textColor === `text-[${textColorPicker}]` ? 'transform scale-[120%]' : ''
          }`}
          style={{ backgroundColor: textColorPicker }}
          aria-label="custom text color picker"
        >
          <input
            id="custom-text-color"
            name="custom-text-color"
            type="color"
            className="h-8 p-0 border-transparent rounded-sm shadow-md cursor-pointer w-14"
            value={textColorPicker}
            onChange={(e) => setTextColorPicker(e.target.value)}
          />
          <label
            htmlFor="custom-text-color"
            className="absolute left-0 w-full text-center -bottom-4"
          >
            Custom
          </label>
        </button>
      </div>
    </>
  )
}

export default ColorPickers
