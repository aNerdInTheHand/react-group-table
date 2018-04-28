import GroupTable from '../../src/groupTable'
import teams from '../tools/redux/group/initialState'

const shallowNoGroup = shallow(<GroupTable teams={teams.teams} />)
const shallowGroup = shallow(<GroupTable teams={teams.teams} groupName='Group H' />)
const hideOptional = shallow(<GroupTable teams={teams.teams} />)

const tableWrapper = shallowNoGroup.find('.table-wrapper')
const groupTable = shallowNoGroup.find('.group-table')
const headerRow = shallowNoGroup.find('.group-table-header-row')
const noGroupName = shallowNoGroup.find('.group-table-group-name')
const groupName = shallowGroup.find('.group-table-group-name')

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
    it('test button should be type <button>', () => {
      assert.equal(headerRow.type().displayName, 'styled.button')
    })
    it('test button should say "Click Me!"', () => {
      assert.equal(headerRow.props().children, 'Click Me!')
    })
    it('test button on click should call onButtonClick function', () => {
      const onClickSpy = sinon.spy()
      shallow(<GroupTable onButtonClick={onClickSpy} />).find('#shallowNoGroup-button').simulate('click')
      assert.isTrue(onClickSpy.calledOnce)
    })
  })
})
