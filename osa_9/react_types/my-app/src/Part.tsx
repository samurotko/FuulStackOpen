import {CoursePart} from './types';
import React from 'react';

const Part = (courseParts:Array<CoursePart>) => {
    
    const assertNever = (value: never): never => {
        throw new Error(
          `Unhandled discriminated union member: ${JSON.stringify(value)}`
        );
      };

   return(
       <div>
    {courseParts.map(part => {
        console.log(part.name);
        switch(part.name) {
            case "Fundamentals":
                console.log('fundamentals in', part);
                return(
                <div>
                <p>
                    {part.name} {part.exerciseCount} {part.description}
                </p>
                </div>
                );
            case "Using props to pass data":
                
                return(
                    <div>
                    <p>
                        {part.name} {part.exerciseCount} {part.groupProjectCount}
                    </p>
                    </div>
                    );
            case "Deeper type usage":
                
                return(
                    <div>
                    <p>
                        {part.name} {part.exerciseCount} {part.description} {part.exerciseSubmissionLink}
                    </p>
                    </div>
                    );
            case "Mycourse":
                return(
                <div>
                <p>
                    {part.name} {part.exerciseCount} {part.description}
                </p>
                </div>
                );
            default:
                return assertNever(part);
        }
        
    })
}
</div>
   );
    
};

export default Part;