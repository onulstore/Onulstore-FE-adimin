import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './style/global';
import theme from '../src/style/theme';
import { ThemeProvider } from 'styled-components';
//PAGES
import Home from './pages/Home';
import HomeConfig from 'pages/HomeConfig';
import BannerConfig from 'components/BannerConfig';
import CurationConfig from 'components/CurationConfig';
import ReviewConfig from 'components/ReviewConfig';
import TodayConfig from 'components/TodayConfig';
import MagazineConfig from 'components/MagazineConfig';
import MdConfig from 'components/MdConfig';
import ItemRegister from 'pages/ItemRegister';
import ItemManagement from 'pages/ItemManagement';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home-config" element={<HomeConfig />}>
          <Route path="banner" element={<BannerConfig />} />
          <Route path="curation" element={<CurationConfig />} />
          <Route path="review" element={<ReviewConfig />} />
          <Route path="today" element={<TodayConfig />} />
          <Route path="magazine" element={<MagazineConfig />} />
          <Route path="md" element={<MdConfig />} />
        </Route>
        <Route path="item-register" element={<ItemRegister />} />
        <Route path="item-management" element={<ItemManagement />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
