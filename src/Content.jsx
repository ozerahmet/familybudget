const Content = (props) => {
  console.log(props);
  return (
    <>
      <Part part={props.courses[0].part} exercise={props.courses[0].exercises}/>
      <Part part={props.courses[1].part} exercise={props.courses[1].exercises}/>
      <Part part={props.courses[2].part} exercise={props.courses[2].exercises}/>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercise}</p>
    </>
  )
}

export default Content
