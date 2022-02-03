import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from './CatShow'


Enzyme.configure({adapter: new Adapter()})

describe("when the CatShow renders...", () => {
    it("display an show heading", () => {
    //Arrange
    const renderedCatShow = shallow(<CatShow />)
    //variable that class on shallow which is passed an arguemnt
    const showHeading = renderedCatShow.find("h2")
    
    //Assert
    expect(showHeading.text()).toEqual(" This is CatShow.js file section ")
    

  })
})

