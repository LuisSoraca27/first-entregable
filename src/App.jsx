import { useState } from 'react'
import './App.css'
import QuoteBox from './Components/QuoteBox'
import './Quotes.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="box">
      <QuoteBox/>
    </div>
  )
}

export default App
