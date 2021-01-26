interface ExerciseValues {
    exersices: Array<number>;
    target: number;
  }

  interface returnValues{ 
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
    }
  

    const parseExercises = (args: Array<string>): ExerciseValues => {
        if (args.length < 4) throw new Error('Not enough arguments');
      
        if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
          return {
            target: Number(args[2]),
            exersices: args.splice(3,args.length).map(a=>Number(a))
          };
        } else {
          throw new Error('Provided values were not numbers!');
        }
      };
  
  export const calculateExercises = (exersices: Array<number>, target: number): returnValues => {
    
    const avg = exersices.reduce((a, b) => a + b) / exersices.length;
    let rating=0;
    let descrip='missing';
    if(avg<target-1){
        rating=1;
        descrip='you shoud train more';
    } else if(avg>=target-1 && avg<=target+1){
        rating=2;
        descrip='not too bad but could be better';
    } else if(avg>target+1){
        rating=3;
        descrip='well done!';
    }
    return(
        { 
        periodLength: exersices.length,
        trainingDays: exersices.filter(v=>v>0).length,
        success: avg >= target,
        rating: rating,
        ratingDescription: descrip,
        target: target,
        average: avg
        }
    );
  };
  
  try {
    const { exersices, target } = parseExercises(process.argv);
    console.log(exersices,target);
    console.log(calculateExercises(exersices,target));
  } catch (e) {
    console.log('Error, something bad happened, message: ', e.message);
  }