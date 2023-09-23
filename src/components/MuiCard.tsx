import { Box, Card, CardContent, CardActions, CardMedia, Button, Typography} from '@mui/material';

export const MuiCard = () => {
  return(
    <Box width='300px' my={5}>
      <Card>
        <CardMedia
          component='img'
          height='140'
          image='https://source.unsplash.com/random'
          alt='unsplash image'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            React
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            React is a Javascript library for building user interfaces.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  )
}