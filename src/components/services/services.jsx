import { useState } from "react"
import ServicesTabs from "../services-tabs/servicesTabs"

const Services = () => {
    const [activeTab, setActiveTab] = useState(2);
    return (
        <section className="p-[60px]">
            <article className="text-white text-2xl text-center ">
                Увеличьте объем продаж при помощи качественной картинки. Наглядное отображение ваших идей и решений многократно повышает шансы привлечь внимание заказчиков. <br />
                А мы поможем вам в этом:
            </article>
            <div className="flex justify-between gap-8 mt-[64px] mb-10">
                <button className={`button text-xl text-[#CCC8C5] shadows ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>Конструктивный и Архитектурный раздел</button>
                <button className={`button text-xl text-[#CCC8C5] shadows ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>3D планировка</button>
                <button className={`button text-xl text-[#CCC8C5] shadows ${activeTab === 3 ? 'active' : ''}`} onClick={() => setActiveTab(3)}>3D визуализация</button>
                <button className={`button text-xl text-[#CCC8C5] shadows ${activeTab === 4 ? 'active' : ''}`} onClick={() => setActiveTab(4)}>Расчёт деревянных домов</button>
                <button className={`button text-xl text-[#CCC8C5] shadows ${activeTab === 5 ? 'active' : ''}`} onClick={() => setActiveTab(5)}>Видео-визуализация</button>
            </div>
            <ServicesTabs activeTab={activeTab}/>
        </section>
    )
}

export default Services