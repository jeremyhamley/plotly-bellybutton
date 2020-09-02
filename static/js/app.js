
// creat a function to unpack data
function unpack(rows, index) {
    return rows.map(function (row) {
      return row[index];
    });
}


d3.json("samples.json").then(function(data) {
    console.log(data);
});




