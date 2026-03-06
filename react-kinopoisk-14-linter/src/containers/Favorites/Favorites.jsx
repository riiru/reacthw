import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites)

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
        Избранное
      </Typography>

      {favorites.length !== 0 ? (
        <Grid container spacing={3}>
          {favorites.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.id}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  image={item.poster}
                  alt={item.name}
                  sx={{ height: 300, objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    ID: {item.id}
                  </Typography>
                  <Typography variant="subtitle1" component="div" fontWeight="medium">
                    {item.name}
                  </Typography>
                  <Link href={item.poster} target="_blank" rel="noopener noreferrer" sx={{ mt: 1, display: 'inline-block' }}>
                    Постер
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" color="text.secondary">
          В избранном нет фильмов
        </Typography>
      )}
    </Box>
  )
}

export default Favorites
