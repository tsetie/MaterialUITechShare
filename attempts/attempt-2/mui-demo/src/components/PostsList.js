import * as React from 'react';
import { CssBaseline, Box, Button, Container, Typography } from '@mui/material';
import UserPost from './UserPost'
import Stories from './Stories';

// Tell webpack this JS file uses these images
import artImage from '../static/images/artPost.png';
import photographyImage from '../static/images/photographyPost.png';
import beeImage from '../static/images/beePost.png';
import timeImage from '../static/images/timePost.png';
import jaguarImage from '../static/images/jaguarPost.png';

export default function UserPostsList() {
  return (
    <>
      {/* CSSBaseline: MUI's version of a CSS reset, similar to Normalize.css
        to provide more styling consistency across browsers */}
      <CssBaseline />

      {/* 3.) Scrollable content w/ images, likes, text description */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >

        {/* List of user posts */}
        <UserPost 
          author="Ray Geoletti"  
          imagePath={photographyImage}
          date="6h ago" 
          description="From fairest creatures we desire increase,
          That thereby beauty's rose might never die,
          But as the riper should by time decease,
          His tender heir might bear his memory..."
      />
      <UserPost 
          author="Arts and Crafts" 
          imagePath={artImage}
          date="1w ago" 
          description="Check out our gingerbread artwork for the annual 
          Gingerbread man arts & crafts contest! We won 4th place across
          the nation! Really wanted to get first, but I guess I'll..."
      />
      <UserPost 
          author="Coyote Peterson" 
          imagePath={beeImage} 
          date="1d ago" 
          description="I went for the Guinness world record for most 
          bees on a person at once!!! Covered myself up in honey and
          rocked out the challenge in style!"
      />
      <UserPost 
          author="TimeTravel_0"     
          imagePath={timeImage}
          date="23yr ago" 
          description="This is our planet's bleak future: a second Civil War splinters America into five factions, leaving the new capital based in Omaha."
      />
      <UserPost 
          author="Samantha Samantha" 
          imagePath={jaguarImage}
          date="1w ago" 
          description="Today I got a close up of some jaguars. It was really exciting but I was suuupper nervous, like it was purring on me just like a cat!"
      />
        
      </Box>

    </>
  );
}
