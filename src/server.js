const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const app = express();
const port = 3000;   
 // Adjust the port if needed

// Replace with your actual MongoDB connection string if using a database
// mongoose.connect('mongodb://localhost:27017/hodlinfo', { useNewUrlParser: true, useUnifiedTopology: true });

const HodlDataSchema = new mongoose.Schema({
  name: String,
  last: Number,
  buy: Number,
  sell: Number,
  volume: Number,
  base_unit: String,
});

const HodlData = mongoose.model('HodlData', HodlDataSchema);

const fetchData = async () => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const top10Data = response.data.slice(0, 10); // Fetch top 10 results

    // If using MongoDB, uncomment the following lines
    // await