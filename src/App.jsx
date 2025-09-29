import React from 'react';
import ProductPage from './components/pages/ProductPage';

// Import all CSS files
import './App.css'; // App-level styles
import './index.css'; // Global styles
import './styles/global.css'; // Styles that apply across multiple components
import './styles/header.css'; // Header styles
import './styles/product.css'; // Product-related styles
import './styles/sidebar.css'; // Sidebar styles

function App() {
  return <ProductPage />;
}

export default App;
