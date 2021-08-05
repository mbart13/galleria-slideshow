import { GlobalStyles } from 'styles/GlobalStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Gallery from 'pages/Gallery'
import Slideshow from 'pages/Slideshow'
import Header from 'components/organisms/Header/'
import LightBox from 'components/organisms/Lightbox'

function App(): JSX.Element {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <LightBox />
      <Switch>
        <Route path="/" exact>
          <Gallery />
        </Route>
        <Route path="/slideshow">
          <Slideshow />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
