import React, { Component } from 'react'
import propTypes, { defaultProps } from './propTypes/groupTable'

export default class GroupTable extends Component {
  render () {
    return (
      <div class='table-wrapper'>
        <table class='group-table'>
          <tr class='group-table-header-row'>
            <th class='empty-th' />
            <th class='empty-th' />
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GD</th>
            <th>GS</th>
            <th>GC</th>
            <th class='th-em'>PTS</th>
          </tr>
          <tr class='group-table-content-row group-qualifying-position'>
            <td class='qual-pos'>1</td>
            <td class='td-em group-table-team-name'>Romania</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>0</td>
            <td>2</td>
            <td>4</td>
            <td>7</td>
            <td class='th-em'>2</td>
          </tr>
          <tr class='group-table-content-row group-qualifying-position last-qualifying-pos'>
            <td class='qual-pos'>2</td>
            <td class='td-em group-table-team-name'>England</td>
            <td>3</td>
            <td>2</td>
            <td>0</td>
            <td>1</td>
            <td>3</td>
            <td>5</td>
            <td>2</td>
            <td class='th-em'>2</td>
          </tr>
          <tr class='group-table-content-row group-no-qualifying-position'>
            <td class='no-qual-pos'>3</td>
            <td class='td-em group-table-team-name'>Colombia</td>
            <td>3</td>
            <td>1</td>
            <td>0</td>
            <td>2</td>
            <td>-2</td>
            <td>1</td>
            <td>3</td>
            <td class='th-em'>3</td>
          </tr>
          <tr class='group-table-content-row group-no-qualifying-position'>
            <td class='no-qual-pos'>4</td>
            <td class='td-em group-table-team-name'>Tunisia</td>
            <td>3</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>-3</td>
            <td>1</td>
            <td>4</td>
            <td class='th-em'>1</td>
          </tr>
        </table>
      </div>
    )
  }
}

GroupTable.propTypes = propTypes
GroupTable.defaultProps = defaultProps
