import React from 'react';
import { shallow, mount, render } from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {

	const seedGuesses = [5, 10, 15, 20, 25];

    it('Renders without crashing', () => {
        shallow(<StatusSection guesses={seedGuesses} />);
    });

});