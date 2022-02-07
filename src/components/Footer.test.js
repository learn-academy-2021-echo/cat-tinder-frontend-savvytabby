import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';

Enzyme.configure({ adapter: new Adapter() });

describe('when the Footer loads...', () => {
	it('display a navlink on the header', () => {
		//Arrange
		const renderedFooter = shallow(<Footer />);
		//variable that class on shallow which is passed an arguemnt
		const navLinkWrapper = renderedFooter.find('NavLink');
		//Assert
		expect(navLinkWrapper.length).toEqual(1);
	});
	it('display a section on the header', () => {
		//Arrange
		const renderedFooter = shallow(<Footer />);
		//variable that class on shallow which is passed an arguemnt
		const sectionWrapper = renderedFooter.find('section');
		//Assert
		expect(sectionWrapper.length).toEqual(1);
	});
});
