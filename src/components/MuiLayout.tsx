import { Box, Stack, Divider } from '@mui/material';

export const MuiLayout = () => {
  return( 
    <Stack 
      my={5} 
      sx={{border: '1px solid'}} 
      direction='row' 
      spacing={2}
      divider={<Divider orientation='vertical' flexItem />}
    >
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
    </Stack>
  )
}