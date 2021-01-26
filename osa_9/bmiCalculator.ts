interface Values {
    height: number;
    weigth: number;
  }
  
  const parseArguments = (args: Array<string>): Values => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');
  
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
      return {
        height: Number(args[2]),
        weigth: Number(args[3])
      };
    } else {
      throw new Error('Provided values were not numbers!');
    }
  };
  
  export const calculateBmi = (height: number, weigth: number):string => {
            const meters=height/100;
            const bmi = weigth/(meters*meters);
            console.log(bmi);
            if(bmi<18.5){
                return 'Abnormal: (Underweight)';
            } else if(bmi>=18.5 && bmi <= 25){
                return 'Normal: (healthy weight)';
            } else if(bmi>25 && bmi<=30){
                return 'Abnormal: (Overweight)';
            } else if(bmi>30){
                return 'Abnormal: (Obese)';
            }
            return 'something else';
        };
  
  try {
      
    const { height, weigth } = parseArguments(process.argv);
    console.log(calculateBmi(height, weigth));
  } catch (e) {
    console.log('Error, something bad happened, message: ', e.message);
  }