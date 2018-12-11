var Hideout = function(){
    var vars = {
        language  : 'English',
        HideoutName : "Unearthed Hideout",
        HideoutHash : 45200,
        data : [],
    };

    var root = this;
    this.construct = function(){
        $.extend(vars);
    };

    this.getVars = function() {
        return vars;
    }

    this.setLanguage = function(language){
        vars.language = language;
    };

    this.setHideoutName = function(hideoutName) {
        vars.HideoutName = hideoutName;
    };

    this.setHideoutHash = function(hideoutHash) {
        vars.HideoutHash = hideoutHash;
    };

    this.setData = function(data) {
        vars.data = data;
    };

    this.addData = function(data) {
        vars.data.push(data);
    };

    this.construct();
};

var Decoration = function() {
    var vars = {
        Name  : '',
        Master : "No info",
        MasterLevel : 0,
        Costs : 0,
        Amount : 0,
        Owned : 0,
    };

    var root = this;
    this.construct = function(){
        $.extend(vars);
    };

    this.getVars = function() {
        return vars;
    };

    this.setName = function(name) {
        vars.Name = name;
    };
    this.setMaster = function(master) {
        vars.Master = master;
    };
    this.setMasterLevel = function(masterLevel) {
        vars.MasterLevel = masterLevel;
    };
    this.setCosts = function(costs) {
        vars.Costs = costs;
    };
    this.setAmount = function(amount) {
        vars.Amount = amount;
    };
    this.construct();
};