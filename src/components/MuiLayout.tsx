import { Box } from '@mui/material';

export const MuiLayout = () => {
  return( 
    <Box my={5} display='flex'>
      <Box 
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'primary.light'
          }
        }}
      >
        Box Component
      </Box>
      
      <Box
        display='flex'
        flexDirection='row'
        height='100px'
        width='100px'
        bgcolor='success.light'
        p={2}
      >
      </Box>
    </Box>
  )
}