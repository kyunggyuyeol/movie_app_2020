import React from 'react';

function Food(prop)
{
  return <h1>I like {prop.fav}</h1>;
}

function App() {
  return (<div>
    <h1>Hello</h1>
    <Food fav="Kimchi" something={true} papapa={['hello', 1, 2, 3, 4, 5, true]} />
  </div>); 
}

export default App;
