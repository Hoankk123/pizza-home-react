export const createScores = (...scores) => {
    return scores;
};

export const evaluatePerformance = (average) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            if(average >= 8){
                resolve ("Excellent Student");
            } else {
                resolve ("Need Improvement");
            }
        }, 2000);
    });
};

