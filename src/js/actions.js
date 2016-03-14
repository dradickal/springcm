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