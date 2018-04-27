import {
  bool,
  func,
  oneOfType,
  number,
  string
} from 'prop-types'

export const defaultProps = {
  minutes: 0,
  seconds: 0,
  showCentrePanel: false,
  showSeconds: true
}

export default {
  awayTeam: string.isRequired,
  homeTeam: string.isRequired,
  minutes: number,
  onButtonClick: func,
  scorer: oneOfType([number, string]),
  seconds: number,
  showCentrePanel: bool,
  showSeconds: bool,
  title: string
}
