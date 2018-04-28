import {
  bool,
  number,
  string
} from 'prop-types'

export const defaultProps = {
  gamesDrawn: 0,
  gamesLost: 0,
  gamesWon: 0,
  pointsForWin: 3,
  showPositions: true
}

export default {
  cutOffPosition: bool,
  gamesDrawn: number.isRequired,
  gamesLost: number.isRequired,
  gamesPlayed: number,
  gamesWon: number.isRequired,
  goalDifference: number,
  goalsConceded: number,
  goalsScored: number,
  points: number,
  pointsForWin: number,
  qualificationPosition: bool,
  dangerZone: bool,
  showPositions: bool,
  teamName: string.isRequired,
  teamPosition: number
}
