// Imports
import * as React from 'react';
import Box from '@mui/material/Box';
import Userpost from './UserPost';
import Grid from '@mui/material/Grid';

// Tell webpack this JS file uses these images
import artImage from '../static/images/artPost.png';
import photographyImage from '../static/images/photographyPost.png';
import beeImage from '../static/images/beePost.png';
import timeImage from '../static/images/timePost.png';
import jaguarImage from '../static/images/jaguarPost.png';

// List of users posts example
export default function UserPostsList() {
    return (
      <div>

        {/* 3.) List of scrollable card posts */}
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '90vh', marginBottom: "10vh"}}
            >
            <Grid item xs={3} style={{ minHeight: '90vh', maxWidth: '700px'}}>

                <Userpost 
                    author="Ray Geoletti"  
                    imagePath={photographyImage}
                    date="6h ago" 
                    description="From fairest creatures we desire increase,
                    That thereby beauty's rose might never die,
                    But as the riper should by time decease,
                    His tender heir might bear his memory..."
                />
                <Userpost 
                    author="Arts and Crafts" 
                    imagePath={artImage}
                    date="1w ago" 
                    description="Check out our gingerbread artwork for the annual 
                    Gingerbread man arts & crafts contest! We won 4th place across
                    the nation! Really wanted to get first, but I guess I'll..."
                />
                <Userpost 
                    author="Coyote Peterson" 
                    imagePath={beeImage} 
                    date="1d ago" 
                    description="I went for the Guinness world record for most 
                    bees on a person at once!!! Covered myself up in honey and
                    rocked out the challenge in style!"
                />
                <Userpost 
                    author="TimeTravel_0"     
                    imagePath={timeImage}
                    date="23yr ago" 
                    description="This is our planet's bleak future: a second Civil War splinters America into five factions, leaving the new capital based in Omaha."
                />
                <Userpost 
                    author="Samantha Samantha" 
                    imagePath={jaguarImage}
                    date="1w ago" 
                    description="Today I got a close up of some jaguars. It was really exciting but I was suuupper nervous, like it was purring on me just like a cat!"
                />

            </Grid>
        </Grid>

      </div>
    );
  }