
(function() {   
    $.getJSON("/js/data/grid.json")
        .done(function (data) {
            buildTable(data);
        });
    
    function buildTable (grid) {
       $(grid).each(function() {
          var row = $("<tr>");
          var name = $("<td>").addClass("name").html(this.Name); 
          
          row.append(name);
          $("#folder-view tbody").append(row);
       });
    }
})();