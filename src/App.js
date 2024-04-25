import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Footer from './components/footer';
import IndexPage from "./pages";
import ListingPage from "./pages/listing";
import ChoicePage from "./pages/choice";

function App() {
  return (
    <>
      <div className='flex flex-col h-screen justify-between bg-orange-400'>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<IndexPage />} />
              <Route path="choice" element={<ChoicePage />} />
              <Route path="list" element={<ListingPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
