import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Suspense} from 'react';
import { LandingPage } from './conmponents/views/LangdingPage/LandingPage';


function App() {
  return (
    <Suspense fallback={(<div>Loding....</div>)}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
