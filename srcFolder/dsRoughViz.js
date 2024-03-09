// An Implementation Of The RoughViz Charting Library :

// We Will Use Objects As ds Doesnt Currently Work Well 
// With Classes

const rz = {};

// Initialization Function
app.CreateRoughChart = function(){
    
    return rz;
}


rz.CreateChartView = function (type, elemName, data, width, height, parentLay) {
    if( type.toLowerCase() === 'bar'){
        drawBarChart(type, elemName, data, width, height, parentLay);
    }
}

function drawBarChart(type, elemName, data, width, height, parentLay){
    chartView = app.AddWebView(parentLay, width, height, 'NoScrollBars,AutoZoom');
    
    
    chartHTML = `
    <html>
    
    <head>
    <script src="roughViz.js"></script>
    </head>
    
    <body>
   
    
    <div class="${elemName}" style="width: 100%; height: 100%;">
    </div>
       
    </body>
    
    <script>
    
    new roughViz.Bar(${JSON.stringify(data)})
    
    </script>
    
    </html>`;
    
    chartView.LoadHtml( chartHTML )
}
    
