import GroupTable from '../../src/groupTable'
import teams from '../tools/redux/group/initialState'
const FALSE = false

const shallowNoGroup = shallow(<GroupTable teams={teams.teams} />)
const shallowGroup = shallow(<GroupTable teams={teams.teams} groupName='Group H' />)
const shallowGroupMin = shallow(<GroupTable
  teams={teams.teams}
  showGoalsConceded={FALSE}
  showGoalsScored={FALSE}
  showPositions={FALSE}
/>)

const tableWrapper = shallowNoGroup.find('.table-wrapper')
const groupTable = shallowNoGroup.find('.group-table')
const headerRow = shallowNoGroup.find('.group-table-header-row')
const noGroupName = shallowNoGroup.find('.group-table-group-name')
const groupName = shallowGroup.find('.group-table-group-name')
const maxHeaders = shallowGroup.find('.group-table-header-row th')
const minHeaders = shallowGroupMin.find('.group-table-header-row th')

describe('<GroupTable />', () => {
  it('should have a Wrapper', () => {
    assert.equal(tableWrapper.exists(), true)
  })
  it('should have a test header', () => {
    assert.equal(groupTable.exists(), true)
  })
  it('should have a test button', () => {
    assert.equal(headerRow.exists(), true)
  })

  describe('Group Name', () => {
    it('Group name should not be displayed', () => {
      assert.equal(noGroupName.text(), '')
    })
    it('Group name should be Group H', () => {
      assert.equal(groupName.text(), 'Group H')
    })
  })

  describe('Optional columns', () => {
    it('Should have all the columns', () => {
      assert.equal(maxHeaders.length, 10)
    })
    it('Should only display non-optional columns', () => {
      assert.equal(minHeaders.length, 7)
    })
  })
})
