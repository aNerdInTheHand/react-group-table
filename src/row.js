import React, { Component } from 'react'
import propTypes, { defaultProps } from './propTypes/row'

export default class Row extends Component {
  getGamesPlayed () {
    return this.props.gamesPlayed
      ? this.props.gamesPlayed
      : this.props.gamesWon && this.props.gamesDrawn && this.props.gamesLost
        ? this.props.gamesWon + this.props.gamesDrawn + this.props.gamesLost
        : 0
  }

  getGoalDifference () {
    return this.props.goalDifference
      ? this.props.goalDifference
      : this.props.goalsScored && this.props.goalsConceded
        ? this.props.goalsScored - this.props.goalsConceded
        : 0
  }

  getPoints () {
    return this.props.points
      ? this.props.points
      : this.props.gamesWon && this.props.gamesDrawn
        ? (this.props.gamesWon * this.props.pointsForWin) + this.props.gamesDrawn
        : 0
  }

  render () {
    return (
      <tr className='group-table-content-row group-qualifying-position'>
        {this.props.showPositions && <td className='qual-pos'>{this.props.teamPosition}</td>}
        <td className='td-em group-table-team-name'>{this.props.teamName}</td>
        <td>{this.getGamesPlayed()}</td>
        <td>{this.props.gamesWon}</td>
        <td>{this.props.gamesDrawn}</td>
        <td>{this.props.gamesLost}</td>
        <td>{this.getGoalDifference()}</td>
        <td>{this.props.goalsScored}</td>
        <td>{this.props.goalsConceded}</td>
        <td className='th-em'>{this.getPoints()}</td>
      </tr>
    )
  }
}

Row.propTypes = propTypes
Row.defaultProps = defaultProps
