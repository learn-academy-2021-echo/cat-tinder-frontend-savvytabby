
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({adapter: new Adapter()})

describe("when the NotFound loads...", () => {
  it("display a navlink on the not found", () => {
    //Arrange
    const renderedNotFound = shallow(<NotFound/>)
    //variable that class on shallow which is passed an arguemnt
    const navLinkWrapper = renderedNotFound.find("NavLink")
    //Assert
    expect(navLinkWrapper.length).toEqual(1)

  })

  it("display a 404 img on the not founder", () => {
    //Arrange
    const renderedPostImg = shallow(<NotFound/>)
    //variable that class on shallow which is passed an arguemnt
    const imgWrapper = renderedPostImg.find("img")
    //Assert
    expect(imgWrapper.length).toEqual(1)

  })
  
})
