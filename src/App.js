import Nav from './components/nav';
import Footer from './components/footer'
import Contact from './pages/contact/contact';
import Home from './pages/home/home';
import Blog from './pages/blog/blog';
import Licenses from './pages/licenses/licenses';
import Services from './pages/services/services';

import { BrowserRouter as Router, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
<Router>
      <Nav />
      <Route exact path={["/", "/GlobalWebsite"]} component={Home} />
      <Route path="/GlobalWebsite/contact" component={Contact} />
      {/* <Route path="/GlobalWebsite/blog" component={Blog} /> */}
      <Route path="/GlobalWebsite/licenses" component={Licenses} />
      <Route path="/GlobalWebsite/services" component={Services} />
      <Footer />
    </Router>
    </div>
  );
}

export default App;
