import NavBar from './components/NavBar.tsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import pages from './Data.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div>
        <NavBar />
      </div>
      <Routes>
        {pages.map((item) => {
          return (
            <Route path={item.href} element={item.component} key={item.name} />
          );
        })}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}