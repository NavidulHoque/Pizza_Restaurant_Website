import { useState } from "react"
import Salad from "./Salad.jsx";
import Pizza from "./Pizza.jsx";
import Starter from "./Starter.jsx";
import Heading from "./Heading.jsx";

export default function Menu(){
    const [pizza, setpizza] = useState(true)
    const [salad, setsalad] = useState(false)
    const [starter, setstarter] = useState(false)

    function piz() {
        setpizza(true)
        setsalad(false)
        setstarter(false)
    }

    function sal() {
        setpizza(false)
        setsalad(true)
        setstarter(false)
    }

    function start() {
        setpizza(false)
        setsalad(false)
        setstarter(true)
    }

  return (
    <div className="bg-black">

        <div id="menu" className="lg:w-[70vw] w-[90vw] mx-auto py-[80px]">

            <Heading heading="The menu"/>

            <div className="flex flex-col justify-center items-center border-[rgba(255,_255,_255,_0.4)] border-[1px]">

                <div className="w-full flex justify-between items-center">
                    <button onClick={piz} className={`w-[33.34%] py-[10px] text-[40px] bg-black text-white hover:bg-red-500 ${pizza && 'bg-red-500'}`}>Pizza</button>
                    <button onClick={sal} className={`w-[33.34%] py-[10px] text-[40px] bg-black text-white hover:bg-red-500 ${salad && 'bg-red-500'}`}>Salad</button>
                    <button onClick={start} className={`w-[33.34%] py-[10px] text-[40px] bg-black text-white hover:bg-red-500 ${starter && 'bg-red-500'}`}>Starter</button>
                </div>

                {/* Conditional rendering */}
                {pizza ? <Pizza /> : salad ? <Salad /> : <Starter />} 
            </div>

        </div>
      
    </div>
  )
}

 
