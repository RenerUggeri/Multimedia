/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/ correct = 0;


// 2. Store the rank of a player
rank = "not known"

// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/ 
answer1 = prompt("Name the programming language that you are learning?")
if(answer1.toUpperCase() == 'JAVASCRIPT'){
  correct +=1

  console.log(correct)
}
answer2 = prompt("What is the programmming language used for web content creation?")
if(answer2.toUpperCase() == 'HTML'){
  correct +=1

  console.log(correct)
}
answer3 = prompt("What language we use for styling web?")
if(answer3.toUpperCase() == 'CSS'){
  correct +=1

  console.log(correct)
}
answer4 = prompt("What is the name of the college you study in?")
if(answer4.toUpperCase() == 'DOUGLAS'){
  correct +=1

  console.log(correct)
}
answer5 = prompt("What is the name of the city where your college is?")
if(answer5.toUpperCase() == 'NEW WESTMINSTER'){
  correct +=1

  console.log(correct)
}
document.querySelector('main').innerHTML = 'your score is:'  + correct
/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
   
*/
if(correct == 5)
  document.querySelector('main').innerHTML = "Your score is " + correct  + " out of 5!!! " + " Your rank is Gold!!!"
else if(correct >= 3)
  document.querySelector('main').innerHTML = "Your score is " + correct  + " out of 5!!! " + " Your rank is Silver!!!"
else if(correct >= 1)
  document.querySelector('main').innerHTML = "Your score is " + correct  + " out of 5!!! " + " Your rank is Bronze!!!"
else
  document.querySelector('main').innerHTML = "Your score is " + correct  + " out of 5!!! " + " Sorry, No crown!!!"



// 6. Output results to the <main> element



