(function() {
       
    $.getJSON("js/data/actions.json")
        .done(function (jsonData) {
            buildActions(jsonData);
            $(".expand").on("click", toggleActions);
        });
        
    function buildActions(actions) {
        var html = [];
        $(actions).each(function() {
            var btn = $("<div>").addClass("action " + this.ImageName);
            
            html.push(btn);
        });
        $("#folder-actions .actions").append(html);
    }
    
    function toggleActions(e) {
        var top = $(e.target).parents(".folder-control");
        $(top).toggleClass("open");
    }
})();
(function() {   
    $.getJSON("js/data/grid.json")
        .done(function (jsonData) {
            buildTable(jsonData);
            addCount(jsonData.length);
        });
    
    function addCount(count) {
        $("th.select").html(count + " items");    
    }
    
    function buildTable (grid) {
        var html = [];
        
        $(grid).each(function() {
            var row = $("<tr>");
            var name = $("<td>").addClass(getTypeClass(this.Type, this.Name)).html(this.Name); 
            var desc = $("<td>").addClass("desc").html(this.Description);
            var date = $("<td>").addClass("date").html(this.ModifiedDate);
            var select = $("<td>").addClass("select").html(function (){
                return $("<input>").attr("type", "checkbox").addClass("selector");
            });
            row.append(name, desc, date, select);
            html.push(row);
        });
        $("#folder-view tbody").append(html);
    }
    
    function getTypeClass(type, name)  {
        if (type !== "Document") {
            return "name " + type;
        } else {
            var doctype = name.substring(name.lastIndexOf(".") + 1);                
            return "name " + doctype;
        }
    }
})();