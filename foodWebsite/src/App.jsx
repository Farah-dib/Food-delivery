import Cart from './pages/Home/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Home from './pages/Home/Home';
import RootLayout from './Layout/RootLayout';
import ExploreMenu from './Components/ExploreMenu/ExploreMenu';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import AppDownload from './Components/AppDownload/AppDownload';
import Footer from './Components/Footer/Footer';
import SeachResult from './Components/Search/SeachResult';
import FoodItem from './Components/FoodItem/FoodItem';
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path='/' element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="order" element={<PlaceOrder />} />
        <Route path="/menu" element={<ExploreMenu />} />
        <Route path='/menuItem' element={<FoodItem />} />
        <Route path='MobileApp' element={<AppDownload />} />
        <Route path='ContactUs' element={<Footer />} />
        <Route path='search' element={<SeachResult />} />
      </Route>

    )
  );
  return (
    <>
      <div className="app">
        <RouterProvider router={router} />

      </div>

      {/* <Home /> */}

      {/* <Footer /> */}

    </>
  );
};

export default App;
