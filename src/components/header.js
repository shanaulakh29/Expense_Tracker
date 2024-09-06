import React,{useRef,useEffect} from 'react'

function Header(){
  let spanRef=useRef();
  let h1Ref=useRef();
  let cursorRef=useRef();
  function onstart(){

  let array=["Expense","Tracker","App"];

  function sleep(waittime)
  {
    return new Promise((resolve)=>{
      setTimeout(()=>{
       resolve();
      },waittime);
    })
  }
  async function writeloop()
  {
    for(let i=0;i<array.length;i++)
    {
      for(let j=0;j<array[i].length;j++)
      {
        spanRef.current.innerHTML=array[i].substring(0,j+1);
        await sleep(100);
      }
      await sleep(1000);
      for(let j=array[i].length-1;j>=0;j--)
      {
        spanRef.current.innerHTML=array[i].substring(0,j);
        await sleep(100);
      }
      await sleep(100);
    }
  
  }
  writeloop().then(()=>{
    spanRef.current.innerHTML="Expense Tracker App";
    cursorRef.current.classList.remove("cursor");
    cursorRef.current.classList.add("opacity-0");



  });


}
useEffect(()=>{
  onstart();

},[])
  return (
    <div className="flex mx-4  w-3/4 ml-0 md:ml-2 lg:ml-32 xl:ml-40 justify-center p-2 shadow-2xl rounded-3xl border" >
      <h1 ref={h1Ref} className="text-2xl  border border-white dark:border-0 dark:text-white" >
        <span className="text-2xl hidden md:inline">Welcome To The </span>
        <span ref={spanRef} className="text-blue-900 dark:text-white text-2xl" >
        </span><span ref={cursorRef} className="cursor">|</span>
      </h1>
    </div>
  )
}

export default Header
