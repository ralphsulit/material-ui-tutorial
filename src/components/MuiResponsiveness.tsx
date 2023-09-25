
import { Box } from '@mui/material';
import { styled } from '@mui/material';

const StyledBox = styled(Box)(({theme}) => ({
  height: '250px',
  width: '250px',
  backgroundColor: theme.palette.neutral?.main,
}))

export const MuiResponsiveness = () => {
  return (
    <>
      <Box sx={{
        height: '300px',
        width: {
          xs: 100, //0 and above
          sm: 200, // 600 and above
          md: 300, // 900 and above
          lg: 400, // 1200 and above
          xl: 500, // 1536 and above
        },
        bgcolor: 'secondary.dark'
      }}>
      </Box>
      <StyledBox />
    </>
  )
}