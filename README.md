![](image.png)

# rough-charts

rough-charts plugin is an implementation of roughViz.js library to work in DroidScript.

## 🔥Getting Started

To get started install this plugin from the github releases page or from the DroidStore.

After that then open the downloaded file (with .ppk extension) using DroidScript then await a completed install (you should see a succesfull install pop-up).

When you create your application load the plugin via :

```javascript
app.LoadPlugin("rough-charts");
```

In your OnStart Function initialize the plugin this way :

```javascript
app.LoadPlugin("rough-charts");

function OnStart() {
    let chart = app.CreateRoughChart();
}
```

## 🔥Basic's Of The Plugin

rough-charts implements roughViz.js so we follow the library's input data structure, the documentation can be found at : [roughViz Github Page](https://github.com/jwilber/roughViz)

After reading the data structure, in the web you need to specify the element id or classname that roughViz.js uses to attach the svg chart to, do not worry about this I have implemented it behind the scenes no need to worry.

Basically do not poppulate the element data in the data structure.

The `CreateChart` function takes in the following parameters:

```javascript
chart.CreateChart(bar_type, bar_data, width, height);
```

The following charts are supported :

- bar
- donut
- line
- pie
- scatter
- network
- stackedbar

From all of this we can deduce that the plugin uses a webview which loads a view of the chart, this means all the methods available in a traditional webview are available to the chart function.

Therefore you can use methods like :

```javascript
let chart = app.CreateRoughChart();
let barChart = chart.CreateChart("bar", bardata, 0.95, 0.5);

// We can use the following methods in a webview here too..
barChart.SetBackColor();
barChart.SetMargins();
barChart.Reload();
```

## 💡Example

Now, we will implement a simple bar chart.

```javascript
app.LoadPlugin("rough-charts");
cfg.Fast;
cfg.MUI = cfg.MUI;

function OnStart() {
    let chart = app.CreateRoughChart();

    let lay = MUI.CreateLayout("Absolute", "VCenter,FillXY");

    //RoughViz Data Structure
    //Do not add element value !
    let bardata = {
        data: {
            labels: ["North", "South", "East", "West"],
            values: [10, 5, 8, 3],
        },
        title: "Regions",
        margin: { top: 50, left: 50, right: 50, bottom: 50 },
        roughness: 0,
        colors: ["red", "orange", "blue", "skyblue"],
        stroke: "black",
        strokeWidth: 1,
        fillStyle: "cross-hatch",
        fillWeight: 0.5,
    };

    let barChart = chart.CreateChart("bar", bardata, 0.95, 0.5);
    lay.AddChild(barChart);

    app.AddLayout(lay);
}
```
