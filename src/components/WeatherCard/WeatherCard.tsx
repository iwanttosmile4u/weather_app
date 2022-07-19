import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CurrentWeather } from '../../store/slices/currentWeather';

interface Props {
  weather: CurrentWeather,
}

export const WeatherCard: React.FC<Props> = ({ weather }) => {
  return (
    <Card sx={{ width: 275, mx: 10, my: 10 }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          {Math.floor(weather.weather.main.temp - 272.15)}
          &#8451;
        </Typography>
        <Typography variant="h5" component="div">
          Today
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Date
        </Typography>
        <Typography variant="body2">
          {weather.city}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};
