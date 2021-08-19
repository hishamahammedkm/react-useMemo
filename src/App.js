import './App.css';
import React, {useState,useMemo} from 'react'
function App() {

  const [counter,setCounter] = useState(1)
  const result = useMemo(()=>{
    return factorial(counter)
  },[counter])
  const [name,setName] = useState("")
  console.log('ok');
 
  return (
    <>
      <h1>factorial of {counter} is {result}</h1>
      <button onClick={()=>setCounter(counter +1)}>Increment</button>
      <button onClick={()=>setCounter(counter -1)}>Decrement</button>
      <div>
        <input onChange={(e)=>setName(e.target.value)} value={name} type="" name="" id="" />
        
      </div>
      <DisplyName name={name} />
    </>
  );
}

const DisplyName = React.memo(({name})=>{
  console.log('nameeeee')
  return <h2>my name is {name}</h2>
})

function factorial(n){
  let i = 0
  while (i < 200000000) i++;
  if(n<0){
    return -1
  }
  if(n===0){
    return 1
  }
  return n * factorial(n-1)
}
export default App;
