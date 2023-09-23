import { useState } from 'react';

import { BottomNavigation, BottomNavigationAction, Paper, Box } from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

export const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);
  const [selectedContent, setSelectedContent] = useState("Home Content");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);

    // Update the selected content based on the tab index
    switch (newValue) {
      case 0:
        setSelectedContent("Home Content");
        break;
      case 1:
        setSelectedContent("Favorites Content");
        break;
      case 2:
        setSelectedContent("Profile Content");
        break;
      default:
        setSelectedContent("Home Content"); // Default to Home content
        break;
    }
  };

  
  return (
    <Paper sx={{padding: '32px', margin: '20px', height: '100px'}}>
      <Box sx={{textAlign: 'center'}}>{selectedContent}</Box>

      <BottomNavigation
        sx={{width: '100%', marginTop: '50px'}}
        value={value}
        onChange={handleChange}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  )
}