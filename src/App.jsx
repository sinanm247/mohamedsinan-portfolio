import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppRouter from './Components/AppRouter/AppRouter';
import AppLoader from './Components/AppLoader/AppLoader';
import Footer from './Components/Common/Footer/Footer';
import Navbar from './Components/Common/Navbar/Navbar';
import { AppLoaderContext } from './Context/AppLoaderContext';
import { APP_LOADER_DURATION_MS } from './Constants/appLoader';
import routes from './Routes/routes';

function RouteScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const node = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (node) {
        node.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), APP_LOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppLoaderContext.Provider value={{ isPageLoading: pageLoading, loaderDurationMs: APP_LOADER_DURATION_MS }}>
      <AppLoader isVisible={pageLoading} />
      <div className={`app-shell ${!pageLoading ? 'is-ready' : ''}`}>
        <RouteScroll />
        <a className="skip-link" href="/#work">
          Skip to work
        </a>
        <Navbar />
        <AppRouter routes={routes} />
        <Footer />
      </div>
    </AppLoaderContext.Provider>
  );
}

export default App;
