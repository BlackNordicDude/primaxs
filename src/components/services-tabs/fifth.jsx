import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Fifth = () => {
    return (
        <>
            <div className="flex gap-10 text-[#CCC8C5]">
                <div className="flex flex-col basis-1/3 text-xl">
                    <p>
                    Закажите красивое продающее видео что бы клиент воочию увидел свой будущий дом!
                    </p>
                    <p className="mt-4"><span className="text-2xl text-white">Стоимость: </span>от <span className="text-2xl text-white">20000</span> руб</p>
                    <p className="mb-4"><span className="text-2xl text-white">Сроки выполнения: </span>от <span className="text-2xl text-white">3</span> рабочих дней</p>
                    <p>Дополнительную информацию уточним при формировании заказа.</p>
                </div>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container basis-2/3"
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
                        items: 2,
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
                    showDots={true}
                    sliderClass=""
                    slidesToSlide={2}
                    swipeable
                >
                    <img src="src/assets/kr1.jpg" alt="" className="p-3 pb-5"/><img src="src/assets/kr2.jpg" alt="" className="p-3 pb-5"/>                       
                    <img src="src/assets/kr3.jpg" alt="" className="p-3 pb-5"/><img src="src/assets/kr4.jpg" alt="" className="p-3 pb-5"/>
                    <img src="src/assets/kr5.jpg" alt="" className="p-3 pb-5"/><img src="src/assets/kr6.jpg" alt="" className="p-3 pb-5"/>
                    <img src="src/assets/kr7.jpg" alt="" className="p-3 pb-5"/><img src="src/assets/kr8.jpg" alt="" className="p-3 pb-5"/>
                    <img src="src/assets/kr9.jpg" alt="" className="p-3 pb-5"/><img src="src/assets/kr10.jpg" alt="" className="p-3 pb-5"/>
                    <img src="src/assets/kr11.jpg" alt="" className="p-3 pb-5"/><img src="src/assets/kr12.jpg" alt="" className="p-3 pb-5"/>
                    <img src="src/assets/kr13.jpg" alt="" className="p-3 pb-5"/><img src="src/assets/kr14.jpg" alt="" className="p-3 pb-5"/>
                    <img src="src/assets/kr15.jpg" alt="" className="p-3 pb-5"/><img src="src/assets/kr16.jpg" alt="" className="p-3 pb-5"/>
                    <img src="src/assets/kr17.jpg" alt="" className="p-3 pb-5"/><img src="src/assets/kr18.jpg" alt="" className="p-3 pb-5"/>
                    <img src="src/assets/kr19.jpg" alt="" className="p-3 pb-5"/><img src="src/assets/kr20.jpg" alt="" className="p-3 pb-5"/>
                    <img src="src/assets/kr21.jpg" alt="" className="p-3 pb-5"/><img src="src/assets/kr22.jpg" alt="" className="p-3 pb-5"/>
                    <img src="src/assets/kr23.jpg" alt="" className="p-3 pb-5"/><img src="src/assets/kr24.jpg" alt="" className="p-3 pb-5"/>
                    <img src="src/assets/kr25.jpg" alt="" className="p-3 pb-5"/><img src="src/assets/kr26.jpg" alt="" className="p-3 pb-5"/>
                    <img src="src/assets/kr27.jpg" alt="" className="p-3 pb-5"/><img src="src/assets/kr28.jpg" alt="" className="p-3 pb-5"/>
                </Carousel>
            </div>
        </>
    )
}

export default Fifth