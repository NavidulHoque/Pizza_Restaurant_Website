import Items from "./Items.jsx"

function Pizza(){
  return (
    <div className="bg-white w-full">

      <Items name="Margherita" desc="Fresh tomatoes, fresh mozzarella, fresh basil" price="$12.50" />

      <Items name="Formaggio" desc="Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)" price="$15.50" />

      <Items name="Chicken" desc="Fresh tomatoes, mozzarella, chicken, onions" price="$17.00" />

      <Items name="Pineapple'o'clock" desc="Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil" price="$16.50" />

      <div className="flex justify-between items-start px-[15px] py-[30px]">

        <div className="flex flex-col gap-y-7">

          <p className="text-[35px] font-semibold">Meat Town <span className="bg-red-500 text-white px-[8px] py-[3px] rounded-md font-normal">Hot!</span></p>
          <span className="text-[35px] text-[#757575]">Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken</span>

        </div>

        <span className="text-[35px] bg-[#616161] text-white px-[8px] py-[3px] rounded-md">$20.00</span>

      </div>

      <div className="flex justify-between items-start px-[15px] py-[30px]">

        <div className="flex flex-col gap-y-7">

          <p className="text-[35px] font-semibold">Parma <span className="bg-[#9e9e9e] text-black px-[8px] py-[3px] rounded-md font-normal">New</span></p>
          <span className="text-[35px] text-[#757575]">Fresh tomatoes, mozzarella, parma, bacon, fresh arugula</span>

        </div>

        <span className="text-[35px] bg-[#616161] text-white px-[8px] py-[3px] rounded-md">$21.50</span>

      </div>
      
    </div>
  )
}

export default Pizza
