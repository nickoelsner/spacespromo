import { withStyles, makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import Tooltip from '@material-ui/core/Tooltip'

const StyledSlider = withStyles({
  root: {
    color: 'inherit',
    height: 8,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -10,
    '&:focus, &:hover, &$active': {
      boxShadow: '0px 0px 0px 6px rgb(0 0 0 / 16%)',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 2px)',
  },
  track: {
    height: 4,
    borderRadius: 2,
  },
  rail: {
    height: 4,
    borderRadius: 2,
  },
})(Slider)

const RangeSlider = ({ setStateValue, min, max, step, defaultValue, label, unit }) => {
  function ValueLabelComponent(props) {
    const { children, open, value } = props

    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={`${value}${unit}`}>
        {children}
      </Tooltip>
    )
  }

  const handleChange = (event, value) => {
    console.log(value)
    setStateValue(value)
  }

  return (
    <StyledSlider
      ValueLabelComponent={ValueLabelComponent}
      aria-label={label}
      defaultValue={defaultValue}
      onChange={handleChange}
      min={min}
      max={max}
      step={step}
    />
  )
}

export default RangeSlider
