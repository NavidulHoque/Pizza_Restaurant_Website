import Items from "./Items.jsx"

function Salad() {
  return (
    <div className="bg-white w-full">

      <div className="flex justify-between items-start px-[15px] py-[30px]">

        <div className="flex flex-col gap-y-7">

          <p className="text-[35px] font-semibold">Lasagna <span className="bg-[#9e9e9e] text-black px-[8px] py-[3px] rounded-md font-normal">Popular</span></p>
          <span className="text-[35px] text-[#757575]">Special sauce, mozzarella, parmesan, ground beef</span>

        </div>

        <span className="text-[35px] bg-[#616161] text-white px-[8px] py-[3px] rounded-md">$21.50</span>

      </div>

      <Items name="Ravioli" desc="Ravioli filled with cheese" price="$14.50" />

      <Items name="Spaghetti Classica" desc="Fresh tomatoes, onions, ground beef" price="$11.00" />

      <Items name="Seafood pasta" desc="Salmon, shrimp, lobster, garlic" price="$25.50" />

    </div>
  )
}

export default Salad
