import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from "./styles/GlobalStyles";
import Language from "./UseContext/Language";
import { useState } from "react";
import MainData from "./UseContext/MainData";
import { Route, Router, Routes, Link } from "react-router-dom";
import Admin from "./pages/Admin";
import Courier from "./pages/Courier";
import Main from "./pages/Main";
import Statement from "./pages/Admin/statement";
import Deliveried from "./pages/Admin/deliveried";
import Statistic from "./pages/Admin/statistic";
import Using from "./pages/Admin/using";
import AddForm from "./pages/Admin/Add/add";
import Foods from "./pages/Admin/Add/foods";
import Category from "./pages/Admin/Add/category";
import { CategoryContext, ProductsContext } from './UseContext/ProductsContext';
import Korzina from './components/Korzina';



function App() {

  const [language, setLanguage] = useState("Русский");

  const [mainData, setMainData] = useState({
    categories: ["fish", "burger"],
    foods: [
      {
        name: "Baliq",
        id: "0",
        category: "Fish",
      },
    ],
    users: [],
  });


  const [products, setProducts] = useState([
    {
      img: "https://brandvanegmond.com/wp-content/uploads/2018/12/modern-table-lamps-contemporary-lighting-arthur-collection-art30n-brandvanegmond-471x575.jpg",
      title: "Modern Table Lamps 01",
      price: 100,
      categoy: "Salatlar"
    },
  ]);

  const [categories, setCategory] = useState([
    "Salatlar",
    "Ichimliklar",
    "Shirinliklar",
    "Goshtli Taomlar",
    "Xamirli Taomlar",
    "Yevropa Taomlari",
  ]);


  return (
    <>
      <GlobalStyle />
      <MainData.Provider value={{ mainData, setMainData }}>
        <Language.Provider value={{ language, setLanguage }} >

          <ProductsContext.Provider value={{ products, setProducts }}>
            <CategoryContext.Provider value={{ categories, setCategory }}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/admin" element={<Admin />}>
                  <Route path="Arizalar" element={<Statement />} />
                  <Route path="Yetkazilgan" element={<Deliveried />} />
                  <Route path="Qo'shish" element={<AddForm />}>
                    <Route path="category" element={<Category />} />
                    <Route path="foods" element={<Foods />} />
                  </Route>
                  <Route path="Statistika" element={<Statistic />} />
                  <Route path="Foydalanish" element={<Using />} />
                </Route>
                <Route path="korzina" element={<Korzina />} />
                <Route path="/courier" element={<Courier />} />
              </Routes>
            </CategoryContext.Provider>
          </ProductsContext.Provider>

        </Language.Provider>
      </MainData.Provider>
    </>
  );
}

export default App;
