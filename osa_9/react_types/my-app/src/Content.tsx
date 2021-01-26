import React from 'react';
import PropTypes from 'prop-types';
import {CoursePart} from './types';
import Part from './Part';




const Content: React.FC<{courseParts: Array<CoursePart>}> = (props) => {
    const courseParts = props.courseParts;
    console.log('parts',courseParts,Part(courseParts));
    return <div>{Part(courseParts)}</div>;
};

export default Content;