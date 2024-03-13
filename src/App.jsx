import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  
const [calc, setCalc] = useState(()=>{
  const storedNumber=localStorage.getItem("total")
  return storedNumber ? (storedNumber):"0";
})
useEffect(()=>{
  localStorage.setItem("total",calc.toString())
},[calc])



const[result,setResult]=useState(()=>{
  const storedResult=localStorage.getItem("results")
  return storedResult ? (storedResult):"0"
})
useEffect(()=>{
  localStorage.setItem("results",result.toString())
},[result])

const ops=['/','+','-','*','.']


const updateCalc=(value)=>{

  if(
    ops.includes(value) && calc ===''||
    ops.includes(value) && ops.includes(calc.slice(-1))
  ){
    return;
  }
  setCalc(calc+value)


}




const deleteLast=()=>{
  if(calc==''){
    return;
  }
  const value=calc.slice(0,-1)
  setCalc(value)
}



const clearLast=()=>{
  setCalc("")
  setResult("")
 }



 const calculates=()=>{
  setResult(eval(calc).toString())
}

const sine=(value)=>{
  var x = calc.value;
  x = x * Math.PI / 180;
  calc.value = Math.sin(x);
  screenValue = calc.value


}
  return (
    <>
      <div className="container">
        <div className="calculator glass">
          
          
          <input type="text" placeholder='0'  value={calc}/>
          <input type="text" value={result} onChange={calculates} readOnly />

          
          <button  className='acbutton' onClick={clearLast}>AC</button>
          <button className='delbutton' onClick={deleteLast}>DEL</button>
          <button onClick={()=>updateCalc('%')}>%</button>
          <button onClick={()=>updateCalc('/')}>/</button>
          <button onClick={()=>updateCalc('7')}>7</button>
          <button onClick={()=>updateCalc('8')}>8</button>
          <button onClick={()=>updateCalc('9')}>9</button>
          <button onClick={()=>updateCalc('*')}>*</button>
          <button onClick={()=>updateCalc('4')}>4</button>
          <button onClick={()=>updateCalc('5')}>5</button>
          <button onClick={()=>updateCalc('6')}>6</button>
          <button onClick={()=>updateCalc('-')}>-</button>
          <button onClick={()=>updateCalc('1')}>1</button>
          <button onClick={()=>updateCalc('2')}>2</button>
          <button onClick={()=>updateCalc('3')}>3</button>
          <button onClick={()=>updateCalc('+')}>+</button>
          <button onClick={()=>updateCalc('.')}>.</button>
          <button onClick={()=>updateCalc('0')}>0</button>
          <button onClick={()=>updateCalc('(')}>(</button>
          <button onClick={()=>updateCalc(')')}>)</button>
          {/* <button onClick={()=>sine('sin(va)')}>sin</button>
          <button>cos</button>
          <button>tan</button> */}
         
          <button  className='equalbutton'onClick={calculates}>=</button>
          </div>
        </div>
     
     
    </>
  )
}

export default App
