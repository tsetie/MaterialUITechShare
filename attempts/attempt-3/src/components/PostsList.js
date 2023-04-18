import * as React from 'react';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import UserPost from './UserPost';

// Tell webpack this JS file uses these images
import photographyImage from '../images/photographyPost.png';
import artImage from '../images/artPost.png';
import beeImage from '../images/beePost.png';
import timeImage from '../images/timePost.png';
import jaguarImage from '../images/jaguarPost.png';  

export default function PostsList() {
  return (
    <>
      <CssBaseline/>
      
      {/* 3.) Scrollable content w/ images, likes, text description */}
      {/* Main div */}
      <Box
        sx={{
          // bgcolor: 'royalblue',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* Center div */}
        <Box 
          sx={{
            // bgcolor: 'maroon',
            minHeight: '100vh',
            width: '65vh',
        }}> 

            {/* List of user posts */}
          <UserPost 
              author="Ray Geoletti"  
              image={photographyImage}
              date="6h ago" 
              description="From fairest creatures we desire increase,
              That thereby beauty's rose might never die,
              But as the riper should by time decease,
              His tender heir might bear his memory..."
          />
          <UserPost 
              author="Arts and Crafts" 
              image={artImage}
              date="1w ago" 
              description="Check out our gingerbread artwork for the annual 
              Gingerbread man arts & crafts contest! We won 4th place across
              the nation! Really wanted to get first, but I guess I'll..."
          />
          <UserPost 
              author="Coyote Peterson" 
              image={beeImage} 
              date="1d ago" 
              description="I went for the Guinness world record for most 
              bees on a person at once!!! Covered myself up in honey and
              rocked out the challenge in style!"
          />
          <UserPost 
              author="TimeTravel_0"     
              image={timeImage}
              date="23yr ago" 
              description="This is our planet's bleak future: a second Civil War splinters America into five factions, leaving the new capital based in Omaha."
          />
          <UserPost 
              author="Samantha Samantha" 
              image={jaguarImage}
              date="1w ago" 
              description="Today I got a close up of some jaguars. It was really exciting but I was suuupper nervous, like it was purring on me just like a cat!"
          />

        </Box>

      </Box>
      
    </>
  );
}
