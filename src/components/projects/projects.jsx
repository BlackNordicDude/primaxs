import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
    return (
        <section>
            <p className="pt-10 px-[100px] text-2xl text-white">
                Дома по нашим проектам:
            </p>
            <div className="m-auto w-3/4">
            <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container mt-10"
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
                        items: 1,
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
                <div className="px-1 ">
                    <img src="src/components/projects/313.jpg" alt="" className="shadows border-4 border-[#CCC8C5]"/>
                    <p className="text-center text-white text-2xl my-8">Небольшой современный дом на одну семью.</p>
                </div>
                <div className="px-1 ">
                    <img src="src/components/projects/314.jpg" alt="" className="shadows border-4 border-[#CCC8C5]"/>
                    <p className="text-center text-white text-2xl my-8">Современный дом на одну семью побольше.</p>
                </div>
            </Carousel>
            </div>
            
        </section>
    )
}

export default Projects 