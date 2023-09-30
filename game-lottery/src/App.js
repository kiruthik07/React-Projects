import './App.css';
import { useState } from 'react'

function App() {

  const [ number1, setNumber1 ] = useState(0)
  const [ number2, setNumber2 ] = useState(0)
  const [ number3, setNumber3 ] = useState(0)
  const [ buttonValue, setButtonValue ] =useState("Click here")
  const [ result, setResult ] = useState("Check your luck")

  var num1, num2, num3

  function generateRandom() {
     
    var loading = setInterval( () => {

      num1 = Math.floor(Math.random() * 9)
      num2 = Math.floor(Math.random() * 9)
      num3 = Math.floor(Math.random() * 9)

      setNumber1(num1)
      setNumber2(num2)
      setNumber3(num3)

    }, 50)

    setTimeout( () => {
      
      num1 === num2 && num2 === num3 ? setResult("Congragulations, you won") : setResult("Sorry, you lost")
      setButtonValue("Retry")
      clearInterval(loading)

    },2000)
  }

  return (
    <div className="container">
      <h1 className="heading">Lottery Machine</h1>
        
        <main className="card-container">
            <div className="card card1">
                <h1 id="num1">{number1}</h1>
            </div>
            <div className="card card2">
                <h1 id="num2">{number2}</h1>
            </div>
            <div className="card card3">
                <h1 id="num3">{number3}</h1>
            </div>
        </main>
    
        <button id="button" onClick={generateRandom}>{buttonValue}</button>
        <h1 id="result">{result}</h1>
    </div>
  );
}

export default App;
