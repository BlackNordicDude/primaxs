/* eslint-disable react/prop-types */


const Wrapper = ({title, child}) => {
    return (
        <>
            <div className="h-[125px] text-4xl text-white flex items-center px-20 bg-black">
                {title}
            </div>
            <div className="max-w-screen-xl mx-auto bg-[#30323E]">
                {child}
            </div>
        </>
    )
}

export default Wrapper