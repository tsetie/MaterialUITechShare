import * as React from 'react'
import Userpost from './userPost'
import BottomNavBar from './bottomNavBar.js'
import TopBar from './topBar.js'
import Stories from './stories.js'

export default function Photogram() {
  return (
    <>   
      <TopBar/>
      <Stories/>
      <Userpost/>
      <Userpost/>
      <Userpost/>
      <Userpost/>
      <BottomNavBar/>
    </>
    

  );
}
