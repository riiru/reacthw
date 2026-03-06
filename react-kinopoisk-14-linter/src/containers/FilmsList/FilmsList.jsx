import { useState, useEffect } from 'react'
import { getList as apiGetListFilm } from '../../api/actions/films'
import { useNavigate } from 'react-router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const params = {
  type: 'FILM',
  yearFrom: '2020',
  countries: 1,
}

const FilmsList = () => {
  const [data, setData] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    ;(async () => {
      const response = await apiGetListFilm(params)
      setData(response)
    })()
  }, [])

  const onClick = (id) => {
    navigate('/film/' + id)
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
        Список фильмов
      </Typography>
      <Grid container spacing={3}>
        {data.length !== 0 &&
          data.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.kinopoiskId}>
              <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={item.posterUrlPreview}
                  alt={item.nameRu}
                  sx={{ height: 300, objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" component="div" fontWeight="medium">
                    {item.nameRu}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" onClick={() => onClick(item.kinopoiskId)}>
                    Открыть фильм
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  )
}

export default FilmsList
