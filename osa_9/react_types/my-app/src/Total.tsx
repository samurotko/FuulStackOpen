import React from 'react';

interface Parts {
    name: string,
    exerciseCount: number
}

const Total: React.FC<{courseParts: Array<Parts>}> = (props) => {
    const courseParts = props.courseParts;
    return(
        <div>
        <p>
            Number of exercises{" "}
            {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
        </p>
        </div>
);
};
export default Total;