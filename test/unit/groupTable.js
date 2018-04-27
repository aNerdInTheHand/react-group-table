import Template from '../../src/scoreboard'

const template = shallow(<Template />)

const testWrapper = template.find('#template-wrapper')
const testHeader = template.find('#template-title')
const testButton = template.find('#template-button')

describe('<Template />', () => {
  it('should have a Wrapper', () => {
    assert.equal(testWrapper.exists(), true)
  })
  it('should have a test header', () => {
    assert.equal(testHeader.exists(), true)
  })
  it('should have a test button', () => {
    assert.equal(testButton.exists(), true)
  })

  describe('Test Header', () => {
    it('test header should be type <h1>', () => {
      assert.equal(testHeader.type().displayName, 'styled.h1')
    })
    it('test header should say "Hello World!"', () => {
      assert.equal(testHeader.props().children, 'Hello World!')
    })
  })

  describe('Test Button', () => {
    it('test button should be type <button>', () => {
      assert.equal(testButton.type().displayName, 'styled.button')
    })
    it('test button should say "Click Me!"', () => {
      assert.equal(testButton.props().children, 'Click Me!')
    })
    it('test button on click should call onButtonClick function', () => {
      const onClickSpy = sinon.spy()
      shallow(<Template onButtonClick={onClickSpy} />).find('#template-button').simulate('click')
      assert.isTrue(onClickSpy.calledOnce)
    })
  })
})
