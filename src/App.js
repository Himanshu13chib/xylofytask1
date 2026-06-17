import React, { useState, useEffect } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Tabs,
  Tab,
  IconButton,
  Tooltip,
  Paper,
  Fab,
  Zoom
} from '@mui/material';
import {
  Dashboard,
  ShowChart,
  Psychology,
  Insights,
  Analytics,
  Brightness4,
  Brightness7,
  GitHub
} from '@mui/icons-material';

// Import components
import DashboardView from './components/DashboardView';
import DataExplorer from './components/DataExplorer';
import PricePredictor from './components/PricePredictor';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import BusinessInsights from './components/BusinessInsights';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#90caf9' : '#1976d2',
      },
      secondary: {
        main: darkMode ? '#f48fb1' : '#dc004e',
      },
      background: {
        default: darkMode ? '#0a1929' : '#f5f5f5',
        paper: darkMode ? '#1a2035' : '#ffffff',
      },
    },
    typography: {
      fontFamily: "'Inter', 'Poppins', sans-serif",
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const renderTabContent = () => {
    switch (currentTab) {
      case 0:
        return <DashboardView />;
      case 1:
        return <DataExplorer />;
      case 2:
        return <PricePredictor />;
      case 3:
        return <AdvancedAnalytics />;
      case 4:
        return <BusinessInsights />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', background: darkMode ? '#0a1929' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        {/* App Bar */}
        <AppBar position="sticky" elevation={0} sx={{ background: darkMode ? '#1a2035' : 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
          <Toolbar>
            <ShowChart sx={{ mr: 2, fontSize: 40, color: darkMode ? '#90caf9' : '#667eea' }} />
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 700, color: darkMode ? '#fff' : '#1a2035' }}>
              SmartPrice AI
              <Typography variant="caption" display="block" sx={{ color: darkMode ? '#90caf9' : '#667eea', fontSize: '0.7rem' }}>
                Real Estate Intelligence Platform
              </Typography>
            </Typography>

            <Tooltip title={darkMode ? 'Light Mode' : 'Dark Mode'}>
              <IconButton onClick={() => setDarkMode(!darkMode)} sx={{ mr: 1 }}>
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Tooltip>
          </Toolbar>

          {/* Tabs */}
          <Box sx={{ borderTop: 1, borderColor: 'divider', background: darkMode ? '#0d1b2a' : 'rgba(255,255,255,0.9)' }}>
            <Tabs
              value={currentTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ px: 2 }}
            >
              <Tab icon={<Dashboard />} label="Overview" iconPosition="start" />
              <Tab icon={<ShowChart />} label="Explore Data" iconPosition="start" />
              <Tab icon={<Psychology />} label="Price Predictor" iconPosition="start" />
              <Tab icon={<Analytics />} label="Advanced Analytics" iconPosition="start" />
              <Tab icon={<Insights />} label="Business Insights" iconPosition="start" />
            </Tabs>
          </Box>
        </AppBar>

        {/* Main Content */}
        <Container maxWidth="xl" sx={{ mt: 4, pb: 4 }}>
          <Zoom in={true} timeout={500}>
            <Box>
              {renderTabContent()}
            </Box>
          </Zoom>
        </Container>

        {/* Floating Action Button */}
        <Tooltip title="View on GitHub">
          <Fab
            color="primary"
            sx={{
              position: 'fixed',
              bottom: 24,
              right: 24,
            }}
            href="https://github.com"
            target="_blank"
          >
            <GitHub />
          </Fab>
        </Tooltip>
      </Box>
    </ThemeProvider>
  );
}

export default App;
