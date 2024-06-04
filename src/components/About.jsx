import chef from "../assets/chef.jpg"
import restaurant from "../assets/onepage_restaurant.jpg"
import Heading from "./Heading.jsx"

function About() {
    return (
        <div className="bg-[#f44336] grayscale-[70%]">

            <div id="about" className="lg:w-[70vw] w-[90vw] mx-auto py-[80px] text-white">

                <Heading heading="about" />

                <div className="flex flex-col gap-y-7">

                    <p className="text-[24px]">The Pizza Restaurant first opened its doors way back when in a charming little town by a fellow named Mr. Italiano, who some say had a secret pizza-making recipe passed down for generations!</p>

                    <div className="flex justify-between items-center">

                        <div className="flex flex-col gap-y-5 text-[24px]">
                            <p><span className="font-bold">The Chef?</span> Mr. Italiano himself</p>
                            <p>We are proud of our interiors.</p>
                        </div>

                        <img className="w-[130px] h-[130px] rounded-[50%]" src={chef} alt="chef" />

                    </div>

                    <img src={restaurant} alt="restaurant" />

                    <h1 className="text-[36px] font-bold">Opening Hours</h1>

                    <div className="text-[24px] flex gap-x-[15px]">

                        <div className="w-[48%] flex flex-col gap-y-5">

                            <p>Mon & Tue CLOSED</p>
                            <p>Wednesday 10.00 - 24.00</p>
                            <p>Thursday 10:00 - 24:00</p>

                        </div>

                        <div className="w-[48%] flex flex-col gap-y-5">

                            <p>Friday 10:00 - 12:00</p>
                            <p>Saturday 10:00 - 23:00</p>
                            <p>Sunday Closed</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default About
