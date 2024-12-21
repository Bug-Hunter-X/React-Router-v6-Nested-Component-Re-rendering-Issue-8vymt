```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
  const location = useLocation();
  return(
    <div>Home {location.pathname}</div>
  );
}

function About(){
  const location = useLocation();
  return(
    <div>About {location.pathname}</div>
  );
}
export default App; 
```