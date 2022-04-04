import React from 'react';
import LineChart from '../LineChart/LineChart'
import BarChartShow from '../BarChartShow/BarChartShow'

const DashBoard = () => {
    return (
        <div>
            <LineChart></LineChart>
            <BarChartShow></BarChartShow>
        </div>
    );
};

export default DashBoard;