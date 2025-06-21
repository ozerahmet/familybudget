import Header from './Header'; 
import Content from './Content'; 
import Total from './Total'; 

const App = () => {
  const courseHeader = 'Half Stack application development';
  const courses = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14}
  ];
  
  return (
    <>
      <Header course={courseHeader} />
      <Content courses={courses} />
      <Total courses={courses}/>
    </>
  )
}

export default App
