import { useState, useEffect } from 'react'
import { get as apiGetFilm } from '../../api/actions/films'
import { getList as apiGetListFilm } from '../../api/actions/films'
import { useNavigate, useParams } from 'react-router'
import {
  addToFavorites,
  removeFromFavorites,
} from '../../store/favoritesReducer'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'

const Film = () => {
  const [data, setData] = useState([])

  const favorites = useSelector((state) => state.favorites)
  const dispatch = useDispatch()

  const params = useParams()
  const navigate = useNavigate()

  const isFavorites = favorites.some((el) => el.id === data?.kinopoiskId)

  useEffect(() => {
    ;(async () => {
      apiGetListFilm({})
      const response = await apiGetFilm(params.id)
      setData(response)
    })()
  }, [params.id])

  const onClose = () => {
    navigate(-1)
  }

  const onFavoritesAddClick = () => {
    dispatch(
      addToFavorites({
        id: data.kinopoiskId,
        name: data.nameRu,
        poster: data.posterUrl,
      }),
    )
  }
  const onFavoritesRemoveClick = () => {
    dispatch(removeFromFavorites(data.kinopoiskId))
  }

  return (
    <Box sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
      {data && (
        <Card variant="outlined" sx={{ overflow: 'hidden' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <CardMedia
              component="img"
              image={data.posterUrl}
              alt={data.nameRu}
              sx={{
                width: { xs: '100%', md: 280 },
                height: 400,
                objectFit: 'cover',
              }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                {data.nameRu}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                {data.description}
              </Typography>
              <Link
                href={`https://www.kinopoisk.ru/film/${params.id}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ display: 'inline-block', mb: 2 }}
              >
                Ссылка на Кинопоиск
              </Link>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button variant="outlined" onClick={onClose}>
                  Назад
                </Button>
                {isFavorites ? (
                  <Button
                    variant="contained"
                    color="error"
                    onClick={onFavoritesRemoveClick}
                  >
                    Удалить из избранного
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={onFavoritesAddClick}
                  >
                    Добавить в избранное
                  </Button>
                )}
              </Stack>
            </CardContent>
          </Box>
        </Card>
      )}
    </Box>
  )
}

export default Film
