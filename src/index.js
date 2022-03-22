import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Slide from '@material-ui/core/Slide';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          TransitionComponent={Slide}
        >
          <Routes>
            <Route path='/*' element={<App />}/>
          </Routes>
          
        </SnackbarProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


