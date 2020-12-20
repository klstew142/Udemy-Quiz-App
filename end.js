const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];


const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});


saveHighScore = e => {
   console.log('clicked the save button!')
   e.preventDefault();

   const score = {
       score: Math.floor(Math.random() * 100),
       name: username.value
   };

   //adds score to array
   highScores.push(score);
   //sorts the scores high-low
   highScores.sort( (a,b)=> b.score - a.score);
   //removes any that aren't in the top 5
   highScores.splice(5);

   //update local storage

   localStorage.setItem('highScores', JSON.stringify(highScores));
   window.location.assign('/');
};