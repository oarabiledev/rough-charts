// An Implementation Of The RoughViz Charting Library :

/* This DroidScript Plugin Is Free And Open Source, As
   It Uses roughViz.js
   https://www.jwilber.me/roughviz/
   https://github.com/jwilber/roughViz
   
   This Plugin Was Ported By Oarabile Koore
*/


// We Will Use Objects As ds Doesnt Currently Work Well 
// With Classes

const rz = {};
var chartView;

// Initialization Function
app.CreateRoughChart = function(){
    return rz;
}


rz.CreateChartView = function (type, elemName, data, width, height, parentLay) {
    this.setBackColor = function (color){
        chartView.SetBackColor(color);
    }
    
    this.setBackAlpha = function(alpha){
        chartView.SetBackAlpha(alpha);
    }
    
    this.reloadChart = function(){
        chartView.Reload();
    }
    
    this.printChart = function(){
        chartView.Print();
    }
    
    this.imageChart = function(fileDirectory){
        chartView.Capture(fileDirectory);
    }
        
    if( type.toLowerCase() === 'bar'){
        drawBarChart(type, elemName, data, width, height, parentLay);
    }
    
    else if(type.toLowerCase() === 'barh'){
        drawBarChartHorizontal(type, elemName, data, width, height, parentLay);
    }
    
    else if(type.toLowerCase() === 'donut'){
        drawDonutChart(type, elemName, data, width, height, parentLay);
    }
    
    else if(type.toLowerCase() === 'pie'){
        drawPieChart(type, elemName, data, width, height, parentLay);
    }
    
    else if(type.toLowerCase() === 'scatter'){
        drawScatterChart(type, elemName, data, width, height, parentLay);
    }
    
    else if(type.toLowerCase() === 'stackedbar'){
        drawStackedBar(type, elemName, data, width, height, parentLay);
    }
    
    else if(type.toLowerCase() === 'line'){
        drawLineChart(type, elemName, data, width, height, parentLay);
    }
    else {
        drawForceChart(type, elemName, data, width, height, parentLay);
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
    
function drawBarChartHorizontal(type, elemName, data, width, height, parentLay){
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
    
    new roughViz.BarH(${JSON.stringify(data)})
    
    </script>
    
    </html>`;
    
    chartView.LoadHtml( chartHTML )
}

function drawDonutChart(type, elemName, data, width, height, parentLay){
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
    
    new roughViz.Donut(${JSON.stringify(data)})
    
    </script>
    
    </html>`;
    
    chartView.LoadHtml( chartHTML )
}

function drawPieChart(type, elemName, data, width, height, parentLay){
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
    
    new roughViz.Pie(${JSON.stringify(data)})
    
    </script>
    
    </html>`;
    
    chartView.LoadHtml( chartHTML )
}

function drawScatterChart(type, elemName, data, width, height, parentLay){
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
    
    new roughViz.Scatter(${JSON.stringify(data)})
    
    </script>
    
    </html>`;
    
    chartView.LoadHtml( chartHTML )
}


function drawStackedBar(type, elemName, data, width, height, parentLay){
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
    
    new roughViz.StackedBar(${JSON.stringify(data)})
    
    </script>
    
    </html>`;
    
    chartView.LoadHtml( chartHTML )
}

function drawLineChart(type, elemName, data, width, height, parentLay){
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
    
    new roughViz.Line(${JSON.stringify(data)})
    
    </script>
    
    </html>`;
    
    chartView.LoadHtml( chartHTML )
}

function drawForceChart(type, elemName, data, width, height, parentLay){
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
    
    new roughViz.Force(${JSON.stringify(data)})
    
    </script>
    
    </html>`;
    
    chartView.LoadHtml( chartHTML )
}


   
