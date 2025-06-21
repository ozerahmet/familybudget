const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.courses[0].exercises + props.courses[1].exercises + props.courses[2].exercises}</p>
    </>
  )
}

export default Total
