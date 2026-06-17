import React from 'react';
import { Paper, Typography, Box, Grid, Card, CardContent, Chip } from '@mui/material';
import { Analytics, TrendingUp, ShowChart, PieChart } from '@mui/icons-material';
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  ResponsiveContainer, Legend, Tooltip
} from 'recharts';

const AdvancedAnalytics = () => {
  const featureImportance = [
    { feature: 'Area', importance: 0.45 },
    { feature: 'Bathrooms', importance: 0.25 },
    { feature: 'Bedrooms', importance: 0.15 },
    { feature: 'A/C', importance: 0.08 },
    { feature: 'Location', importance: 0.07 },
  ];

  const radarData = [
    { subject: 'Area', A: 120, B: 110, fullMark: 150 },
    { subject: 'Bathrooms', A: 98, B: 130, fullMark: 150 },
    { subject: 'Bedrooms', A: 86, B: 130, fullMark: 150 },
    { subject: 'Amenities', A: 99, B: 100, fullMark: 150 },
    { subject: 'Location', A: 85, B: 90, fullMark: 150 },
  ];

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 3, mb: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>
          📊 Advanced Analytics
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
          Deep dive into ML model performance and feature analysis
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        {/* Model Performance */}
        <Grid item xs={12} md={4}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <TrendingUp sx={{ mr: 1, verticalAlign: 'middle' }} />
                Model Performance
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary">R² Score</Typography>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>0.87</Typography>
                <Typography variant="caption" color="success.main">Excellent Accuracy</Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary">MAE</Typography>
                <Typography variant="h6">$450,000</Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary">RMSE</Typography>
                <Typography variant="h6">$580,000</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Models Comparison */}
        <Grid item xs={12} md={8}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>🏆 Models Comparison</Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {[
                { name: 'Linear Regression', r2: 0.78, mae: '550K' },
                { name: 'Random Forest', r2: 0.85, mae: '480K' },
                { name: 'XGBoost', r2: 0.86, mae: '465K' },
                { name: 'LightGBM', r2: 0.84, mae: '490K' },
                { name: 'Ensemble', r2: 0.87, mae: '450K', best: true },
              ].map((model, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Card variant="outlined" sx={{ 
                    border: model.best ? 2 : 1, 
                    borderColor: model.best ? 'primary.main' : 'divider' 
                  }}>
                    <CardContent>
                      <Typography variant="body2" fontWeight={600}>{model.name}</Typography>
                      {model.best && <Chip label="Best" size="small" color="primary" sx={{ mt: 0.5 }} />}
                      <Typography variant="h6" color="primary" sx={{ mt: 1 }}>R²: {model.r2}</Typography>
                      <Typography variant="caption">MAE: ${model.mae}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Feature Importance */}
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>⭐ Feature Importance Analysis</Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {featureImportance.map((item, idx) => (
                <Grid item xs={12} sm={6} md key={idx}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">{item.feature}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                      <Box sx={{
                        width: '100%',
                        height: 8,
                        bgcolor: 'grey.200',
                        borderRadius: 1,
                        mr: 1
                      }}>
                        <Box sx={{
                          width: `${item.importance * 100}%`,
                          height: '100%',
                          bgcolor: '#667eea',
                          borderRadius: 1
                        }} />
                      </Box>
                      <Typography variant="caption" fontWeight={600}>
                        {(item.importance * 100).toFixed(0)}%
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Radar Chart */}
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>🎯 Feature Impact Comparison</Typography>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Premium Properties" dataKey="A" stroke="#667eea" fill="#667eea" fillOpacity={0.6} />
                <Radar name="Standard Properties" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdvancedAnalytics;
