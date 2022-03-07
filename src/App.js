import React from 'react';

function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}

function List() {
  return <li>
    <ul>sgfsgs</ul>
  </li>
}

function App() {
  return (
    <div className="App">
      <div>dgfhjdlfkjhg</div>
      <Welcome name='Nastya' />
      <List />
    </div>
  );
}

export default App;
