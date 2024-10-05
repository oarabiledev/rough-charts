// rough-chart plugin
// @license
// MIT

// @author
// Oarabile Koore

// @version
// 2.0.0

app.CreateRoughChart = function () {
    return new rough_chart();
};

const __debug_path = app.GetAppPath().endsWith("/rough-charts");

const __plugin_path = __debug_path
    ? ""
    : app.GetPrivateFolder("Plugins") + "/rough-charts/";

const rough_viz_path = __plugin_path + "roughviiz.umd.js";

let element_name, FunctionCall;

const html_template = `
<html>
    
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script src="${rough_viz_path}"></script>

<style>

</style>
</head>
    
<body>
   
<div id="{element_name}" style="height: 100% !important;width: 100% !important; background-color: transparent;  margin: auto;">
</div>
</div>
       
</body>
    
<script>
    
new {FunctionCall}
    
</script>
    
</html>`;

const rough_chart = function () {
    let chart_view;

    // Updated generate_id using a closure to keep track of the counter
    this.generate_id = function () {
        let counter = 0;
        return `viz-${counter++}`;
    };

    this.version = 2.0;

    this.GetVersion = function () {
        return version;
    };
    this.CreateChart = function (chart_type, chart_data, width, height) {
        chart_view = app.CreateWebView(
            width,
            height,
            "NoScrollBars,NoActionBar,AutoZoom, IgnoreErrors"
        );

        if (
            ![
                "bar",
                "pie",
                "line",
                "scatter",
                "network",
                "stackedbar",
                "donut",
            ].includes(chart_type)
        ) {
            console.log(`ERROR : Chart Type Does Not Exist : ${chart_type}`);
            return;
        }

        if (!chart_data || typeof chart_data != "object") {
            console.log(`ERROR : Chart Has No Data`);
            return;
        }

        // Switch case to select the correct chart type
        switch (chart_type) {
            case "bar":
                this.draw_bar_chart(chart_data);
                break;
            case "pie":
                this.draw_pie_chart(chart_data);
                break;
            case "line":
                this.draw_line_chart(chart_data);
                break;
            case "scatter":
                this.draw_scatter_chart(chart_data);
                break;
            case "donut":
                this.draw_donut_chart(chart_data);
                break;
            case "network":
                this.draw_network_chart(chart_data);
                break;
            default:
                this.draw_stacked_chart(chart_data);
        }

        return chart_view;
    };

    // Chart drawing methods
    this.draw_bar_chart = function (chart_data) {
        element_name = this.generate_id();
        chart_data.element = `#${element_name}`;
        FunctionCall = `roughViz.Bar(${JSON.stringify(chart_data)})`;

        let new_template = html_template
            .replace("{FunctionCall}", FunctionCall)
            .replace("{element_name}", element_name);

        chart_view.LoadHtml(new_template);
    };

    this.draw_pie_chart = function (chart_data) {
        element_name = this.generate_id();
        chart_data.element = `#${element_name}`;
        FunctionCall = `roughViz.Pie(${JSON.stringify(chart_data)})`;

        let new_template = html_template
            .replace("{FunctionCall}", FunctionCall)
            .replace("{element_name}", element_name);

        chart_view.LoadHtml(new_template);
    };

    this.draw_donut_chart = function (chart_data) {
        element_name = this.generate_id();
        chart_data.element = `#${element_name}`;
        FunctionCall = `roughViz.Donut(${JSON.stringify(chart_data)})`;

        let new_template = html_template
            .replace("{FunctionCall}", FunctionCall)
            .replace("{element_name}", element_name);

        chart_view.LoadHtml(new_template);
    };

    this.draw_line_chart = function (chart_data) {
        element_name = this.generate_id();
        chart_data.element = `#${element_name}`;
        FunctionCall = `roughViz.Line(${JSON.stringify(chart_data)})`;

        let new_template = html_template
            .replace("{FunctionCall}", FunctionCall)
            .replace("{element_name}", element_name);

        chart_view.LoadHtml(new_template);
    };

    this.draw_scatter_chart = function (chart_data) {
        element_name = this.generate_id();
        chart_data.element = `#${element_name}`;
        FunctionCall = `roughViz.Scatter(${JSON.stringify(chart_data)})`;

        let new_template = html_template
            .replace("{FunctionCall}", FunctionCall)
            .replace("{element_name}", element_name);

        chart_view.LoadHtml(new_template);
    };

    this.draw_network_chart = function (chart_data) {
        element_name = this.generate_id();
        chart_data.element = `#${element_name}`;
        FunctionCall = `roughViz.Network(${JSON.stringify(chart_data)})`;

        let new_template = html_template
            .replace("{FunctionCall}", FunctionCall)
            .replace("{element_name}", element_name);

        chart_view.LoadHtml(new_template);
    };

    this.draw_stacked_chart = function (chart_data) {
        element_name = this.generate_id();
        chart_data.element = `#${element_name}`;
        FunctionCall = `roughViz.StackedBar(${JSON.stringify(chart_data)})`;

        let new_template = html_template
            .replace("{FunctionCall}", FunctionCall)
            .replace("{element_name}", element_name);

        chart_view.LoadHtml(new_template);
    };
};
