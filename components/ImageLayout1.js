const layout1Styles = [
  {
    container: 'flex flex-col items-center justify-between w-full h-full py-3',
    ul: 'flex flex-wrap justify-center gap-4',
    li: 'flex flex-col items-center font-bold text-center px-1 min-w-[120px] max-w-[130px]',
    img: 'w-[80px] h-[80px] mx-auto rounded-full mb-1',
    name: 'text-[13px] font-medium w-full max-h-[38px] overflow-hidden',
    title: 'text-[10px] font-light w-full max-h-[30px] overflow-hidden',
  },
  {
    container: 'flex flex-col items-center justify-around w-full h-full py-4 px-6',
    ul: 'flex flex-wrap justify-center gap-4',
    li: 'flex flex-col items-center font-bold text-center px-1 min-w-[120px] max-w-[75%]',
    img: 'w-[80px] h-[80px] mx-auto rounded-full mb-1',
    name: 'text-[13px] font-medium w-full max-h-[57px] overflow-hidden',
    title: 'text-[10px] font-light w-full max-h-[45px] overflow-hidden',
  },
  {
    container: 'flex flex-col items-center justify-around w-full h-full py-4 px-6',
    ul: 'flex flex-wrap justify-center gap-4',
    li: 'flex flex-col items-center font-bold text-center px-1 min-w-[120px] max-w-[40%]',
    img: 'w-[90px] h-[90px] mx-auto rounded-full mb-1',
    name: 'text-[13px] font-medium w-full max-h-[57px] overflow-hidden',
    title: 'text-[10px] font-light w-full max-h-[45px] overflow-hidden',
  },
  {
    container: 'flex flex-col items-center justify-around w-full h-full py-4 px-6',
    ul: 'flex flex-wrap justify-center gap-4',
    li: 'flex flex-col items-center font-bold text-center px-1 min-w-[120px] max-w-[35%]',
    img: 'w-[80px] h-[80px] mx-auto rounded-full mb-1',
    name: 'text-[13px] font-medium w-full max-h-[57px] overflow-hidden',
    title: 'text-[10px] font-light w-full max-h-[45px] overflow-hidden',
  },
  {
    container: 'flex flex-col items-center justify-between w-full h-full py-6',
    ul: 'flex flex-wrap justify-center gap-2',
    li: 'flex flex-col items-center font-bold text-center px-1 min-w-[120px] max-w-[23%]',
    img: 'w-[80px] h-[80px] mx-auto rounded-full mb-1',
    name: 'text-[13px] font-medium w-full max-h-[57px] overflow-hidden',
    title: 'text-[10px] font-light w-full max-h-[45px] overflow-hidden',
  },
  {
    container: 'flex flex-col items-center justify-between w-full h-full py-4',
    ul: 'flex flex-wrap justify-center gap-2 pt-2',
    li: 'flex flex-col items-center font-bold text-center px-1 min-w-[140px] max-w-[40%]',
    img: 'w-[56px] h-[56px] mx-auto rounded-full',
    name: 'text-[13px] font-medium w-full max-h-[38px] overflow-hidden',
    title: 'text-[10px] font-light w-full max-h-[30px] overflow-hidden',
  },
  {
    container: 'flex flex-col items-center justify-between w-full h-full py-3',
    ul: 'flex flex-wrap justify-center gap-2 pt-2',
    li: 'flex flex-col items-center font-bold text-center px-1 w-[30%]',
    img: 'w-[56px] h-[56px] mx-auto rounded-full',
    name: 'text-[13px] font-medium w-full max-h-[38px] overflow-hidden',
    title: 'text-[10px] font-light w-full max-h-[30px] overflow-hidden',
  },
  {
    container: 'flex flex-col items-center justify-between w-full h-full py-3',
    ul: 'flex flex-wrap justify-center gap-2 pt-2',
    li: 'flex flex-col items-center font-bold text-center px-1 w-[23%] max-h-[128px]',
    img: 'w-[56px] h-[56px] mx-auto rounded-full',
    name: 'text-[13px] font-medium w-full max-h-[38px] overflow-hidden',
    title: 'text-[10px] font-light w-full max-h-[30px] overflow-hidden',
  },
  {
    container: 'flex flex-col items-center justify-between w-full h-full py-3',
    ul: 'flex flex-wrap justify-center gap-2 pt-2',
    li: 'flex flex-col items-center font-bold text-center px-1 w-[23%] max-h-[128px]',
    img: 'w-[56px] h-[56px] mx-auto rounded-full',
    name: 'text-[13px] font-medium w-full max-h-[38px] overflow-hidden',
    title: 'text-[10px] font-light w-full max-h-[30px] overflow-hidden',
  },
  {
    container: 'flex flex-col items-center justify-between w-full h-full py-3',
    ul: 'flex flex-wrap justify-center gap-2',
    li: 'flex flex-col items-center font-bold text-center px-1 min-w-[120px] max-w-[130px]',
    img: 'w-[56px] h-[56px] mx-auto rounded-full',
    name: 'text-[13px] font-medium w-full max-h-[38px] overflow-hidden',
    title: 'text-[10px] font-light w-full max-h-[30px] overflow-hidden',
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
  dateTimeTextSize,
  scale,
  bgColorPicker,
}) => (
  <div
    id={id}
    className={`w-[576px] h-[324px] ${backgroundColor} transform rounded-lg`}
    style={{
      transform: 'scale(' + scale + ')',
      transformOrigin: '0 0 0',
      backgroundColor: bgColorPicker,
      color: textColor,
    }}
  >
    <div className={layout1Styles[idx].container}>
      <h1
        className="font-medium leading-none text-center"
        style={{ fontSize: titleTextSize + 'px' }}
      >
        {title || 'Title'}
      </h1>
      <ul className={layout1Styles[idx].ul}>
        {speakers.map((speaker) => (
          <li className={layout1Styles[idx].li} key={speaker.id}>
            <img
              className={layout1Styles[idx].img}
              src={speaker.profile_image_url.replace(/_normal/g, '')}
              alt=""
            />
            {speaker.name && <h3 className={layout1Styles[idx].name}>{speaker.name}</h3>}
            {speaker.title && <h3 className={layout1Styles[idx].title}>{speaker.title}</h3>}
          </li>
        ))}
      </ul>
      <p className="font-bold text-center" style={{ fontSize: dateTimeTextSize + 'px' }}>
        {dateTime}
      </p>
    </div>
  </div>
)
