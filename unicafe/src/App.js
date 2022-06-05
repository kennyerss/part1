import { useState } from 'react'

// Create bolded header component
const Header = ({text})=> <p> <span style={{fontWeight: 'bold'}}> {text} </span> </p>

// Create button component 
const Button = ({onClick, text}) => {
  <button onClick = {onClick}>
    {text}
  </button>
}
// Good component
const Good = ({text, good}) => <tr>{text} <td>{good} </td> </tr>

// Neutral component 
const Neutral = ({text, neutral}) => <tr>{text} <td> {neutral} </td> </tr>

// Bad component 
const Bad = ({text, bad}) => <tr>{text} <td> {bad} </td> </tr>

// All component
const All = ({text, all}) => <tr>{text} <td> {all} </td> </tr>

// Average component
const Average = ({text, good, bad, all}) => <tr>{text} <td> {(good-bad)/all} </td> </tr>

// Positive component
const Positive = ({text, good, all}) => <tr> {text} <td> {good/all*100} % </td> </tr>

// Statistics component 
const Statistics = ({good, neutral, bad, all}) => {
  if(all == 0) { // When all clicks are 0, prompt user to click buttons to receive feedback
    return (
      <div>
        No feedback given 
      </div>
    )
  }
  return (
    <table>
      <Good text='good' good={good} /> 
      <Neutral text='neutral' neutral={neutral}/>
      <Bad text='bad' bad={bad}/>
      <All text='all' all={all}/>
      <Average text='average' good={good} bad={bad} all={all}/>
      <Positive text='positive' good={good} all={all}/>
    </table>
    
  )
}
const App = () => {

  // Save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Gets all the feedback
  const [all, setAll] = useState(0)

  // Increment state counter for each click
  const goodClick = () => {
    return (
      setGood(good+1),
      setAll(all+1)
    )
  }
  const neutralClick = () => {
    return (
      setNeutral(neutral+1),
      setAll(all+1)
    )
  }
  const badClick = () => {
    return (
      setBad(bad+1),
      setAll(all+1)
    )
  }

  return (
    <div>
      <Header text="give feedback" />
      {/* Increment clicks on buttons onClick */}
      <Button onClick={goodClick} text='good'/>
      <Button onClick={neutralClick} text='neutral' />
      <Button onClick={badClick} text='bad' />
      <Header text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App