
// create a function to unpack data
function unpack(rows, index) {
    return rows.map(function (row) {
        return row[index];
    });
}

// read data, collect ids, and load the ids into the dropdown
d3.json("samples.json").then(function (data) {
    var ids = unpack(data.metadata, "id");
    d3.select("#selDataset")
        .selectAll("select")
        .data(ids)
        .enter()
        .append("option")
        .html(function (d) {
            return `<option value ="${d}">${d}</option>`;
        });


    console.log(data);
    console.log(ids);
});


// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
    console.log(dataset)
    // Initialize x and y arrays
    var x = [];
    var y = [];
    var labels = [];


    //  Pull data for the id selected in the dropdown
    d3.json("samples.json").then((data) => {
        var person_id = data.samples.find(({ id }) => id === dataset);
        console.log(person_id);
        // store the top 10 values for the bar chart
        var otu_ids_sliced = person_id.otu_ids.slice(0, 10);
        console.log(otu_ids_sliced);

        var values_sliced = person_id.sample_values.slice(0, 10);
        console.log(values_sliced);

        var labels_sliced = person_id.otu_labels.slice(0, 10);
        console.log(labels_sliced);


        var x = otu_ids_sliced.map(function(a){return "OTU ID " + a;});
        var y = values_sliced;

        var trace1 = {
            x: x,
            y: y,
            type: "bar"
        };

        // Create the data array for the plot
        var data1 = [trace1];

        // Define the plot layout
        var layout = {
            title: "Top 10 Belly Button Bacteria",
            xaxis: { title: "OTU ID" },
            yaxis: { title: "Microbe Count" },
            barmode: "group"
        };

        // Plot the chart to a div tag with id "bar"
        Plotly.newPlot("bar", data1, layout);

    });

};

