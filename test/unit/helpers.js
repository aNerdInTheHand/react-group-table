import chai from 'chai'
import sinon from 'sinon'
import { shallow, mount, render } from 'enzyme'
import React from 'react'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

global.expect = chai.expect
global.mount = mount
global.render = render
global.shallow = shallow
global.assert = chai.assert

global.React = React
global.sinon = sinon
global.chai = chai
