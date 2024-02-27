function Experience1({jobTitle, company}) {
  return (
    <>
      <hr />
      <h3>{jobTitle}</h3>
      <h4>{company}</h4>
      <ul>
        <li>Developed a full stack application</li>
        <li>Collaborated with my team using Git and GitHub</li>
        <li>Completed projects within tight deadlines</li>
      </ul>
    </>
  )
}

function Experience2({color}) {
  return (
    <>
      <hr />
      <h3 style={{color: color}}>Software Developer</h3>
      <h4>Sigma School Sdn Bhd</h4>
      <ul>
        <li>Developed a front-end application</li>
        <li>Collaborated with my team using Git and GitHub</li>
        <li>Completed projects within tight deadlines</li>
      </ul>
    </>
  )
}


function App() {
  return (
    <>
      <h1>Jaden</h1>
      <h2>Resume</h2>
      <Experience1 jobTitle={"Software Developer"} company={"Sigma Lab Sdn Bhd"} />
      <Experience2 color={"blue"}/>
    </>
  );
}

export default App;
