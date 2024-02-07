import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';



var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Graphique = () => {
  
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", 
        title:{
            text: "Simple Column Chart with Index Labels"
        },
        axisY: {
            includeZero: true
        },
        data: [{
            type: "column",
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                { x: 10, y: 71 },
                { x: 20, y: 55 },
                { x: 30, y: 50 },
                { x: 40, y: 65 },
                { x: 50, y: 71 },
                { x: 60, y: 68 },
                { x: 70, y: 38 },
                { x: 80, y: 90, indexLabel: "Highest" },
                { x: 90, y: 54 },
                { x: 100, y: 60 },
                { x: 110, y: 21 },
                { x: 120, y: 49 },
                { x: 130, y: 36 }
            ]
        }]
    };
    
    return (
        <div className="w-full mb-24">
            {/* Rendering the CanvasJSChart component with specified options */}
            <CanvasJSChart options={options} 
               
            />
          
        </div>
    );
    };


export default Graphique;