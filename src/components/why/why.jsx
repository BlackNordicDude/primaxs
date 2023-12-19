const Why = () => {
    return (
        <section className="p-[60px]">
            <article className="text-white text-2xl text-center mb-10">
                Так почему же выбирают именно нас?
            </article>
            <div className="flex justify-between ">
                <div className="text-2xl text-white text-center flex flex-col items-center basis-36 grow py-10">
                    <img src="src/assets/ruble.png" alt="" className="h-[180px] w-[180px] bg-white p-4 rounded-full mb-10" />
                    <p className="p-4 h-16 flex items-center">Бюджетность</p>
                    <p className="px-6 text-base text-[#CCC8C5] flex items-center">Воспользовашись нашими услугами вы всерьез задумаетесь о необходимости содержать целый офис!</p>
                </div>
                <div className="text-2xl text-white text-center flex flex-col items-center basis-36 grow py-10">
                    <img src="src/assets/idea.png" alt="" className="h-[180px] w-[180px] bg-white p-4 rounded-full mb-10" />
                    <p className="p-4 h-16 flex items-center">Оригинальность</p>
                    <p className="px-6 text-base text-[#CCC8C5] flex items-center">Каждый проект разрабатывается полностью нашей командой с нуля!</p>
                </div>
                <div className="text-2xl text-white text-center flex flex-col items-center basis-36 grow py-10">
                    <img src="src/assets/handshake.png" alt="" className="h-[180px] w-[180px] bg-white p-4 rounded-full mb-10" />
                    <p className="p-4 h-16 flex items-center">Индивидуальность</p>
                    <p className="px-6 text-base text-[#CCC8C5] flex items-center">Внимательно выслушиваем все пожелания заказчика и воплощаем их в жизнь!</p>
                </div>
                <div className="text-2xl text-white text-center flex flex-col items-center basis-36 grow py-10">
                    <img src="src/assets/easy.png" alt="" className="h-[180px] w-[180px] bg-white p-4 rounded-full mb-10" />
                    <p className="p-4 h-16 flex items-center">Простота</p>
                    <p className="px-6 text-base text-[#CCC8C5] flex items-center">Работать с нами - значит снять с себя груз множества проблем, возникающих при разработке проекта!</p>
                </div>
            </div>
        </section>
    )
}

export default Why