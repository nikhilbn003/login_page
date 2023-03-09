import React from 'react' 
 
const dashboard = () => {  
  return (  
    <div> 
         <h2 className='font-bold text-center'>welcome to dashboard </h2> 
         <form > 
          <div className='grid grid-row gap-4 p-1'> 
          <input type="text" className="ml-12 mt-3 items-center w-48 " placeholder='enter the name'></input>
          <input type="text" className="ml-12 mt-3 items-center w-48" placeholder='enter the number'>
 </input> 
          </div> 
         </form>  
    </div> 
  ) 
}  

export default dashboard 