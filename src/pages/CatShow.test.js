import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from './CatShow'
import cats from './mockCats'

Enzyme.configure({adapter: new Adapter()})

describe("when the CatShow renders...", () => {
   // const {cats} = this.props
    it("display an show heading", () => {
    //Arrange
    const renderedCatShow = shallow(<CatShow cats={cats}/>)
    //variable that class on shallow which is passed an arguemnt
    const showHeading = renderedCatShow.find("h2")
    
    //Assert
    expect(showHeading.text()).toEqual(" This is CatIndex.js file section ")
    

  })
})

