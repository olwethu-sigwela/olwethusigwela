import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const name = "Olwethu Sigwela"
const about = "I am a software developer based in Johannesburg, South Africa. I'm always looking for new projects to tackle."


function NavBar(){

  return (
    <>
      <nav className="bg-white w-full mb-4">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
              <span className="self-center text-2xl font-extrabold whitespace-nowrap text-sky-300">olwethu</span>
          </a>
          {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <img src="./list.svg"/>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <a href="mailto:olwethusigwela22@gmail.com" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </>
  )

}

function ImageContainer({ src }){
  return(
  <>
    <div className="mx-auto">
      
      <img className="rounded-full max-w-65 h-auto mx-auto" src={src} alt="image description"/>

      {/* <img src = { src } className="object-contain mx-auto"/> */}
    </div>
  </>
  )
}


function TitleContainer({title}){
  return (
    <>
      <h1 className="text-3xl font-extrabold bg-white text-gray-900 md:text-5xl lg:text-6xl"><span className="text-slate-800 bg-transparent">{title}</span></h1>
    </>
  )
}

function SubTitleContainer({subtitle}){
  return (
    <>
      <h2 className="mb-4 mt-3 text-2xl font-bold bg-white text-gray-900 md:text-2xl lg:text-3xl"><span className="text-slate-800 bg-transparent">{subtitle}</span></h2>
    </>
  )
}

function LinkContainer(){
  return (
    <>
      <div className = "container mb-2 mt-2 flex flex-wrap mx-auto justify-center gap-3">
        <a className="text-sky-300 hover:text-sky-400" href="https://github.com/olwethu-sigwela" target='_blank'>GitHub</a>
        <a className="text-sky-300 hover:text-sky-400" href="./cv.pdf" target='_blank'>Resume</a>
        <a className="text-sky-300 hover:text-sky-400" href="https://www.linkedin.com/in/olwethu-sigwela-264074180/" target='_blank'>LinkedIn</a>
        <a className="text-sky-300 hover:text-sky-400" href="mailto:olwethusigwela22@gmail.com" target='_blank'>Contact</a>
      </div>
    </>
  )
  }
function ParagraphContainer({ description }){

    return(
      <>
        
          <p className="text-slate-800 bg-white">{description}</p>
        
      </>
    )
    
}

function DescriptionContainer(){
  return (
    <>
      <TitleContainer title={name}/>
      <LinkContainer/>
      <ParagraphContainer description={about}/>
    </>
  )
}
function ProjectList(){
  return (
  <>
    <SubTitleContainer subtitle="Recent Projects"/>
    <div className="container mx-auto bg-slate-200 rounded-2xl p-5 flex flex-wrap justify-center gap-4">
      <Project src="./selenium-database.png" caption = "Selenium Database" description="Property valuation application for a growing start-up" link="https://selenium-database-cwov.onrender.com/"/>
      <Project src="./uMoya.png" caption = "uMoya" description="Application that finds the cheapest data bundles for South Africans" link="https://umoya.vercel.app/"/>
      <Project src="./cryptocurrency.png" caption = "Drachma" description="Fully functional cryptocurrency" link="https://olwethu-backup.github.io/"/>
      
    </div>
  </>
  )
}

function Project({src, caption, description, link}){
  return (
    <>
        <a href={link} target="_blank">
          <figure className="max-w-5xl xl:max-w-lg shadow-2xl/60 rounded-lg hover:cursor-pointer">
              <img className="h-auto max-w-full rounded-t-lg duration-275 hover:brightness-80" src={src} alt={caption}/>
              <figcaption className="text-lg font-extrabold text-center text-slate-800 bg-slate-100 rounded-b-lg">{caption}
                <br/>
                <span className="text-sm text-slate-800 font-normal">{description}</span>
                </figcaption>
              
          </figure>
      </a>

    </> 
  )
}

// function Carousel({images}){
//   const imageArr = images


// }

// function ProjectDetails(){

// }

function App(){

  return (
  <>
    <NavBar/>
    <ImageContainer src = {"./olwethu.jpg"}/> 
    <DescriptionContainer/>
    <ProjectList/>
  </>
  )



}




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
