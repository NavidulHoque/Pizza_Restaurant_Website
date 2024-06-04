import { useEffect, useState } from "react"
import Heading from "./Heading.jsx"

function Contact() {

    //for updating the input information
    const [date, setdate] = useState("2024-11-16T12:00")
    const [name, setname] = useState("")
    const [numberofpeople, setnumberofpeople] = useState("")
    const [message, setmessage] = useState("")

    const [customerinfo, setcustomerinfo] = useState(JSON.parse(localStorage.getItem("customerInfo")) || [])
    const [showingResponse, setshowingResponse] = useState("0")

    function submit(e) {
        e.preventDefault()

        setshowingResponse("1") //showing the response

        setTimeout(() => {
            setshowingResponse("0")
        }, 3000);

        const dummyarr = [...customerinfo]
        dummyarr.push({ name, numberofpeople, date, message }) //storing the data in the local storage
        setcustomerinfo(dummyarr)

        //deleting the information put by the user after submitting the info 
        setdate("2024-11-16T12:00")
        setname("")
        setnumberofpeople("")
        setmessage("")
    }

    useEffect(function () {

        localStorage.setItem("customerInfo", JSON.stringify(customerinfo))

    }, [customerinfo])


    return (
        <div className="bg-[#607d8b] grayscale-[50%]">

            <div id="contact" className="lg:w-[70vw] w-[90vw] mx-auto py-[80px]">

                <Heading heading="contact" />

                <div className="flex flex-col gap-y-5">

                    <p className="text-[24px] text-white">Find us at 42 village St, New York or call us at 05050515-122330</p>

                    <p className="text-[24px] text-white"><span>FYI!</span> We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>

                    <form className="flex flex-col gap-y-8" onSubmit={submit}>

                        <label className="text-[36px] text-white"><span className="font-semibold">Reserve</span> a table, ask for today's special or just send us a message: <span style={{ opacity: showingResponse }} className="transition duration-500">Response Recorded</span></label>

                        <input className="text-[24px] p-[10px]" type="text" onChange={(e) => setname(e.target.value)} value={name} placeholder="Name" name="name" autoComplete="on" required />

                        <input className="text-[24px] p-[10px]" type="number" onChange={(e) => setnumberofpeople(e.target.value)} value={numberofpeople} placeholder="How Many People" required />

                        <input className="text-[24px] p-[10px]" type="datetime-local" onInput={(e) => setdate(e.target.value)} value={date} required />

                        <input className="text-[24px] p-[10px]" type="text" onChange={(e) => setmessage(e.target.value)} value={message} placeholder="Message / Special Requirements" name="message" autoComplete="on" required />

                        <button type="submit" className="bg-black text-[24px]  text-white px-[15px] py-[10px] hover:bg-[#bdc3c7] hover:text-black">Send Message</button>
                    </form>

                </div>

            </div>
        </div>
    );
}

export default Contact;
