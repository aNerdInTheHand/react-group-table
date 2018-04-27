import {
  bool,
  oneOfType,
  number,
  string
} from 'prop-types'

export const defaultProps = {
  primaryValue: 0,
  secondaryValue: 0,
  showLeadingZeros: false,
  showSecondaryValue: false
}

export default {
  primaryValue: oneOfType([number, string]),
  secondaryValue: oneOfType([number, string]),
  showLeadingZeros: bool,
  showSecondaryValue: bool,
  scorer: oneOfType([number, string])
}
