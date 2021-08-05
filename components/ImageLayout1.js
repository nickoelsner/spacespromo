const layout1Styles = [
  {
    ul: 'flex flex-wrap justify-center gap-4',
    li: 'flex flex-col items-center font-bold text-center px-1 min-w-[120px] max-w-[130px]',
    img: 'w-[80px] h-[80px] mx-auto rounded-full mb-1',
  },
  {
    ul: 'flex flex-wrap justify-center gap-4',
    li: 'flex flex-col items-center font-bold text-center px-1 min-w-[120px] max-w-[130px]',
    img: 'w-[80px] h-[80px] mx-auto rounded-full mb-1',
  },
  {
    ul: 'flex flex-wrap justify-center gap-4',
    li: 'flex flex-col items-center font-bold text-center px-1 min-w-[120px] max-w-[130px]',
    img: 'w-[80px] h-[80px] mx-auto rounded-full mb-1',
  },
  {
    ul: 'flex flex-wrap justify-center gap-2',
    li: 'flex flex-col items-center font-bold text-center px-1 min-w-[120px] max-w-[130px]',
    img: 'w-[80px] h-[80px] mx-auto rounded-full mb-1',
  },
  {
    ul: 'flex flex-wrap justify-center gap-x-6 gap-y-2',
    li: 'flex flex-col items-center font-bold text-center px-1 min-w-[140px] max-w-[150px]',
    img: 'w-[60px] h-[60px] mx-auto rounded-full',
  },
  {
    ul: 'flex flex-wrap justify-center gap-x-6 gap-y-2',
    li: 'flex flex-col items-center font-bold text-center px-1 min-w-[140px] max-w-[150px]',
    img: 'w-[60px] h-[60px] mx-auto rounded-full',
  },
  {
    ul: 'flex flex-wrap justify-center gap-2',
    li: 'flex flex-col items-center font-bold text-center px-1 min-w-[120px] max-w-[130px]',
    img: 'w-[60px] h-[60px] mx-auto rounded-full',
  },
  {
    ul: 'flex flex-wrap justify-center gap-2',
    li: 'flex flex-col items-center font-bold text-center px-1 min-w-[120px] max-w-[130px]',
    img: 'w-[60px] h-[60px] mx-auto rounded-full',
  },
]

export const ImageLayout1 = ({
  id,
  idx,
  backgroundColor,
  textColor,
  titleTextSize,
  title,
  speakers,
  dateTime,
}) => (
  <div
    id={id}
    className={`aspect-w-16 aspect-h-9 ${backgroundColor} transform ${textColor} rounded-lg`}
  >
    <div className="flex flex-col items-center justify-around w-full h-full p-3">
      <h1
        className="font-medium leading-none text-center"
        style={{ fontSize: titleTextSize + 'px' }}
      >
        {title || 'Title'}
      </h1>
      <ul className={layout1Styles[idx].ul}>
        {speakers.map((speaker) => (
          <li className={layout1Styles[idx].li} key={speaker.name}>
            <img
              className={layout1Styles[idx].img}
              src={speaker.profile_image_url.replace(/_normal/g, '')}
              alt=""
            />
            <h3 className={`text-[13px] font-medium ${textColor}`}>{speaker.name}</h3>
            {speaker.title && (
              <h3 className={`text-[10px] font-light ${textColor}`}>{speaker.title}</h3>
            )}
          </li>
        ))}
      </ul>
      <p className="font-bold text-center">{dateTime}</p>
    </div>
  </div>
)
