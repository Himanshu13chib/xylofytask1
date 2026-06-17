# 🏠 SmartPrice AI - Real Estate Intelligence Platform

## Project Overview

SmartPrice AI is a comprehensive real estate analytics platform that combines advanced machine learning with an intuitive web interface for accurate house price predictions and market insights.

## Features

### 🤖 Machine Learning
- **5 Advanced ML Models**: Linear Regression, Random Forest, XGBoost, LightGBM, and Ensemble
- **87% Prediction Accuracy** (R² Score: 0.87)
- Feature importance analysis
- Model performance comparison

### 📊 Interactive Visualizations
- Real-time price predictions
- Market analytics dashboard
- Property data explorer
- 15+ interactive charts and graphs

### 💱 Multi-Currency Support
- Prices displayed in both USD and INR
- Automatic currency conversion (1 USD = ₹83 INR)
- Crore notation for Indian market

### 🎯 Business Intelligence
- Actionable insights for stakeholders
- Market trend analysis
- Investment recommendations
- ROI analysis

## Technology Stack

### Frontend
- React.js 18+
- Material-UI (MUI)
- Recharts for visualizations
- PapaParse for CSV processing

### Backend/ML
- Python 3.x
- scikit-learn
- XGBoost & LightGBM
- Pandas & NumPy
- Matplotlib & Seaborn

## Quick Start

### Option 1: Instant Demo (No Installation)
1. Open `QUICK_START.html` in your browser
2. Explore all features immediately

### Option 2: Full React Application
```bash
# Install dependencies
npm install

# Start development server
npm start

# App opens at http://localhost:3000
```

### Option 3: Jupyter Notebook
```bash
# Install Python dependencies
pip install pandas numpy scikit-learn xgboost lightgbm matplotlib seaborn plotly jupyter

# Launch Jupyter
jupyter notebook analysis.ipynb
```

## Project Structure

```
HousePricePrediction_SmartAI/
├── src/
│   ├── components/          # React components
│   ├── App.js              # Main application
│   └── index.js            # Entry point
├── public/
│   ├── Housing.csv         # Dataset
│   └── index.html          # HTML template
├── analysis.ipynb          # Jupyter notebook
├── QUICK_START.html        # Standalone demo
├── package.json            # Dependencies
└── README.md              # This file
```

## Features Walkthrough

### 1. Dashboard Overview
- Real-time market statistics
- Key performance metrics
- Price distribution analysis
- Property categorization

### 2. Data Explorer
- Browse 545+ properties
- Advanced search and filtering
- Sortable data tables
- Export capabilities

### 3. AI Price Predictor
Interactive sliders for:
- Area (1K-16K sq ft)
- Bedrooms (1-6)
- Bathrooms (1-4)
- Stories (1-4)
- Parking spaces (0-3)
- Amenities (AC, furnishing, etc.)

Get instant predictions with confidence intervals!

### 4. Advanced Analytics
- Model performance metrics
- Feature importance analysis
- Comparative analysis of 5 ML models
- Visual insights with radar charts

### 5. Business Insights
- Top price drivers identified
- Investment strategies
- Market recommendations
- Stakeholder-specific advice

## ML Model Performance

| Model | R² Score | MAE | RMSE |
|-------|----------|-----|------|
| Linear Regression | 0.78 | $550K | $680K |
| Random Forest | 0.85 | $480K | $600K |
| XGBoost | 0.86 | $465K | $585K |
| LightGBM | 0.84 | $490K | $610K |
| **Ensemble** | **0.87** | **$450K** | **$580K** |

## Key Insights

### Top Price Drivers
1. **Area (45% impact)** - Most influential factor
2. **Bathrooms (25% impact)** - Premium feature indicator
3. **Bedrooms (15% impact)** - Family home value
4. **Air Conditioning (8% impact)** - Essential amenity
5. **Location (7% impact)** - Market positioning

### Business Recommendations
- Prioritize bathroom renovations for maximum ROI
- Focus on area optimization in development
- Bundle luxury features for compounding effects
- Target 6000-8000 sqft sweet spot for mid-range properties

## Dataset

- **Source**: Kaggle Housing Prices Dataset
- **Properties**: 545 listings
- **Features**: 13 property characteristics
- **Target**: House price prediction

### Features Include:
- Area, bedrooms, bathrooms, stories
- Main road access, preferred area
- Air conditioning, parking, guestroom
- Basement, hot water heating
- Furnishing status

## Documentation

- `README.md` - This file
- `SETUP_GUIDE.md` - Detailed setup instructions
- `CURRENCY_UPDATE.md` - Currency implementation details
- `START_HERE.txt` - Quick start guide

## Requirements

### For Web App:
- Node.js 16+
- npm

### For Jupyter Notebook:
- Python 3.8+
- See dependencies in notebook

## Author

Himanshu Chib
- GitHub: [@Himanshu13chib](https://github.com/Himanshu13chib)

## Acknowledgments

- Xylofy Team for the opportunity
- Kaggle for the housing dataset
- Open source community for amazing tools

---

Built with ❤️ for Xylofy Data Science Internship | June 2026
