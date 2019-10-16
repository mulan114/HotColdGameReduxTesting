import React from 'react';
import { shallow, mount, render } from 'enzyme';

import { TopNav } from './top-nav';
import { restartGame, onGenerateAuralUpdate } from '../actions';

describe('<TopNav />', () => {

    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });
    
    it('Renders the links correctly', () => {
        const wrapper = shallow(<TopNav />);
        expect(wrapper.find('.what').hasClass('what')).toEqual(true);
        expect(wrapper.find('.new').hasClass('new')).toEqual(true);
    });

    it('Should dispatch restartGame when link clicked', () => {
    	const dispatch = jest.fn();
    	const wrapper = mount(<TopNav dispatch={dispatch} />);
    	const link = wrapper.find('.new');
    	link.simulate('click', {
    		preventDefault() {}
    	});
    	expect(dispatch).toHaveBeenCalled();
    });

        it('Should dispatch generateAuralUpdate when link clicked', () => {
    	const dispatch = jest.fn();
    	const wrapper = mount(<TopNav dispatch={dispatch} />);
    	const link = wrapper.find('.status-link');
    	link.simulate('click', {
    		preventDefault() {}    		
    	});
    	expect(dispatch).toHaveBeenCalled();
    });

})