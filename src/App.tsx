import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CreateProduct from "./pages/CreateProduct";
import Dashboard from "./pages/Dashboard";
import UpdateProduct from "./pages/UpdateProduct";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/products" element={<Dashboard />} />
        <Route path="/analytics" element={<Dashboard />} />
        <Route path="/billing" element={<Dashboard />} />
        <Route path="/company" element={<Dashboard />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/product/:id" element={<UpdateProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
