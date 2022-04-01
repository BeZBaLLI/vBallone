import './App.css';
import {Route, Routes} from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Navi from './components/navi/navi';
import Profile from './components/content/profile/profile';
import Friends from './components/content/friends/friends';
import Ballon from './components/content/ballon/ballon';
import Messages from './components/content/messages/messages';
import Musik from './components/content/musik/musik';
import Photos from './components/content/photos/photos';
import Settings from './components/content/settings/settings';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Navi />
        <Routes>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/friends" element={<Friends />}/>
          <Route path="/ballon" element={<Ballon />}/>
          <Route path="/messages" element={<Messages />}/>
          <Route path="/musik" element={<Musik />}/>
          <Route path="/photos" element={<Photos />}/>
          <Route path="/settings" element={<Settings />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
