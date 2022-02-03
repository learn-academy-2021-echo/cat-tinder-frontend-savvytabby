
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({adapter: new Adapter()})

describe("when the header loads...", () => {
  let header
  beforeEach(()=>{
    header = shallow(<Header/>)
  })
  it("display a navlink on the header", () => {

    //variable that class on shallow which is passed an arguemnt
    const navLinkWrapper = header.find("NavLink")
    //Assert
    expect(navLinkWrapper.length).toEqual(3)

  })
  it("display a section on the header", () => {
    //Arrange

    //variable that class on shallow which is passed an arguemnt
    const sectionWrapper = header.find("section")
    //Assert
    expect(sectionWrapper.length).toEqual(3)

  })
})
