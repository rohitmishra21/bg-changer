import React from 'react'
import { useState } from 'react'

const App = () => {

const [color, setColor] = useState("skyblue")

  return (
    <>
   <div className='w-full h-screen flex justify-center'
   style={{backgroundColor:color}}
   >
        <div className='fixed bottom-10 bg-slate-100  h-10 rounded-lg flex justify-center gap-7'>
            <button className='px-3 py-1 rounded-full bg-red-600'
            onClick={() => setColor("red")}
            >
                red
            </button>
            <button className='px-3 py-1 rounded-full bg-green-700'
            onClick={() => setColor("green")}
            >
                green
            </button>
            <button className='px-3 py-1 rounded-full bg-yellow-500'
            onClick={() => setColor("yellow")}
            >
                yelow
            </button>
            <button className='px-3 py-1 rounded-full bg-purple-700'
            onClick={() => setColor("purple")}
            >
                purple
            </button>
            <button className='px-3 py-1 rounded-full bg-pink-300'
            onClick={() => setColor("pink")}
            >
                pink
            </button>
            <button className='px-3 py-1 rounded-full bg-gray-500'
            onClick={() => setColor("gray")}
            >
                gray
            </button>
            <button className='px-3 py-1 rounded-full bg-blue-400'
            onClick={() => setColor("skyblue")}
            >
                blue
            </button>
            <button className='px-3 py-1 rounded-full bg-red-950 text-white'
            onClick={() => setColor("brown")}
            >
                brown
            </button>
        </div>
   </div>
    </>
  )
}

export default App