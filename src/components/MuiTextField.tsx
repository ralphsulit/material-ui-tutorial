import { Stack, TextField, InputAdornment } from '@mui/material';

import { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';

export const MuiTextField = () => {
  const [value, setValue] = useState('');

  return (
    <Stack spacing={4} mt={2}>
      <Stack direction='row' spacing={2}>
        <TextField label='Username' variant='outlined'/>
        <TextField label='Username' variant='filled'/>
        <TextField label='Username' variant='standard'/>
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField label='Small Secondary' size='small' color='secondary' />
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField 
          label='Form Input' 
          required value={value} 
          onChange={e => setValue(e.target.value)}
          error={!value}
          helperText={!value ? 'Required' : ''}
        />
        <TextField 
          label='Password'
          type='password' 
          helperText='Do not share your password' 
        />
        <TextField label='Read Only' InputProps={{ readOnly: true}} />
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField 
          label='Amount' 
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
          }}
        />
        <TextField 
          label='Weight' 
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>
          }}
        />
        <TextField 
          label='Password'
          type='password'
          InputProps={{
            endAdornment: <InputAdornment position='end'><VisibilityIcon/></InputAdornment>
          }}
        />
      </Stack>
    </Stack>
  )
}