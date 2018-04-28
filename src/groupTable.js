import React, { Component } from 'react'
import propTypes, { defaultProps } from './propTypes/groupTable'
import Row from './row'

export default class GroupTable extends Component {
  isTeamInCutoffPosition (position) {
    return this.props.cutOffPositions.includes(position)
  }

  isTeamInDangerZone (position) {
    return this.props.dangerZonePositions.includes(position)
  }

  isTeamInQualPosition (position) {
    return this.props.qualificationPositions.includes(position)
  }

  renderTeams () {
    return this.props.teams.map((team, i) => {
      return <Row
        cutOffPosition={this.isTeamInCutoffPosition(i + 1)}
        dangerZone={this.isTeamInDangerZone(i + 1)}
        key={i}
        gamesDrawn={team.gamesDrawn}
        gamesLost={team.gamesLost}
        gamesPlayed={team.gamesPlayed}
        gamesWon={team.gamesWon}
        goalDifference={team.goalDifference}
        goalsConceded={team.goalsConceded}
        goalsScored={team.goalsScored}
        points={team.points}
        qualificationPosition={this.isTeamInQualPosition(i + 1)}
        teamName={team.teamName}
        teamPosition={i + 1}
      />
    })
  }

  render () {
    return (
      <div className='table-wrapper'>
        <table className='group-table'>
          <thead>
            <tr className='group-table-header-row'>
              <th className='empty-th' />
              <th className='group-table-group-name'>{this.props.groupName}</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GD</th>
              <th>GS</th>
              <th>GC</th>
              <th className='th-em'>PTS</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTeams()}
          </tbody>
        </table>
      </div>
    )
  }
}

GroupTable.propTypes = propTypes
GroupTable.defaultProps = defaultProps
