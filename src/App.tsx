import Hero from './components/Hero'
import NavigationBar from './components/NavigationBar'
import './index.css'
function App() {

  return (
    <>
    <div className='fixed z-50 w-full'>
    <NavigationBar/>
    </div>
    <h1 className="text-2xl bg-black text-center text-amber-300 ">hola</h1>
     <div className='z-10'>
     <Hero/>
     </div>
    </>
  )
}

export default App
