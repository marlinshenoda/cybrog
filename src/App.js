import './App.css' 
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import {Container} from './components/Index'
import {Header,Footer} from './sections/index'
import { Home, Profile,Browse } from './Pages/index'

const App = () => {
return (
<>
<Router>
    <Header/>
   <Container>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/profile' element={  <Profile/>}/>
         <Route path='/Browse' element={  <Browse/>}/>

      </Routes>
    
   </Container>
   <Footer/>
</Router>
  

</>
)

}
export default App;