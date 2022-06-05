import { useState } from 'react'

// Create bolded header component
const Header = ({text})=>  <h1> <span style={{fontWeight: 'bold'}}> {text} </span> </h1> 

// Tracks number of votes per anecdote
const Votes = ({votes}) => <p> has {votes} votes </p>

// Create button component 
const Button = ({onClick, text}) => <button onClick = {onClick}> {text} </button>

// Create most voted acnecdote component
const Most = ({anecdote, votes}) => <p> {anecdote} </p>

// Get random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max) 
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
    
  // Save clicks for each button's state
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(7).fill(0)) // Create zero-filled array of anecdote length 

  // Incremement selected state counter
  const selectClick = () => {
    setSelected(getRandomInt(7))
  }
  const voteClick = () =>  {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)

  }
  
  // Calculates highest number of votes and its anecdote
  const maxVotes = Math.max(...votes)
  const maxIndex = anecdotes[votes.indexOf(maxVotes)]

  return (
    <div>
      <Header text='Anecdote of the day'/>
      {anecdotes[selected]}
      <Votes votes={votes[selected]}/>
      <Button onClick = {selectClick} text='next anecdote' />
      <Button onClick = {voteClick} text='vote' />
      <Header text='Anecdote with the most votes'/>
      <Most anecdote={maxIndex} />
      <Votes votes={maxVotes} />
    </div> 
    
    
  )
}

export default App