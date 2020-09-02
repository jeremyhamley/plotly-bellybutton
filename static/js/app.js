
// create a function to unpack data
function unpack(rows, index) {
    return rows.map(function (row) {
      return row[index];
    });
}


d3.json("samples.json").then(function(data) {
    var ids = unpack(data.metadata, "id");


    console.log(data);
    console.log(ids);

});

// Load the ids into the dropdown menu
d3.select(".well")
    .selectAll("select")
    .data(ids)
    .enter()
    .append("option")
    .html(function(d) {
      return `<option value ="${d}">${d}</option>`;
    });







// Bar Chart
var trace1 = {
    x: data.map(row => row.pair),
    y: data.map(row => row.greekSearchResults),
    text: data.map(row => row.greekName),
    name: "Greek",
    type: "bar"
};
      
var data = [trace1];
      
var layout = {
    title: "OTU Sample Count",
    barmode: "group"
};
      
Plotly.newPlot("bar", data, layout);

