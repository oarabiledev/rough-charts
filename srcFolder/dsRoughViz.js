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
    this.setMargins = function ( left, top, right, bottom, mode){
        chartView.SetMargins( left, top, right, bottom, mode);
    }
    
    this.setPosition = function ( left, top, width, height, options){
        chartView.SetPosition( left, top, width, height, options);
    }
    
    this.setPadding = function (left, top, right, bottom, mode){
        chartView.SetPadding(left, top, right, bottom, mode);
    }
    
    this.setScale = function (x,y){
        chartView.SetScale(x,y);
    }
    
    this.setDescription = function(desc){
        chartView.SetDescription(desc);
    }
    
    this.setEnabled = function (boolEnabled){
        chartView.SetEnabled(boolEnabled);
    }
    
    this.setBackColor = function (color){
        chartView.SetBackColor(color);
    }
    
    this.setBackground = function (file, options){
        chartView.SetBackground(file, options);
    }
    
    this.setBackGradient = function ( color1, color2, color3, options){
        chartView.SetBackGradient( color1, color2, color3, options);
    }
    
    this.setBackgradientRadial = function(x, y, radius, color1, color2, color3, options){
        chartView.SetBackGradientRadial(x, y, radius, color1, color2, color3, options);
    }
    
    this.setVisibility = function(mode){
        chartView.SetVisibility(mode);
    }
    
    this.Hide = function(){
        chartView.Hide();
    }
    
    this.Gone = function(){
        chartView.Gone();
    }
    this.Show = function(){
        chartView.Show();
    }
    
    this.GetVisibility = function (){
        return chartView.GetVisibility();
    }
    
    this.isVisible = function(){
        return chartView.IsVisible();
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
    chartView = app.AddWebView(parentLay, width, height, 'NoScrollBars,FillXY,AllowZoom,NoActionBar,AutoZoom');
    
    
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
    chartView = app.AddWebView(parentLay, width, height, 'NoScrollBars,FillXY,AllowZoom,NoActionBar,AutoZoom');
    
    
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
    chartView = app.AddWebView(parentLay, width, height, 'NoScrollBars,FillXY,AllowZoom,NoActionBar,AutoZoom');
    
    
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
    chartView = app.AddWebView(parentLay, width, height, 'NoScrollBars,FillXY,AllowZoom,NoActionBar,AutoZoom');
    
    
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
    chartView = app.AddWebView(parentLay, width, height, 'NoScrollBars,FillXY,AllowZoom,NoActionBar,AutoZoom');
    
    
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
    chartView = app.AddWebView(parentLay, width, height, 'NoScrollBars,FillXY,AllowZoom,NoActionBar,AutoZoom');
    
    
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
    chartView = app.AddWebView(parentLay, width, height, 'NoScrollBars,FillXY,AllowZoom,NoActionBar,AutoZoom');
    
    
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
    chartView = app.AddWebView(parentLay, width, height, 'NoScrollBars,FillXY,AllowZoom,NoActionBar,AutoZoom');
    
    
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


   
