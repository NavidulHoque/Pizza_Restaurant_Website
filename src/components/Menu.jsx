/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Salad from "./Salad.jsx";
import Pizza from "./Pizza.jsx";
import Starter from "./Starter.jsx";
import Heading from "./Heading.jsx";

export default function Menu({ menuRef }) {
    
    const [menuState, setMenuState] = useState(JSON.parse(localStorage.getItem("MenuState")) || [true, false, false])
    const [pizza, setpizza] = useState(menuState[0])
    const [salad, setsalad] = useState(menuState[1])
    const [starter, setstarter] = useState(menuState[2])

    useEffect(() => {

        localStorage.setItem("MenuState", JSON.stringify(menuState))

    }, [menuState])


    function handlePizza() {
        setpizza(true)
        setsalad(false)
        setstarter(false)
        setMenuState([true, false, false])
    }

    function handleSalad() {
        setpizza(false)
        setsalad(true)
        setstarter(false)
        setMenuState([false, true, false])
    }

    function handleStarter() {
        setpizza(false)
        setsalad(false)
        setstarter(true)
        setMenuState([false, false, true])
    }

    return (
        <div className="bg-black">

            <div ref={menuRef} className="lg:w-[70vw] w-[90vw] mx-auto py-[80px]">

                <Heading heading="The menu" />

                <div className="flex flex-col justify-center items-center border-[rgba(255,_255,_255,_0.4)] border-[1px]">

                    <div className="w-full flex justify-between items-center">
                        <button onClick={handlePizza} className={`w-[33.34%] py-[10px] text-[40px] bg-black text-white hover:bg-red-500 ${pizza && 'bg-red-500'}`}>Pizza</button>
                        <button onClick={handleSalad} className={`w-[33.34%] py-[10px] text-[40px] bg-black text-white hover:bg-red-500 ${salad && 'bg-red-500'}`}>Salad</button>
                        <button onClick={handleStarter} className={`w-[33.34%] py-[10px] text-[40px] bg-black text-white hover:bg-red-500 ${starter && 'bg-red-500'}`}>Starter</button>
                    </div>

                    {/* Conditional rendering */}
                    {pizza ? <Pizza /> : salad ? <Salad /> : <Starter />}
                </div>

            </div>

        </div>
    )
}


