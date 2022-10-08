import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './style/global';
import theme from '../src/style/theme';
import { ThemeProvider } from 'styled-components';
//PAGES
import Home from './pages/Home';
import ItemManagement from 'pages/ItemManagement';
import SignIn from 'pages/SignIn';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route index element={<Home />} />
        <Route path="item-management" element={<ItemManagement />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
