import { Box, Card, CardContent, CardMedia, Divider, Typography } from '@mui/material'

interface FilmsProps {
    film: FilmType
}

const Films: React.FC<FilmsProps> = ({ film }) => {
    return (
        <Card sx={{ maxWidth: 400, margin: 2 }}>
            <Box sx={{ position: 'relative', height: '400px', width: '100%' }}>
                <CardMedia
                    component='img'
                    image={film.poster}
                    alt='film title'
                    sx={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'fill' }}
                />
            </Box>
            <CardContent>
                <Typography  variant='h5' component='div'>
                    {film.title}
                </Typography>
                <Typography variant='h6' component='div'>
                    Episode No. {film.episode_id}
                </Typography>
                <Box className='film-card' sx={{ display: 'flex', gap: '5px' }}>
                    <Box sx={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
                        <Typography variant='body1'>
                            Director:
                        </Typography>
                        <Typography variant='body1'>
                            Producer:
                        </Typography>
                        <Typography variant='body1'>
                            Release Date:
                        </Typography>
                        <Typography variant='body1'>
                            Opening Crawl:
                        </Typography>
                    </Box>

                    <Divider orientation='vertical' sx={{ height: 330, backgroundColor: '#1D1D20' }} />
                    <Box sx={{ display: 'flex', gap: '6px', flexDirection: 'column', flexGrow: 1 }}>
                        <Typography variant='body1'>
                            {film.director}
                        </Typography>
                        <Typography variant='body1'>
                            {film.producer}
                        </Typography>
                        <Typography variant='body1'>
                            {film.release_date}
                        </Typography>
                        <Typography variant='body2' sx={{ marginTop: 1 }}>
                            {film.opening_crawl}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Films;
