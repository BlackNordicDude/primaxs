import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Partners = () => {
    return (
        <section className="py-10 px-[100px]">
            <p className="text-2xl text-white">
                У нас богатый опыт сотрудничества с разными компаниями. <br /> Результат говорит сам за себя:
            </p>
            <div className="my-10 flex justify-center">
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container max-w-5xl py-4"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite={false}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={2}
                    swipeable
                >
                    <div className="border-[#CCC8C5] border-4 flex items-center flex-col py-12 px-16 justify-center mx-4 text-white text-2xl shadows">
                        <img src="src/components/projects/313.jpg" alt="" className="rounded-full h-[160px] w-[160px] border-4" />
                        <p className="text-left mt-16 block w-full">``</p>
                        <p className="text-center">Небольшой современный дом на одну семью.</p>
                        <p className="text-right mb-1 block w-full">``</p>
                        <p className="text-right my-10 block w-full px-3 ">@company</p>
                    </div>
                    <div className="border-[#CCC8C5] border-4 flex items-center flex-col py-12 px-16 justify-center mx-4 text-white text-2xl shadows">
                        <img src="src/components/projects/313.jpg" alt="" className="rounded-full h-[160px] w-[160px] border-4" />
                        <p className="text-left mt-16 block w-full">``</p>
                        <p className="text-center">Небольшой современный дом на одну семью.</p>
                        <p className="text-right mb-1 block w-full">``</p>
                        <p className="text-right my-10 block w-full px-3 ">@company</p>
                    </div>
                    <div className="border-[#CCC8C5] border-4 flex items-center flex-col py-12 px-16 justify-center mx-4 text-white text-2xl shadows">
                        <img src="src/components/projects/313.jpg" alt="" className="rounded-full h-[160px] w-[160px] border-4" />
                        <p className="text-left mt-16 block w-full">``</p>
                        <p className="text-center">Небольшой современный дом на одну семью.</p>
                        <p className="text-right mb-1 block w-full">``</p>
                        <p className="text-right my-10 block w-full px-3 ">@company</p>
                    </div>
                    <div className="border-[#CCC8C5] border-4 flex items-center flex-col py-12 px-16 justify-center mx-4 text-white text-2xl shadows">
                        <img src="src/components/projects/313.jpg" alt="" className="rounded-full h-[160px] w-[160px] border-4" />
                        <p className="text-left mt-16 block w-full">``</p>
                        <p className="text-center">Небольшой современный дом на одну семью.</p>
                        <p className="text-right mb-1 block w-full">``</p>
                        <p className="text-right my-10 block w-full px-3 ">@company</p>
                    </div>
                    <div className="border-[#CCC8C5] border-4 flex items-center flex-col py-12 px-16 justify-center mx-4 text-white text-2xl shadows">
                        <img src="src/components/projects/313.jpg" alt="" className="rounded-full h-[160px] w-[160px] border-4" />
                        <p className="text-left mt-16 block w-full">``</p>
                        <p className="text-center">Небольшой современный дом на одну семью.</p>
                        <p className="text-right mb-1 block w-full">``</p>
                        <p className="text-right my-10 block w-full px-3 ">@company</p>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

export default Partners