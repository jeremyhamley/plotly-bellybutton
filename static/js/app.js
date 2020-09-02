
// create a function to unpack data
function unpack(rows, index) {
    return rows.map(function (row) {
      return row[index];
    });
}

// read data, collect ids, and load the ids into the dropdown
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


d3.json("samples.json").then((data) => {
    console.log(data);
    var person_id = data.sample.find(({id}) => id === dataset);
    console.log(person_id);


});

};


