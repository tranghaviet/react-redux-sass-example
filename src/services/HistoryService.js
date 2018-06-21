import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {

}
