



interface CoursePartBase {
    name: string;
    exerciseCount: number;
  }

  interface CoursePartDescrip extends CoursePartBase {
    description: string;
  }
  
  interface CoursePartOne extends CoursePartDescrip {
    name: "Fundamentals";
    
  }
  
  interface CoursePartTwo extends CoursePartBase {
    name: "Using props to pass data";
    groupProjectCount: number;
  }
  
  interface CoursePartThree extends CoursePartDescrip {
    name: "Deeper type usage";
    exerciseSubmissionLink: string;
  }

  interface CoursePartFour extends CoursePartDescrip {
    name: "Mycourse";
  }
  
  export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | CoursePartFour;
