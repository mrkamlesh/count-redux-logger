import React from 'react'
import { useDispatch } from 'react-redux';
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter';
import { decrement, increment } from './store/actions';




function App() {

  const dispach = useDispatch();

  function handleIncrement() {
    // console.log("called")
    // this.setState({ count: this.state.count + 1 });
    dispach(increment());
  }

  function handleDecrement() {
    // this.setState({ count: this.state.count - 1 });
    dispach(decrement());
  }

  return (
    <div>
      <header className="App-header">
        <Counter />
      </header>

      <div className="App-body">

        <Button onClick={handleIncrement} name="+" />
        <Button onClick={handleDecrement} name="-" />
      </div>
    </div>
  )
}

export default App;
