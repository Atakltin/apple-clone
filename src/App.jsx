
import './commonResource/css/styles.css'
import './commonResource/css/bootstrap.css'
import './commonResource/js/bootstrap'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer1'
import Alert from './components/Alert_section/Alert'
import SectionOne from './components/SectionOne/SectionOne'
import SectionTwo from './components/SectionTwo/SectionTwo'
import SectionThree from './components/SectionThree/SectionThree'
import SectionFour from './components/SectionFour/SectionFour'
import SectionFive from './components/SectionFive/SectionFive'
import SectionSix from './components/SectionSix/SectionSix'
import YoutubeVideos from './components/YoutubeVideos/YoutubeVideos'
import Iphone from './components/Iphone/Iphone'
function App() {
  return (
    <>
      <Header />
      <Iphone/>
      <Alert />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <YoutubeVideos/>
      <Footer />
    </>
  )
}

export default App;
