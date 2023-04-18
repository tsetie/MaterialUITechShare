
import { 
  CssBaseline, 
} from "@mui/material";

import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import PostsList from "./components/PostsList";
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <>
      <CssBaseline/>

        {/* 1.) Header */}
        <TopBar/>

        {/* 2.) Socials container */}
        <Stories/>

        {/* 3.) List of centered user posts  */}
        <PostsList/>

        {/* 4.) Bottom navigation bar */}
        <BottomBar/>
    </>
  );
}

export default App;
