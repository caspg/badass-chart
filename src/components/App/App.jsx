import React from 'react'

import './App.css'
import Chart from '../Chart'
import Footer from '../Footer'

export default () =>
  <div className="App">
    <div className="App-header">
      <h2>Welcome to the</h2><h1>BAD ASS CHART</h1>
    </div>

    <div className="App-chart-container">
      <p className="App-chart-description">
        Arnold Schwarzenegger body count per movie.
      </p>
      <p className="App-chart-source">
        Data source: <a href="http://www.moviebodycounts.com">www.moviebodycounts.com</a>
      </p>

      <Chart />
    </div>

    <Footer />
  </div>
