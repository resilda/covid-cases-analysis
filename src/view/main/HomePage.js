import { HomeContainer } from './styles/HomeContainer'
import Navbar from './navbar/Navbar'
import Grid from '../shared/panel/Grid'
import Footer from './footer/Footer'

export default function HomePage() {
  return (
    <HomeContainer>
      <Navbar isGlobeFilterAvailable={false} />
      <div className="welcome-wrapper">
        <h2 className="welcome-title">Welcome to zanda.k.a</h2>
        <p className="welcome-rubrics">Get informed in our rubrics below...</p>
      </div>
      <Grid />
      <Footer />
    </HomeContainer>
  )
}
