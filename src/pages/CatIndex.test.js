
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from './CatIndex'

Enzyme.configure({adapter: new Adapter()})

describe("when the CatIndex renders...", () => {
  it("display an index heading", () => {
    //Arrange
    const renderedCatIndex = shallow(<CatIndex/>)
    //variable that class on shallow which is passed an arguemnt
    const indexHeading = renderedCatIndex.find("h2")
    //Assert
    expect(indexHeading.text()).toEqual(" This is CatIndex.js file section ")

  })
})
