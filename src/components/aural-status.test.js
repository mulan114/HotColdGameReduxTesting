import React from 'react';
import { shallow, mount, render } from 'enzyme';

import { AuralStatus } from './aural-status';

describe('<AuralStatus />', () => {

    it('Renders without crashing', () => {
        shallow(<AuralStatus />);
    });

});