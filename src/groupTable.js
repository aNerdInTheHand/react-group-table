import React, { Component } from 'react'
import propTypes, { defaultProps } from './propTypes/groupTable'
import Row from './row'

export default class GroupTable extends Component {
  renderTeams () {
    return this.props.teams.map((team, i) => {
      return <Row
        key={i}
        teamPosition={i + 1}
        gamesDrawn={team.gamesDrawn}
        gamesLost={team.gamesLost}
        gamesPlayed={team.gamesPlayed}
        gamesWon={team.gamesWon}
        goalDifference={team.goalDifference}
        goalsConceded={team.goalsConceded}
        goalsScored={team.goalsScored}
        points={team.points}
        teamName={team.teamName}
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
              <th className='empty-th' />
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
