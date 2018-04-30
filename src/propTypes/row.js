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
  showGoalsConceded: true,
  showGoalsScored: true,
  showPositions: true
}

export default {
  cutOffPosition: bool,
  dangerZone: bool,
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
  showGoalsConceded: bool,
  showGoalsScored: bool,
  showPositions: bool,
  teamName: string.isRequired,
  teamPosition: number
}
