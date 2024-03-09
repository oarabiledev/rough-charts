![Banner Image For DroidScript RoughViz Plugin](dsRoughViz.png)

# dsRoughViz

An Implementation of [RoughViz.js](https://github.com/jwilber/roughViz) To Be Used Within DroidScript, easily.


Yeah Documentation Finished ✅.


Okay, 😒 here is how it works within ds:

```javascript
app.LoadPlugin('dsRoughViz')

function OnStart(){
    lay = app.CreateLayout('Linear', 'FillXY,VCenter')
    
    chart = app.CreateRoughChart();
    
    piedata =  {
      element: '.x',
      data: {
        labels: ['North', 'South', 'East', 'West'],
        values: [10, 5, 8, 3]
      },
      title: "Regions",
      roughness: 0,
      colors: ['green', 'orange', 'blue', 'skyblue'],
      stroke: 'black',
      strokeWidth: 4,
      innerStrokeWidth: 1,
      fillStyle: 'cross-hatch',
      fillWeight: 0.5,
    }
    chart.CreateChartView('pie','x', piedata, 0.5,0.5, lay);
   
    app.AddLayout(lay)
    
}
```


When you look at it, the syntax is easy and understandable, the way roughViz.js and data is the same,
let me cook and show you::


In Vannila Web Dev, You Simply Declare A Div And your Script Tag To The Resource.

```html
<div id="viz0" style="width: 500px; height: 500px;" ></div>
````

And Then Do 

```javascript
new roughViz.Donut(
    {
      element: '#viz0',
      data: {
        labels: ['North', 'South', 'East', 'West'],
        values: [10, 5, 8, 3]
      },
      title: "Regions",
      roughness: 8,
      colors: ['red', 'orange', 'blue', 'skyblue'],
      stroke: 'black',
      strokeWidth: 3,
      fillStyle: 'cross-hatch',
      fillWeight: 3.5,
    }
  );
```


However when using the plugin, the data passed as a paramenter into the roughviz.Donut(parameter), is 
your data:::

```javascript
chart.CreateChartView('pie','x', piedata, 0.5,0.5, lay);
//piedata is that data
'''

All you have to do is initalize it with
'''javascript
 chart = app.CreateRoughChart();
````

And Then Place Your Chart View

```javascript
chart.CreateChartView(type, elemName, data, width, height, parentLay);
```

Now Because All The Plugin Is Doing Is Placing Html, we need a classname that is our __elemNam__
So remeber in your data configuration its a class so hence '.x' but in the declaration just pass
'x'.

The Methods Available Are::


```javascript
this.setMargins( left, top, right, bottom, mode)

this.setPosition( left, top, width, height, options)
    
this.setPadding(left, top, right, bottom, mode)
    
this.setScale(x,y)

this.setDescription(desc)
    
this.setEnabled(boolEnabled);

this.setBackColor()

this.setBackAlpha()
    
this.reloadChart()
    
this.printChat()
    
this.imageChar(fileDirectory)

this.setBackGradient( color1, color2, color3, options)
    
this.setBackgradientRadial(x, y, radius, color1, color2, color3, options)

this.setVisibility(mode)
    
this.Hide()
    
this.Gone()

this.Show()

this.GetVisibility()

this.isVisible()

```
