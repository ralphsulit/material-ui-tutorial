import { useState } from 'react';

import { Stack, Rating } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);

  const handleChange = (
    event: React.ChangeEvent<{}>, 
    newValue: number | null) => {
      setValue(newValue);
  }

  return( 
    <Stack my={5}>
      <Rating 
        value={value} 
        onChange={handleChange} 
        precision={0.5} 
        size='large'
      />
      <Rating 
        value={3} 
        precision={0.5} 
        size='medium'
        icon={<FavoriteIcon fontSize='inherit' color='error' />}
        emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>}
        readOnly
        // highlightSelectedOnly (for emojis)
      />
    </Stack>
  )
}