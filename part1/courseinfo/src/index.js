import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.ex_num}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.name1} ex_num={props.ex1_num}/>
      <Part name={props.name2} ex_num={props.ex2_num}/>
      <Part name={props.name3} ex_num={props.ex3_num}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exericse {props.tot_ex}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercise: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercise: 7
  }

  const part3 = {
    name: 'State of a component',
    exercise: 14
  }

  return (
    <div>
      <Header name={course} />
      <Content name1={part1.name} ex1_num={part1.exercise} 
               name2={part2.name} ex2_num={part2.exercise} 
               name3={part3.name} ex3_num={part3.exercise} />
      <Total tot_ex={part1.exercise + part2.exercise + part3.exercise} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))