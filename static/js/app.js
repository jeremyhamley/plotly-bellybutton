
// create a function to unpack data
function unpack(rows, index) {
    return rows.map(function (row) {
      return row[index];
    });
}


d3.json("samples.json").then(function(data) {
    var ids = unpack(data.metadata, "id");
    d3.select("#selDataset")
    .selectAll("select")
    .data(ids)
    .enter()
    .append("option")
    .html(function(d) {
      return `<option value ="${d}">${d}</option>`;
    });

    console.log(data);
    console.log(ids);
});







// sample_otu_ids = unpack(data.samples, "otu_ids")
// console.log(sample_otu_ids)



// // Bar Chart
// var trace1 = {
//     x: ,
//     y: ,
//     text:,
//     name: ,
//     type: "bar"
// };
      
// var data = [trace1];
      
// var layout = {
//     title: "OTU Sample Count",
//     barmode: "group"
// };
      
// Plotly.newPlot("bar", data, layout);

