import {
  arrayOf,
  bool,
  number,
  shape,
  string
} from 'prop-types'

export const defaultProps = {
  cutOffPositions: [2],
  dangerZonePositions: [3, 4],
  pointsForWin: 3,
  qualificationPositions: [1, 2],
  showGoalsConceded: true,
  showGoalsScored: true,
  showPositions: true
}

export default {
  cutOffPositions: arrayOf(number),
  dangerZonePositions: arrayOf(number),
  groupName: string,
  qualificationPositions: arrayOf(number),
  pointsForWin: number,
  showGoalsConceded: bool,
  showGoalsScored: bool,
  showPositions: bool,
  teams: arrayOf(
    shape({
      gamesDrawn: number.isRequired,
      gamesLost: number.isRequired,
      gamesPlayed: number,
      gamesWon: number.isRequired,
      goalDifference: number,
      goalsConceded: number.isRequired,
      goalsScored: number.isRequired,
      points: number,
      teamName: string.isRequired
    })
  ).isRequired
}
