import {
  arrayOf,
  number,
  shape,
  string
} from 'prop-types'

export const defaultProps = {
  cutOffPositions: [2],
  dangerZonePositions: [3, 4],
  pointsForWin: 3,
  qualificationPositions: [1, 2]
}

export default {
  cutOffPositions: arrayOf(number),
  dangerZonePositions: arrayOf(number),
  qualificationPositions: arrayOf(number),
  pointsForWin: number,
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
  )
}
