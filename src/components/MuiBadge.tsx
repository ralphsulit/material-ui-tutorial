import { Stack, Badge } from '@mui/material';

import MailIcon from '@mui/icons-material/Mail';

export const MuiBadge = () => {
  return (
    <Stack direction='row' spacing={2} my={5}>
      <Badge badgeContent={5} color='primary'>
        <MailIcon />
      </Badge>

      <Badge badgeContent={0} color='secondary' showZero>
        <MailIcon />
      </Badge>

      <Badge badgeContent={888} color='primary' max={999}>
        <MailIcon />
      </Badge>

      <Badge variant='dot' color='primary' invisible={true}>
      {/* invisible={unreadEmails.length === 0 } */}
        <MailIcon />
      </Badge>
    </Stack>
  )
}