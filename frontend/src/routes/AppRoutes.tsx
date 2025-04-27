import { Routes, Route, Navigate  } from 'react-router-dom';
import ProductList from '../pages/ProductList';
import ProductForm from '../pages/ProductForm';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/product" />} />
      <Route path="/product" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductForm />} />
    </Routes>
  );
}
