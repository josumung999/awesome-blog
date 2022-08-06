import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Posts from './components/posts/Posts';
import Post from './components/post/Post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Posts /> } />
        <Route path='post/:id' element={ <Post /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
