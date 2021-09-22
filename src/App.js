import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Download from './components/Download'
import Faq from './components/Faq'
import Footer from './components/Footer'



function App() {
  return (
    <div className="App max-w-screen-xl mx-auto">
      <Navbar/>
      <Hero/>
      <Features/>
      <Download/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
