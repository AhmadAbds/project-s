import './App.css'
import { ThemeContext } from './components/Context/theme'
import { useContext } from 'react'
import NavBarr from './components/NavBarr'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Together from './components/Together'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
const App = () => {
const [{theme , isDark},toggleTheme] = useContext(ThemeContext)
console.log("theme",theme)
  return (
     <div style={{background : theme.background , color : theme.color}}>
      <NavBarr menuside={[{titleside : "Home" }, {titleside : "About Me" },{titleside : "Services" },{titleside : "projects"} ,{titleside : "Testimonials"} ,{titleside : "Contact"}]} menu={[{title : "Home" }, {title : "About Me" },{title : "Services" },{title : "projects"} ,{title : "Testimonials"} ,{title : "Contact"}]} btn="Download CV" logo="MU" />
      <Hero title="Hi I am " name ="Muhammad Umair " jop="UI & UX" jopp="Designer" subtitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra" btnn="Hire Me" />
      <About menu_range={[{title : "UX" , value : 94}, {title : "Website Design", value : 90},{title : "App Design " , value : 97}, {title : "Graphic Design ", value : 94}]}/>
      <Services/> 
      <Projects/>
      <Portfolio/>
      <Testimonials/> 
      <Blog/>
      <Together/>
      <Footer menu={[{title : "Home" }, {title : "About Me" },{title : "Services" },{title : "projects"} ,{title : "Testimonials"} ,{title : "Contact"}]} logo="MU"/>
    </div> 
  )
}
export default App;


