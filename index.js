/*
Caleb Smith-Salzberg, Yuyang Zhang
SoftDev2 pd07
K14 -- You Are Smarter Than the President*
2018-03-25
*/

var labels = ["Total Surplus", "Total Revenues", "Total Spending"]
var data_2004 = [0.466, 2.12, 2.59]
var data_2011 = [1.26, 2.24, 3.5]
var data_04 = true;

var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var change = bar.data(data_2004);
var place = change.enter().append("div");

var swtch = function(){
    var chart = d3.select(".chart");
    var bar = chart.selectAll("div");
    if (data_04){
	var change = bar.data(data_2011);
	data_04 = false;
    }
    else {
	var change = bar.data(data_2004);
	data_04 = true;
    }
    var place = change.enter().append("div");
    var text = document.getElementById("year");
    if (data_04){
	text.innerHTML = "Data for 2004";
    }
    else{
	text.innerHTML = "Data for 2011";
    }
    
    _default();
}

var year = document.getElementById("change");
year.addEventListener("click", swtch);


    
var _default = function(e){
    
    var x = -1;
    
    place.transition().duration(500).style("width", function(d) {
	return d * 400 + "px"; });
    
    place.text(
	function(d){
	    x+=1;
	    return  "$" + d + " Trillion for " + labels[x];});  
};

_default();


