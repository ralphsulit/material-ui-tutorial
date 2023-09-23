import { Box, TextField, MenuItem } from '@mui/material';


import { useState } from 'react';

export const MuiSelect = () => {
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const handleMultipleCountries = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setCountries(typeof value === 'string' ? value.split(',') : value);
  }

  return (
    <Box width='250px'>
      <Box my={5}>
        <TextField 
          label='Select Country' 
          value={country}
          onChange={handleChange}
          select
          fullWidth
          size='small'
          color="secondary"
          helperText='Select your Country'
        >
          <MenuItem value='PH'>Philippines</MenuItem>
          <MenuItem value='JP'>Japan</MenuItem>
          <MenuItem value='CA'>Canada</MenuItem>
        </TextField>
      </Box>

      <Box my={5}>
        <TextField
          label='Multiple Options Select'
          value={countries}
          onChange={handleMultipleCountries}
          select
          fullWidth
          SelectProps={{
            multiple: true
          }}
        >
          <MenuItem value='PH'>Philippines</MenuItem>
          <MenuItem value='JP'>Japan</MenuItem>
          <MenuItem value='CA'>Canada</MenuItem>
        </TextField>
      </Box>

    </Box>
  )
}