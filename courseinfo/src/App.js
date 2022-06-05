
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
return (
  <p> {props.part} {props.exercises} </p>
)
 
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
   
  )
}

const Total = (props) => {
  return ( 
    <p> 
      {/* uses indexing plus object fields to get the value in parts array */}
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises }
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [  
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      {/* now since course is one single Javascript object, we can use methods to find the values we're looking for */}
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App