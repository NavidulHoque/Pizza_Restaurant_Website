/* eslint-disable react/prop-types */


const Items = ({name, desc, price}) => {
    return (
        <div className="flex justify-between items-start px-[15px] py-[30px]">

            <div className="flex flex-col gap-y-7">

                <p className="text-[35px] font-semibold">{name}</p>
                <span className="text-[35px] text-[#757575]">{desc}</span>

            </div>

            <span className="text-[35px] bg-[#616161] text-white px-[8px] py-[3px] rounded-md">{price}</span>

        </div>
    )
}

export default Items