/* import React from "react";
import { useState } from "react";
const Use = () => {
  const [count, setCount] = useState(0);
  const handleDecrease = () => {
    if (count < 0) {
      return 0;
    } else {
      return setCount(count - 1);
    }
  };

  return (
    <div className="flex  p-20 border-4 rounded-3xl bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 border-black w-[40vw] items-center  justify-center mx-auto mt-40">
      <button
        className="border w-9 border-black text-center rounded-md cursor-pointer bg-purple-700 text-white "
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <div className="w-36 text-center font-semibold">
        This is Count: {count}
      </div>
      <button
        className="border w-9 font-bold text-xl border-black text-center rounded-md cursor-pointer bg-purple-700 text-white"
        onClick={handleDecrease}
      >
        -
      </button>
    </div>
  );
};

export default Use;
 */

/* ==================================================================================== */

// import React, { useState } from 'react'

// const UseState2 = () => {
//     const [count, setCount] = useState(0);

//     const handleDecrease = () =>{
//       if(count<=0){
//         return 0;
//       }else{
//         return setCount(count - 1);
//       }
//     }

//   return (
//     <div className='flex flex-col justify-center'>
//       <h1 className='text-center'>Counter is {count}</h1>
//       <div className='flex justify-center gap-4'>
//       <div><button onClick={handleDecrease}>Decreament</button></div>
//       <div><button onClick={() => setCount(count+1)}>Increament</button></div>
//       <button onClick={() => setCount(0)}>Reset</button>
//       </div>
//     </div>
//   )
// }

// export default UseState2

//=================================================================================

/* import React, { useState } from 'react'

const UseState2 = () => {

  const [color,setColor] = useState("red-500");
  return (

    <div className={`h-screen w-screen bg-${color}`}  >

    <button onClick={()=>setColor("yellow-100")} >Yellow</button>
    <button onClick={()=>setColor("blue-200")} >Blue</button>
    <button onClick={()=>setColor("green-300")} >Green</button>

    </div>
  )
}

export default UseState2 */
/* ==========================================================================================
 */


/* import React, { useState } from 'react'

function UseState2() {
  const [open , setOpen] = useState();

  const toggleHandler = () =>{
    setOpen((prev)=>!prev)
  }

  return (
    <div>
      <button onClick={toggleHandler}  >Click me</button>

      {
        open && <div>Hi this is Shaquib</div>
      }
    </div>
  )
}

export default UseState2 */

//===========================================================================================

/* import React, { useState } from "react";

const UseState2 = () => {
  const [content, setContent] = useState("content1");

  return (
    <div className="bg-red-500 h-screen">
      <button onClick={() => setContent("content1")}>Content 1</button>
      <button onClick={() => setContent("content2")}>Content 2</button>
      <button onClick={() => setContent("content3")}>Content 3</button>

      {content === "content1" && <div>Hi this is Shaquib</div>}

      {content === "content2" && <div>Hi this is Akil</div>}

      {content === "content3" && <div>Hi this is Rahul</div>}
    </div>
  );
};

export default UseState2; */
 


//=======================================================================================================

/* import React, { useState } from 'react'
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";


const UseState2 = () => {

  const [email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const SubmitHandler = (e) =>{
    e.preventDefault();

    if(password===confirmPassword){
      console.log("Email :",email);
    console.log("Password:",password);
    console.log("ConfirmPassword:",confirmPassword);

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    }
    else{
      console.error("Password is not same");
    }

    
  }


  const [lock,setLock] = useState(true);

  const lockHandler = ()=>{
    setLock(!lock);
  }


  return (
    <div className='flex flex-col justify-center items-center  h-screen'>
      
      <form onSubmit={SubmitHandler} className='border p-10 border-slate-500' >
        <div>
          <label className='block' >Email ID</label>
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='border border-slate-500 rounded-xl' />
        </div>

        <div className='relative' >
          <label className='block' >Password</label>
          <input type={`${lock?"password":"text"}`}  value={password} onChange={(e)=>setPassword(e.target.value)} className='border border-slate-500 rounded-xl' />

          <div className='absolute top-7 right-2' >
            {lock?<CiLock  onClick={lockHandler} />:<CiUnlock onClick={lockHandler} />}
          </div>
        </div>

        <div>
          <label className='block' >Confirm Password</label>
          <input type='text'  value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className='border border-slate-500 rounded-xl' />
        </div>


        


        <button type='submit' className='bg-[#192b4c]  text-white  px-5  rounded-xl py-1 ml-12 mt-4' >Login</button>
      </form>
    </div>
  )
}

export default UseState2 */

/* ================================================================================================= */

import React, { useState } from 'react'



const Formic = () => {

    const [formData,setFormData] = useState({
        email:"",
        password:"",
    });


    const changeHandler = (e)=>{
        const {id,value}  = e.target;

        setFormData((prevData)=>({
            ...prevData,
            [id]:value,
        }))
    }


    const SubmitHandler =(e)=>{
        e.preventDefault()
        
    }


  return (
    <div  >
    <form className='flex flex-col'  onSubmit={SubmitHandler} >
    <label>Email</label>
      <input type='text' className='border border-black' id='email' value={formData.email} onChange={changeHandler} />

      <label>Password</label>
      <input type='password' className='border border-black' id='password' value={formData.password} onChange={changeHandler} />


      <button type='submit' >Submit</button>
    </form>
    </div>
  )
}

export default Formic