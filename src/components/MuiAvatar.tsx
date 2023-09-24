import { Stack, Avatar, AvatarGroup } from '@mui/material';

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={1}>
        <Avatar sx={{bgcolor: 'primary.light'}}>AB</Avatar>
        <Avatar sx={{bgcolor: 'success.light'}}>CD</Avatar>
      </Stack>

      <Stack direction='row' spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{bgcolor: 'primary.light'}}>AB</Avatar>
          <Avatar 
            src='https://randomuser.me/api/portraits/women/79.jpg'
            alt='Jane Doe'
          />  
          <Avatar 
            src='https://randomuser.me/api/portraits/men/51.jpg'
            alt='John Doe'
          />  
          <Avatar sx={{bgcolor: 'success.light'}}>CD</Avatar>
        </AvatarGroup>
      </Stack>

      <Stack direction='row' spacing={1}>
        <Avatar variant='square' sx={{bgcolor: 'primary.light', width: 48, height: 48}}>AB</Avatar>
        <Avatar variant='rounded' sx={{bgcolor: 'success.light', width: 48, height: 48}}>CD</Avatar>
      </Stack>
    </Stack>
  )
}