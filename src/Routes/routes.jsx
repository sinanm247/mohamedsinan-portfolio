import HomePage from '../Pages/HomePage';
import PortfolioPage from '../Pages/PortfolioPage';

const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/portfolio',
        element: <PortfolioPage />
    }
]

export default routes;