
export default function Home() {

  return (
    <div id="home" className="relative bg-[url('./assets/pizza.jpg')] bg-cover bg-center bg-no-repeat h-screen grayscale-[50%] text-white">

      <div className="absolute flex flex-col justify-center items-center w-full h-full">
        <h1 className="text-[100px]">THIN</h1>
        <h1 className="text-[100px]">CRUST PIZZA</h1>
        <a href="#menu" className="bg-black text-[35px] py-[7px] px-[15px] hover:bg-[#bdc3c7] hover:text-black">LET ME SEE THE MENU</a>
      </div>

        <p className="absolute bottom-3 left-5 bg-black text-[25px] py-[5px] px-[10px]">Open from 10am to 12pm</p>

    </div>
  );
}
