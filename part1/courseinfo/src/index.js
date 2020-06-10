import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content name1={part1} ex1_num={exercises1} 
               name2={part2} ex2_num={exercises2} 
               name3={part3} ex3_num={exercises3} />
      <Total tot_ex={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))