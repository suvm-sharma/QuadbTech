const express = require('express');
const superagent = require('superagent');
const userModel = require('./../model/userModel');

exports.getAllData = async (req, res) => {
  try {
    const data = await superagent.get(`https://api.wazirx.com/api/v2/tickers`);

    const filteredData1 = Object.values(data.body);

    const filteredData = Object.values(data.body).map(
      ({ name, last, buy, sell, volume, base_unit }) => ({
        name,
        last,
        buy,
        sell,
        volume,
        base_unit,
      })
    );

    const newArr = filteredData.slice(0, 10);

    res.status(200).json({
      status: 'Success',
      result: newArr.length,
      data: newArr,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};
