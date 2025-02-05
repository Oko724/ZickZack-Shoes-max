



import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ceos = [
  {
    src: '/assets/images/zack-sit.jpg',
    name: 'ZickZack',
    title: 'The Visionary Leader',
    description: 'Innovation and leadership in every step.',
  },
  {
    src: '/assets/images/zack-stand.jpg',
    name: 'Zackie',
    title: 'The Mastermind CEO',
    description: 'Strategic thinking, exceptional execution.',
  },
  {
    src: '/assets/images/zack-camera.jpg',
    name: 'CheckZack',
    title: 'The Game Changer',
    description: 'Breaking limits and setting new standards.',
  },
];

export function HeaderCeo() {
  return (
    <Box
      sx={{
        width: '100%',
        height: 500,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        style={{ width: '100%', height: '100%' }}
      >
        {ceos.map((ceo, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#fff',
                backgroundImage: `url(${ceo.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'darken',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
              }}
            >
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: 36, md: 64 },
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: 3,
                    textShadow: '3px 3px 10px rgba(0, 0, 0, 0.8)',
                  }}
                >
                  {ceo.name}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: 20, md: 28 },
                    fontWeight: '300',
                    mt: 2,
                    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
                  }}
                >
                  {ceo.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: 16, md: 20 },
                    fontWeight: '300',
                    mt: 1,
                    maxWidth: '600px',
                    mx: 'auto',
                    textShadow: '1px 1px 6px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  {ceo.description}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
