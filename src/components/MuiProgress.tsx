import { Stack, CircularProgress, LinearProgress } from '@mui/material';

export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <Stack direction='row'>
        <CircularProgress />
        <CircularProgress color='success' />
        <CircularProgress color='error' variant='determinate' value={60} />
      </Stack>

      <LinearProgress />
      <LinearProgress color='success' />
      <LinearProgress color='error' variant='determinate' value={60} />
    </Stack>
  )
}