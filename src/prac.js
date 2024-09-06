import React,{useState,useEffect,useRef}from 'react'

const prac = () => {
    let [name,setName]=useState("");
    let prevName=useRef();
    useEffect(()=>{
    prevName.current=name;
    },[name])
  return (
    <>
<input value={name} onChange={e=>setName(e.target.value)}></input>
<div>My name is {name} and it used to ve {prevName.current}</div>
</>
  )
}

export default prac
