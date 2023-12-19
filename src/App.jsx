import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Partners from './components/partners/partners'
import Projects from './components/projects/projects'
import Services from './components/services/services'
import Why from './components/why/why'
import Work from './components/work/work'
import Wrapper from './components/wrapper/wrapper'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Wrapper title='Услуги' child={<Services/>} />
      <Wrapper title='Проекты' child={<Projects />} />
      <Wrapper title='Наши партнеры' child={<Partners />} />
      <Wrapper title='Почему мы?' child={<Why />} />
      <Wrapper title={'Как мы работаем?'} child={<Work />} />
      <Footer />
    </>
  )
}

export default App
