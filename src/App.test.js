import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import Home from './pages/Home'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When App renders", () => {
  
  it("displays a header and footer", () => {
    //Arrange
    const renderedApp = shallow(<App/>)
    //variable that class on shallow which is passed an arguemnt
    const renderedHeader = renderedApp.find("Header")
    const renderedFooter = renderedApp.find("Footer")
    //Assert
    expect(renderedHeader.length).toEqual(1)
    expect(renderedFooter.length).toEqual(1)
  })
  it("provideing a route'/' to the home component",() => {
      const renderedApp = shallow(<App/>)
      const renderedHomeRoute = renderedApp.find('[path="/"]')
      expect(renderedHomeRoute.length).toEqual(1)
      expect(renderedHomeRoute.props().component).toEqual(Home)
  })
})