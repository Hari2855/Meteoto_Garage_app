import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import Onwaitig2 from '../Booking/Onwaitig2';
import Successmodel1 from '../Booking/Successmodel';

const ParentComponent = () => {
    const [container1Translation] = useState(new Animated.Value(0));

    return (
        <>
            <Onwaitig2 container1Translation={container1Translation} />
            <Successmodel1 container1Translation={container1Translation} />
        </>
    );
};

export default ParentComponent;
