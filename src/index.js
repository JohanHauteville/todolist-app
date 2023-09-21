import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/home/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Error from './pages/Error';
import { Provider } from 'react-redux';
import store from './utils/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Layout>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </Layout>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
