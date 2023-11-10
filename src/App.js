import NavabarBottom from './components/NavbarBottom'
import './App.css'
import SidebarVertical from './components/SidebarVertical'
import Home from './components/Home'

function App() {
  return (
    <div className="mt-3">
      <Home />
      <SidebarVertical />
      <NavabarBottom />
    </div>
  )
}

export default App
