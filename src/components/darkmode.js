import React,{useRef,useState} from 'react'


function Darkmode (){
    let [ischecked,setchecked]=useState(false);
    let html=useRef(document.documentElement);
    function handleclick(e){
        setchecked(e.target.checked);
       html.current.classList.toggle('dark');
       if(html.current.classList.contains('dark'))
       {
        html.current.style.backgroundColor="black";
       }
       else
       {
        html.current.style.backgroundColor="white";
       }
      
       console.log(html.current);
    }
  return (
    <div className="flex items-center mr-0 lg:mr-8 w-16">
        <div className={`transition-all duration-1000 border-2   h-7 rounded-full w-16 flex ${ischecked?"justify-end border-white":"justify-start border-black"}`} >
      <input type="checkbox" checked={ischecked} className={`w-6 h-6 rounded-full relative  appearance-none border bg-green-500`} onClick={handleclick}></input> 
       </div>
    </div>
  )
}

export default Darkmode
