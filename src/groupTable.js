import React, { Component } from 'react'
import propTypes, { defaultProps } from './propTypes/groupTable'

export default class GroupTable extends Component {
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
            <tr className='group-table-content-row group-qualifying-position'>
              <td className='qual-pos'>1</td>
              <td className='td-em group-table-team-name'>Romania</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
              <td>0</td>
              <td>2</td>
              <td>4</td>
              <td>7</td>
              <td className='th-em'>2</td>
            </tr>
            <tr className='group-table-content-row group-qualifying-position last-qualifying-pos'>
              <td className='qual-pos'>2</td>
              <td className='td-em group-table-team-name'>England</td>
              <td>3</td>
              <td>2</td>
              <td>0</td>
              <td>1</td>
              <td>3</td>
              <td>5</td>
              <td>2</td>
              <td className='th-em'>2</td>
            </tr>
            <tr className='group-table-content-row group-no-qualifying-position'>
              <td className='no-qual-pos'>3</td>
              <td className='td-em group-table-team-name'>Colombia</td>
              <td>3</td>
              <td>1</td>
              <td>0</td>
              <td>2</td>
              <td>-2</td>
              <td>1</td>
              <td>3</td>
              <td className='th-em'>3</td>
            </tr>
            <tr className='group-table-content-row group-no-qualifying-position'>
              <td className='no-qual-pos'>4</td>
              <td className='td-em group-table-team-name'>Tunisia</td>
              <td>3</td>
              <td>0</td>
              <td>1</td>
              <td>2</td>
              <td>-3</td>
              <td>1</td>
              <td>4</td>
              <td className='th-em'>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

GroupTable.propTypes = propTypes
GroupTable.defaultProps = defaultProps
