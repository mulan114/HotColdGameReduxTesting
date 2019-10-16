import React from 'react';
import { shallow, mount, render } from 'enzyme';

import { Feedback } from './feedback';

describe('<Feedback />', () => {

    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });

    it('Renders with proper information', () => {
    	const testFeedback = "Feedback Text";
    	const wrapper = shallow(<Feedback feedback={testFeedback} />);
    	expect(wrapper.contains(testFeedback)).toEqual(true);
    });

});