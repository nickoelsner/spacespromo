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
}) => {
  return (
    <>
      <h4 className="block mb-2 text-sm font-medium text-violet-900">Background Color</h4>
      <div className="flex flex-wrap items-end gap-3 pb-2 mb-5">
        {backgroundColors.map((color, i) => (
          <button
            key={i}
            className={`w-14 h-8 shadow-md rounded-sm ${color} ${
              backgroundColor === color ? 'transform scale-[120%]' : ''
            }`}
            onClick={() => setBackgroundColor(color)}
          />
        ))}

        <button
          className={`relative h-8 text-xs leading-tight text-center rounded-sm shadow-md cursor-pointer w-14 text-violet-900 ${
            backgroundColor === `bg-[${bgColorPicker}]` ? 'transform scale-[120%]' : ''
          }`}
          style={{ backgroundColor: bgColorPicker }}
        >
          <input
            type="color"
            className="h-8 p-0 border-transparent rounded-sm shadow-md cursor-pointer w-14"
            value={bgColorPicker}
            onChange={(e) => setBgColorPicker(e.target.value)}
          />
          <span className="absolute left-0 w-full text-center -bottom-4">Custom</span>
        </button>
      </div>
      <h4 className="block mb-2 text-sm font-medium text-violet-900">Text Color</h4>
      <div className="flex flex-wrap items-end gap-3 pb-2 mb-5">
        {textColors.map((color, i) => (
          <button
            key={i}
            className={`w-14 h-8 shadow-md rounded-sm ${
              textColor === color ? 'transform scale-[120%]' : ''
            }`}
            onClick={() => setTextColor(color)}
            style={{ backgroundColor: color }}
          />
        ))}
        <button
          className={`relative h-8 text-xs leading-tight text-center rounded-sm shadow-md cursor-pointer w-14 text-violet-900 ${
            textColor === `text-[${textColorPicker}]` ? 'transform scale-[120%]' : ''
          }`}
          style={{ backgroundColor: textColorPicker }}
        >
          <input
            type="color"
            className="h-8 p-0 border-transparent rounded-sm shadow-md cursor-pointer w-14"
            value={textColorPicker}
            onChange={(e) => setTextColorPicker(e.target.value)}
          />
          <span className="absolute left-0 w-full text-center -bottom-4">Custom</span>
        </button>
      </div>
    </>
  )
}

export default ColorPickers
