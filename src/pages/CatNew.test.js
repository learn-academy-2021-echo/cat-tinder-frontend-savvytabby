import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from './CatNew'

Enzyme.configure({adapter: new Adapter()})

describe("when the CatNew loads...", () => {
    it("display an show h2", () => {
    const renderedCatNew = shallow(<CatNew />)
    const h2Wrapper = renderedCatNew.find("h2")
    expect(h2Wrapper.length).toEqual(1)
    })

    it("displays a form for the user to fill out", () => {
        const catNewRender = shallow(<CatNew/>)
        const formWrapper = catNewRender.find("Form")
        expect(formWrapper.length).toEqual(1)
    })
})