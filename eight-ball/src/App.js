import React, {useState} from 'react';
import './App.css';


function App() {

const [userInput, setUserInput] = useState('');
const [randomIndex, setRandomIndex] = useState('');
const [error, setError] = useState('');
const [question, setQuestion] = useState("");


{/*Using  handleChange method we are setting out user’s question to userInput property of our state.*/}
const handleChange = (event) => {
  event.preventDefault();
  console.log(event.target.value);
  setUserInput(event.target.value);
}
{/* handleClick() check for userInput*/}
const handleClick = () => {

  if(userInput)
  {
    setError('')
  setRandomIndex(Math.round(Math.random() * 20));
  setUserInput('');
  }
  else{
    setError('Enter a question to know the answer!')
  }
  console.log(randomIndex);
}

const possibleAnswers = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes, definitely',
  'You may rely on it',
  'As I see it, yes',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  'Don\'t count on it',
  'My reply is no',
  'My sources say no',
  'Most likely',
  'Outlook not so good',
  'Very doubtful'
];
const answer = possibleAnswers[randomIndex];
  return (
    <div className="App">
    <h1 className="title">Press The&nbsp;<span>8</span>&nbsp;BALL</h1>
      <p className="info">Ask a question and tap the 8 for an answer...</p>
      <input type="text" className="question" value={userInput} onChange={handleChange} />
      <div className="eight-ball">
      
     {/*onClick() handler is triggered when the ball is clicked and runs the handleClick*/}

        <div className="content" onClick={handleClick}>
        {error ? <p className="error">{error}</p> :
          answer ? <p className="answer">{answer}</p> : <p className="eight">8</p>}
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
