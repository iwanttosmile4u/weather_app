import React from 'react';
import './Header.scss';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { currentWeatherSlice } from '../../store/slices/currentWeather';
import { getCurrentWeather } from '../../store/thunks/getCurrentWeather';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[100],
    },
  },
});

export const Header: React.FC = () => {
  const dispatch = useCustomDispatch();
  const { cities } = useCustomSelector((state) => state.currentWeatherSliceReducer);
  const handleChange = (event: SelectChangeEvent) => {
    dispatch(getCurrentWeather(event.target.value));
    dispatch(currentWeatherSlice.actions.selectCity(event.target.value));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            m: 1,
          }}
          >
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              p: 1,
              m: 1,
            }}
            >
              <svg width="40" height="40" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M57.4082 33.734L58.3451 35.0644L56.6275 35.378C54.7676 35.7183 53.5615 37.5324 53.9678 39.3783L54.3423 41.0833L52.7529 40.7342C50.8955 40.3254 49.0738 41.5492 48.7475 43.4218L48.4695 45.0265L47.0323 44.0324C45.4784 42.9584 43.3418 43.3875 42.3237 44.9795L41.3829 46.4521V9.79697L42.2602 11.1681C43.2847 12.7702 45.4378 13.1942 46.9917 12.0986L48.3235 11.1617L48.637 12.8807C48.976 14.7393 50.7902 15.9453 52.6361 15.5403L54.3423 15.1645L53.9932 16.7553C53.5844 18.6113 54.8082 20.4344 56.6808 20.7594L58.2842 21.0374L57.2914 22.4745C56.2174 24.0297 56.6465 26.165 58.2385 27.1832L59.7099 28.1239L58.3388 29.0012C56.7366 30.0257 56.3139 32.1788 57.4082 33.734Z" fill="#FD9827" />
                <path d="M41.383 40.9704C48.4777 40.9704 54.2291 35.219 54.2291 28.1243C54.2291 21.0296 48.4777 15.2782 41.383 15.2782C34.2883 15.2782 28.5369 21.0296 28.5369 28.1243C28.5369 35.219 34.2883 40.9704 41.383 40.9704Z" fill="#FFE05F" />
                <path d="M54.2293 28.1239C54.2293 35.2193 48.4771 40.9703 41.3829 40.9703V15.2788C48.4771 15.2788 54.2293 21.0298 54.2293 28.1239Z" fill="#F9CB0D" />
                <path d="M42.5274 32.2419C42.1958 32.2419 41.8694 32.2632 41.5478 32.3006C41.5794 31.9404 41.5966 31.576 41.5966 31.2076C41.5966 24.3886 36.0687 18.8605 29.2495 18.8605C23.5703 18.8605 18.7873 22.6953 17.3468 27.9164C16.8894 27.8562 16.4229 27.8247 15.9491 27.8247C10.0886 27.8247 5.33777 32.5755 5.33777 38.4361C5.33777 44.2966 10.0886 49.0474 15.9491 49.0474H42.5274C47.1682 49.0474 50.9302 45.2853 50.9302 40.6447C50.9302 36.0039 47.1682 32.2419 42.5274 32.2419Z" fill="#9e9e9e" />
                <path d="M50.9302 40.6435C50.9302 45.2846 47.1684 49.0466 42.5272 49.0466H28.134V18.9097C28.5016 18.8759 28.8735 18.8595 29.2498 18.8595C36.0691 18.8595 41.5969 24.3873 41.5969 31.2066C41.5969 31.5753 41.5795 31.9395 41.5478 32.2996C41.8696 32.2625 42.1956 32.2406 42.5272 32.2406C47.1684 32.2406 50.9302 36.0035 50.9302 40.6435Z" fill="#9e9e9e" />
              </svg>
              <Typography variant="h5" component="div" sx={{ ml: 4 }}>
                Weather App
              </Typography>
            </Box>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="City"
                placeholder="Choose city"
                onChange={handleChange}
              >
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>{city}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
