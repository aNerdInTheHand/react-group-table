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

  getPositionClass () {
    return this.props.qualificationPosition
      ? 'qualifying'
      : this.props.dangerZone
        ? 'danger'
        : ''
  }

  inCutOffPosition () {
    return this.props.cutOffPosition
      ? 'group-cutoff-position'
      : ''
  }

  render () {
    return (
      <tr className={`group-table-content-row group-tr-${this.getPositionClass()}-position ${this.inCutOffPosition()}`}>
        {this.props.showPositions &&
          <td className={`group-td-${this.getPositionClass()}-position`}>{this.props.teamPosition}</td>}
        <td className='td-em group-table-team-name'>{this.props.teamName}</td>
        <td>{this.getGamesPlayed()}</td>
        <td>{this.props.gamesWon}</td>
        <td>{this.props.gamesDrawn}</td>
        <td>{this.props.gamesLost}</td>
        <td>{this.getGoalDifference()}</td>
        {this.props.showGoalsScored && <td>{this.props.goalsScored}</td>}
        {this.props.showGoalsConceded && <td>{this.props.goalsConceded}</td>}
        <td className='th-em'>{this.getPoints()}</td>
      </tr>
    )
  }
}

Row.propTypes = propTypes
Row.defaultProps = defaultProps
