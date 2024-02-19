function solution(survey, choices) {
  surveyObjArr = [
    { R: 0, T: 0 },
    { C: 0, F: 0 },
    { J: 0, M: 0 },
    { A: 0, N: 0 },
  ];

  for (let i = 0; i < choices.length; i++) {
    for (let j = 0; j < surveyObjArr.length; j++) {
      console.log(surveyObjArr[j].key);
      if (survey[0] === surveyObjArr[j].key) {
        surveyObjArr[j].key = choices[i];
      }
    }
  }
  // return answer;
}

solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]);
