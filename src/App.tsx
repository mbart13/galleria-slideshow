import { GlobalStyles } from 'styles/GlobalStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Gallery from 'pages/Gallery'
import Slideshow from 'pages/Slideshow'
import Header from 'components/organisms/Header/'
import { useState } from 'react'

function App(): JSX.Element {
  const [current, setCurrent] = useState(0)
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Gallery setCurrent={setCurrent} />
        </Route>
        <Route path="/slideshow">
          <Slideshow />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
