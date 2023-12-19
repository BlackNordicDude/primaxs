import './work.css';

const Work = () => {
    return (
        <section className="flex w-full h-screen">
            <div className="flex grow shrink border-2 justify-center items-center relative card hover-text-one">
                <figure className='effect-text-two h-full'>
                    <img src="src\assets\hero-bg.png" alt="" className='h-full'/>
                    <figcaption>
                        <div className="number z-20">
                            <img src="src/assets/ring.png" className="h-[150px] w-[150px] absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2" alt="" />
                            <span className="text-8xl text-[#CCC8C5]">1</span>
                        </div>
                        <div className='text-2xl p-4 text-center step'>Принимаем заказ Оцениваем стоимость </div>
                        
                </figcaption>
                </figure>
            </div>
            <div className="flex grow shrink border-2 justify-center items-center relative card hover-text-one">
                <figure className='effect-text-two h-full'>
                    <img src="src\assets\hero-bg.png" alt="" className='h-full '/>
                    <figcaption>
                        <div className="number z-20">
                            <img src="src/assets/ring.png" className="h-[150px] w-[150px] absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2" alt="" />
                            <span className="text-8xl text-[#CCC8C5]">2</span>
                        </div>
                        <div className='text-2xl p-4 text-center step'>Заключаем договор Получаем задаток в 30% </div>
                        
                </figcaption>
                </figure>
            </div><div className="flex grow shrink border-2 justify-center items-center relative card hover-text-one">
                <figure className='effect-text-two h-full'>
                    <img src="src\assets\hero-bg.png" alt="" className='h-full'/>
                    <figcaption>
                        <div className="number z-20">
                            <img src="src/assets/ring.png" className="h-[150px] w-[150px] absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2" alt="" />
                            <span className="text-8xl text-[#CCC8C5]">3</span>
                        </div>
                        <div className='text-2xl p-4 text-center step'>Выполняем работу Показываем результат </div>
                        
                </figcaption>
                </figure>
            </div><div className="flex grow shrink border-2 justify-center items-center relative card hover-text-one">
                <figure className='effect-text-two h-full'>
                    <img src="src\assets\hero-bg.png" alt="" className='h-full'/>
                    <figcaption>
                        <div className="number z-20">
                            <img src="src/assets/ring.png" className="h-[150px] w-[150px] absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2" alt="" />
                            <span className="text-8xl text-[#CCC8C5]">4</span>
                        </div>
                        <div className='text-2xl p-4 text-center step'>Принимаем правки Вносим изменения </div>
                        
                </figcaption>
                </figure>
            </div><div className="flex grow shrink border-2 justify-center items-center relative card hover-text-one">
                <figure className='effect-text-two h-full'>
                    <img src="src\assets\hero-bg.png" alt="" className='h-full'/>
                    <figcaption>
                        <div className="number z-20">
                            <img src="src/assets/ring.png" className="h-[150px] w-[150px] absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2" alt="" />
                            <span className="text-8xl text-[#CCC8C5]">5</span>
                        </div>
                        <div className='text-2xl p-4 text-center step'>Получаем всю сумму</div>
                        
                </figcaption>
                </figure>
            </div>
        </section>
    )
}

export default Work