const Home = () => {

  const handleClick = (e) => {
    console.log('hello', e);
  }

  const handleClickAgain = (name) => {
    console.log('hello ' + name);
  }

  return (
    <div className="home">
      <h2>HomePage</h2>
      <button onClick={ handleClick }>Click me</button>
      {/* Long version */}
      <button onClick={ () => {handleClickAgain("john")} }>Click me again</button>
      {/* Short version */}
      <button onClick={ () => handleClickAgain("john") }>Click me again</button> 
    </div>
  );
}

export default Home;