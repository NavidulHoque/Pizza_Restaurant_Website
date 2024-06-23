/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Heading from "./Heading.jsx"

function Contact({contactRef}) {

    //for updating the input information
    const [date, setDate] = useState("2024-11-16T12:00")
    const [name, setName] = useState("")
    const [numberofPeople, setNumberofPeople] = useState("")
    const [message, setMessage] = useState("")

    const [customerInfo, setCustomerInfo] = useState(JSON.parse(localStorage.getItem("customerInfo")) || [])
    const [showResponse, setShowResponse] = useState("0")

    useEffect(function () {

        localStorage.setItem("customerInfo", JSON.stringify(customerInfo))

    }, [customerInfo])

    function submit(e) {
        e.preventDefault()

        setShowResponse("1") 

        setTimeout(() => {
            setShowResponse("0")
        }, 3000);

        setCustomerInfo((prev) => [...prev, { name, numberofPeople, date, message }])

        setDate("2024-11-16T12:00")
        setName("")
        setNumberofPeople("")
        setMessage("")
    }

    return (
        <div className="bg-[#607d8b] grayscale-[50%]">

            <div ref={contactRef} className="lg:w-[70vw] w-[90vw] mx-auto py-[80px]">

                <Heading heading="contact" />

                <div className="flex flex-col gap-y-5">

                    <p className="text-[24px] text-white">Find us at 42 village St, New York or call us at 05050515-122330</p>

                    <p className="text-[24px] text-white"><span>FYI!</span> We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>

                    <form className="flex flex-col gap-y-8" onSubmit={submit}>

                        <label className="text-[36px] text-white"><span className="font-semibold">Reserve</span> a table, ask for today's special or just send us a message: <span style={{ opacity: showResponse }} className="transition duration-500">Response Recorded</span></label>

                        <input className="text-[24px] p-[10px]" type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" name="name" autoComplete="on" required />

                        <input className="text-[24px] p-[10px]" type="number" onChange={(e) => setNumberofPeople(e.target.value)} value={numberofPeople} placeholder="How Many People" required />

                        <input className="text-[24px] p-[10px]" type="datetime-local" onInput={(e) => setDate(e.target.value)} value={date} required />

                        <input className="text-[24px] p-[10px]" type="text" onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Message / Special Requirements" name="message" autoComplete="on" required />

                        <button type="submit" className="bg-black text-[24px]  text-white px-[15px] py-[10px] hover:bg-[#bdc3c7] hover:text-black">Send Message</button>
                    </form>

                </div>

            </div>
        </div>
    );
}

export default Contact;
