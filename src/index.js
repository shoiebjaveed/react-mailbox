import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { AuthContextProvider } from './store/auth-context';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AuthContextProvider>
    <Provider store={store}>
        <App />
    </Provider>
</AuthContextProvider>);
