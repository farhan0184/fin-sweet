import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './home/home';
import Blog from './blog/blog';
import AboutUs from './about_us/about_us';
import ContactUs from './contact_us/contact_us';
import PrivacyPolicy from './privacy_policy/privacy_policy';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/blog',
        element: <Blog/>
      },
      {
        path:'/about_us',
        element: <AboutUs/>
      },
      {
        path:'/contact_us',
        element: <ContactUs/>
      },
      {
        path:'/privacy_policy',
        element: <PrivacyPolicy/>
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
