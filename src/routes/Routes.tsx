import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { LoadingProvider } from "../context/useLoadingContext";
import { Home } from "../pages/Home/Home";

//Aqui vão ser inseridas as rotas da aplicação e também o context 
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </LoadingProvider>
    </BrowserRouter>
  );
};
