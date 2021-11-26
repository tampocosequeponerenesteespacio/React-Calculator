import React, { useState } from "react"
import {FiDelete} from 'react-icons/fi'


const App = () => {
  const [currentOp, setCurrentOp] = useState('')
  const [prevOp, setPrevOp] = useState('')
  const [operator, setOperator] = useState('')

const evaluate = () => {
  const curr = parseFloat(currentOp)
  const prev = parseFloat(prevOp)
  switch (operator) {
    case '+':
      return (prev+curr).toString()
    case '-':
      return (prev-curr).toString()
    case 'x':
      return (prev*curr).toString()
    case '÷':
      return (prev/curr).toString()
  }
}


const handleDigit = (e) => {
  const digit = e.target.name
  if (currentOp === '0') {
    setCurrentOp(digit)
    return
  }
  if (currentOp.includes('.') && digit === '.') return
  setCurrentOp(currentOp+digit)
}

const handleOperator = (e) => {
  const op = e.target.name

  if (currentOp === '.') return
  
  if (currentOp && prevOp && !operator ) {
    setOperator(op)
    setPrevOp(currentOp)
    setCurrentOp('')
    return
  }
  
  if (!currentOp && operator ) {
    setOperator(op)
    return
  }

  if (currentOp  && prevOp ) {
    setPrevOp(evaluate())
    setCurrentOp('')
    setOperator(op)
    return
  }

  if (!currentOp && !operator ) {
    setOperator(op)
    return
  }

  setOperator(op)
  setPrevOp(currentOp)
  setCurrentOp('')  
}

const handleAC = () => {
  setPrevOp('')
  setCurrentOp('')
  setOperator('')
}

const handleEqual = () => {
  if (prevOp === '' || currentOp === '' || operator === '') return
  if (currentOp === '.') return
  setPrevOp(evaluate())
  setCurrentOp('')
  setOperator('')
}

const handleDel = () => {
  if (currentOp) {
    setCurrentOp(currentOp.slice(0,-1))
  }
}

  return (
    <>
      <div id='main'>
        
        <div id='calculator'>
          <div id='output'>
            <div id='prev'>{prevOp} {operator}</div>
            <div id='curr'>{currentOp}</div>
          </div>
          <button name='ac' className='span2' onClick={handleAC} >AC</button>
          <button name='del' onClick={handleDel} ><FiDelete size='1.5em' /></button>
          <button name='÷' onClick={handleOperator} >÷</button>
          <button name='7' onClick={handleDigit} >7</button>
          <button name='8' onClick={handleDigit} >8</button>
          <button name='9' onClick={handleDigit} >9</button>
          <button name='x' onClick={handleOperator} >X</button>
          <button name='4' onClick={handleDigit} >4</button>
          <button name='5' onClick={handleDigit} >5</button>
          <button name='6' onClick={handleDigit} >6</button>
          <button name='-' onClick={handleOperator} >-</button>
          <button name='1' onClick={handleDigit} >1</button>
          <button name='2' onClick={handleDigit} >2</button>
          <button name='3' onClick={handleDigit} >3</button>
          <button name='+' onClick={handleOperator} >+</button>
          <button name='.' onClick={handleDigit} >.</button>
          <button name='0' onClick={handleDigit} >0</button>
          <button name='=' className='span2' onClick={handleEqual} >=</button>
        </div>
      </div>
      <div id='footer'>
      Copyright © 2021 Tampoco
      </div>
    </>
  )
}

export default App;
