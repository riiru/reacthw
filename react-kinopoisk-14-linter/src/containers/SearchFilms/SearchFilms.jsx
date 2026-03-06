import { useState, useEffect } from 'react'
import { search as apiSearchFilms } from '../../api/actions/films'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'

const SearchFilms = () => {
  const [value, setValue] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    ;(async () => {
      const params = {
        keyword: value,
      }

      const response = await apiSearchFilms(params)
      setData(response)
    })()
  }, [value])

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
        Поиск по фильмам
      </Typography>

      <TextField
        label="Введите название фильма"
        variant="outlined"
        size="small"
        onChange={onChange}
        value={value}
        sx={{ mb: 3, minWidth: 300 }}
      />

      <Grid container spacing={3}>
        {data.length !== 0 &&
          data.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.filmId}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  image={item.posterUrlPreview}
                  alt={item.nameRu}
                  sx={{ height: 300, objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="subtitle1" component="div" fontWeight="medium">
                    {item.nameRu}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  )
}

export default SearchFilms
