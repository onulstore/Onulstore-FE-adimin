import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './style/global';
import theme from '../src/style/theme';
import { ThemeProvider } from 'styled-components';
//PAGES
import Home from './pages/Home';
import ProductRegister from 'pages/ItemRegister';
import ItemManagement from 'pages/ItemManagement';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route index element={<Home />} />
        <Route path="item-register" element={<ProductRegister />} />
        <Route path="item-management" element={<ItemManagement />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
