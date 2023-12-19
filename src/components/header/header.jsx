

const Header = () => {
    return (
        <header className="absolute top-0 h-[125px] w-full flex items-center justify-center bg-opacity px-10 shadows z-50">
            <div className="w-full flex justify-between text-white gap-24">
                <img src='src/assets/PrimaXS.png' alt="logo" />
                <nav className="flex gap-9 items-center text-xl min-w-fit">
                    <a href="">Услуги</a>
                    <a href="">Проекты</a>
                    <a href="">Как мы работаем</a>
                    <a href="">Почему мы?</a>
                    <a href="">Выгода</a>
                    <div className="flex flex-col">
                        <a href="" type="tel">+79999999999</a>
                        <a href="" type="email" className="text-base">primax936@gmail.com</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
