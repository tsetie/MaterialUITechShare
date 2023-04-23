import { CssBaseline } from "@mui/material";
import Basics from "./components/Basics";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Stories from "./components/Socials";
import UserPostContainer from "./components/UserPostContainer";

function App() {
  return (
    <>
      <CssBaseline/>
      {/* <Basics/> */}

      {/* Header */}
      <TopBar/>

      {/* Socials section (stories) */}
      <Stories/>
      
      {/* Scrollable feed */}
      <UserPostContainer/>

      {/* Bottom nav */}
      <BottomBar/>


    </>
  );
}

export default App;
