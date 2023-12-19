
const Hero = () => {
    return (
        <div className="hero-bg">
            <section className="h-screen py-8 px-10 max-w-screen-2xl mx-auto relative" >
                <img src="src/assets/PrimaXS.png" alt="logo" className="absolute right-1/2 translate-x-1/2 bottom-24 w-1/3" />
                <p className="w-2/3 text-5xl text-white leading-normal absolute right-1/2 translate-x-1/2 bottom-10 text-center">
                    3D визуализация | Проектирование
                </p> 
                
            </section>
            <div className="w-full h-[180px] z-0 black-gradient mt-[-180px]"></div>
        </div>
        
    )
}

export default Hero