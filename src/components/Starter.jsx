import Items from "./Items.jsx"

function Starter(){
  return (
    <div className="bg-white w-full">

      <div className="flex justify-between items-start px-[15px] py-[30px]">

        <div className="flex flex-col gap-y-7">

          <p className="text-[35px] font-semibold">Today's Soup <span className="bg-[#9e9e9e] text-black px-[8px] py-[3px] rounded-md font-normal">Seasonal</span></p>

          <span className="text-[35px] text-[#757575]">Ask the waiter</span>

        </div>

        <span className="text-[40px] bg-[#616161] text-white px-[8px] py-[3px] rounded-md">$5.50</span>

      </div>

      <Items name="Bruschetta" desc="Bread with pesto, tomatoes, onion, garlic" price="$8.50" />

      <Items name="Garlic bread" desc="Grilled ciabatta, garlic butter, onions" price="$9.50" />

      <Items name="Tomozzarella" desc="Tomatoes and mozzarella" price="$10.50" />

    </div>
  )
}

export default Starter
