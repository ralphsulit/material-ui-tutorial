import { useState } from 'react';

import { 
  Box, 
  FormControl, 
  FormLabel, 
  FormControlLabel, 
  Radio, 
  RadioGroup,
  FormHelperText
} from '@mui/material';

export const MuiRadioButton = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return(
    <Box>
      <FormControl>
        <FormLabel id='job-experience-group-label'>
          Years of Experience
        </FormLabel>
        <RadioGroup 
          name='job-experience-group' 
          aria-labelledby='job-experience-group-label'
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio size='small' color='primary' />} label='0-2' value='0-2' />
          <FormControlLabel control={<Radio size='medium' color='secondary' />} label='3-5' value='3-5' />
          <FormControlLabel control={<Radio color="warning" />} label='6-10' value='6-10' />
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText> 
      </FormControl>
    </Box>
  )
}