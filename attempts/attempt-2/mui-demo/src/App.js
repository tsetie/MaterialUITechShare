import './styles/App.css';

import CssBaseline from '@mui/material/CssBaseline';

import TopBar from './components/TopBar';
import Stories from './components/Stories'
import UserPostsList from './components/PostsList';
import BottomNavBar from './components/BottomNavBar';

function App() {
  return (
    <>
      {/* CSSBaseline: MUI's version of a CSS reset, similar to Normalize.css
          to provide more styling consistency across browsers */}
      <CssBaseline />

      {/* 1.) Header w/ Title, some icons */}
      <TopBar/>

      {/* 2.) Row of social avatars */}
      <Stories/>

      {/* 3.) Scrollable content w/ images, likes, text description */}
      <UserPostsList/>

      {/* 4.) Bottom navigation w/ icons */}
      <BottomNavBar/>

    </>
  );
}

export default App;
