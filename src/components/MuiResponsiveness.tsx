import { Box } from '@mui/material';

export const MuiResponsiveness = () => {
  return (
    <Box sx={{
      height: '300px',
      width: {
        xs: 100, //0 and above
        sm: 200, // 600 and above
        md: 300, // 900 and above
        lg: 400, // 1200 and above
        xl: 500, // 1536 and above
      },
      bgcolor: 'primary.main'
    }}>
      
    </Box>
  )
}