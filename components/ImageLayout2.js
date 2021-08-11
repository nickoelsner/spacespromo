const layout2Styles = [
  {
    titleContainer: 'flex flex-col items-center justify-around w-1/2 h-full p-4 pr-2',
    ul: 'flex flex-wrap justify-center w-1/2 pr-4 items-between gap-y-6',
    li: 'flex flex-col items-center justify-start w-full px-2 font-bold text-center',
    name: 'text-[15px]',
    title: 'text-[12px]',
  },
  {
    titleContainer: 'flex flex-col items-center justify-around w-1/2 h-full p-4 pr-2',
    ul: 'flex flex-wrap justify-center w-1/2 pr-6 items-between gap-y-6',
    li: 'flex flex-col items-center justify-start w-full px-2 font-bold text-center',
    name: 'text-[15px]',
    title: 'text-[12px]',
  },
  {
    titleContainer: 'flex flex-col items-center justify-around w-1/2 h-full p-4 pr-2',
    ul: 'flex flex-wrap justify-center w-1/2 pr-4 items-between gap-y-6',
    li: 'flex flex-col items-center justify-start w-full px-2 font-bold text-center ',
    name: 'text-[15px]',
    title: 'text-[12px]',
  },
  {
    titleContainer: 'flex flex-col items-center justify-around w-2/5 h-full p-4 pr-2',
    ul: 'flex flex-wrap justify-center w-3/5 pr-4 items-between gap-y-4 h-full py-4',
    li: 'flex flex-col items-center justify-start px-2 font-bold text-center w-1/2 max-h-[138px] overflow-hidden',
    name: 'text-[15px]',
    title: 'text-[12px]',
  },
  {
    titleContainer: 'flex flex-col items-center justify-around w-2/5 h-full p-4 pr-2',
    ul: 'flex flex-wrap justify-center w-3/5 pr-4 items-between gap-y-4',
    li: 'flex flex-col items-center justify-start w-1/2 px-2 font-bold text-center max-w-[50%] max-h-[138px] overflow-hidden',
    name: 'text-[15px]',
    title: 'text-[12px]',
  },
  {
    titleContainer: 'flex flex-col justify-around w-1/3 h-full p-4 pr-2 items-center',
    ul: 'flex flex-wrap justify-center w-2/3 gap-y-4 pr-4 items-around',
    li: 'flex flex-col items-center justify-start font-bold text-center w-[33%] max-h-[167px] overflow-hidden',
    name: 'text-[13px]',
    title: 'text-[10px]',
  },
  {
    titleContainer: 'flex flex-col justify-around w-1/3 h-full p-4 pr-2 items-center',
    ul: 'flex flex-wrap justify-center w-2/3 gap-y-4 pr-4 items-around',
    li: 'flex flex-col items-center justify-start font-bold text-center w-[33%] max-h-[167px] overflow-hidden',
    name: 'text-[13px]',
    title: 'text-[10px]',
  },
  {
    titleContainer: 'flex flex-col justify-around w-1/3 h-full p-4 pr-2 items-center',
    ul: 'flex flex-wrap justify-center w-2/3 gap-y-6 pr-4 items-around',
    li: 'flex flex-col items-center justify-start font-bold text-center w-[33%]',
    name: 'text-[13px]',
    title: 'text-[10px]',
  },
]

export const ImageLayout2 = ({
  id,
  idx,
  backgroundColor,
  textColor,
  titleTextSize,
  title,
  speakers,
  dateTime,
  dateTimeTextSize,
  scale,
  bgColorPicker,
}) => {
  return (
    <div
      id={id}
      className={`w-[576px] h-[324px] ${backgroundColor} transform ${textColor} rounded-lg`}
      style={{
        transform: 'scale(' + scale + ')',
        transformOrigin: '0 0 0',
        backgroundColor: bgColorPicker,
        color: textColor,
      }}
    >
      <div className="flex items-center justify-around w-full h-full">
        <div className={layout2Styles[idx].titleContainer}>
          <h1
            className="font-medium leading-none text-center"
            style={{ fontSize: titleTextSize + 'px' }}
          >
            {title || 'Title'}
          </h1>
          <p className="font-bold text-center" style={{ fontSize: dateTimeTextSize + 'px' }}>
            {dateTime}
          </p>
        </div>
        <ul className={layout2Styles[idx].ul}>
          {speakers.map((speaker) => (
            <li className={layout2Styles[idx].li} key={speaker.id}>
              <img
                className="w-[5rem] h-[5rem] mx-auto rounded-full"
                src={speaker.profile_image_url.replace(/_normal/g, '')}
                alt=""
              />
              {speaker.name && (
                <h3 className={`${layout2Styles[idx].name} font-medium w-full ${textColor}`}>
                  {speaker.name}
                </h3>
              )}
              {speaker.title && (
                <h3 className={`${layout2Styles[idx].title} font-light w-full ${textColor}`}>
                  {speaker.title}
                </h3>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
