
import './App.css'
import Result from './components/Result'
import Summary from './components/Summary'

function App() {
  

  return (
    <>
      <div className='grid place-items-center h-screen '>
        <div className='max-w-xl flex md:flex-row flex-col bg-white drop-shadow-2xl  shadow-Pale-blue rounded-3xl'>
            <Result />
            <Summary />
        </div>
      </div>
    </>
  )
}

export default App
