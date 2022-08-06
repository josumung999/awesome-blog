import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import { Fragment } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Routes>
          <Route path='/' element={ <Posts /> } />
          <Route path='post/:id' element={ <Post /> } />
        </Routes>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
