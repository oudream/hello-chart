/*
 Highstock JS v7.2.1 (2019-10-31)

 Indicator series type for Highstock

 (c) 2010-2019 Pawe Fus

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/stochastic",["highcharts","highcharts/modules/stock"],function(e){a(e);a.Highcharts=e;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function e(a,b,w,c){a.hasOwnProperty(b)||(a[b]=c.apply(null,w))}a=a?a._modules:{};e(a,"mixins/reduce-array.js",[a["parts/Globals.js"]],function(a){var b=a.reduce;return{minInArray:function(a,
c){return b(a,function(a,f){return Math.min(a,f[c])},Number.MAX_VALUE)},maxInArray:function(a,c){return b(a,function(a,f){return Math.max(a,f[c])},-Number.MAX_VALUE)},getArrayExtremes:function(a,c,r){return b(a,function(a,b){return[Math.min(a[0],b[c]),Math.max(a[1],b[r])]},[Number.MAX_VALUE,-Number.MAX_VALUE])}}});e(a,"mixins/multipe-lines.js",[a["parts/Globals.js"],a["parts/Utilities.js"]],function(a,b){var e=b.defined,c=a.each,r=a.merge,f=a.error,p=a.seriesTypes.sma;return{pointArrayMap:["top",
"bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(a){var h=[];c(this.pointArrayMap,function(d){d!==a&&h.push("plot"+d.charAt(0).toUpperCase()+d.slice(1))});return h},toYData:function(a){var h=[];c(this.pointArrayMap,function(d){h.push(a[d])});return h},translate:function(){var a=this,b=a.pointArrayMap,d=[],m;d=a.getTranslatedLinesNames();p.prototype.translate.apply(a,arguments);c(a.points,function(h){c(b,function(c,b){m=h[c];null!==m&&(h[d[b]]=a.yAxis.toPixels(m,
!0))})})},drawGraph:function(){var a=this,b=a.linesApiNames,d=a.points,m=d.length,t=a.options,x=a.graph,y={options:{gapSize:t.gapSize}},l=[],n=a.getTranslatedLinesNames(a.pointValKey),g;c(n,function(a,b){for(l[b]=[];m--;)g=d[m],l[b].push({x:g.x,plotX:g.plotX,plotY:g[a],isNull:!e(g[a])});m=d.length});c(b,function(b,d){l[d]?(a.points=l[d],t[b]?a.options=r(t[b].styles,y):f('Error: "There is no '+b+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),
a.graph=a["graph"+b],p.prototype.drawGraph.call(a),a["graph"+b]=a.graph):f('Error: "'+b+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});a.points=d;a.options=t;a.graph=x;p.prototype.drawGraph.call(a)}}});e(a,"indicators/stochastic.src.js",[a["parts/Globals.js"],a["parts/Utilities.js"],a["mixins/reduce-array.js"],a["mixins/multipe-lines.js"]],function(a,b,e,c){var r=b.isArray,f=a.merge,p=a.seriesTypes.sma,h=e.getArrayExtremes;a.seriesType("stochastic",
"sma",{params:{periods:[14,3]},marker:{enabled:!1},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b><br/>%K: {point.y}<br/>%D: {point.smoothed}<br/>'},smoothedLine:{styles:{lineWidth:1,lineColor:void 0}},dataGrouping:{approximation:"averages"}},a.merge(c,{nameComponents:["periods"],nameBase:"Stochastic",pointArrayMap:["y","smoothed"],parallelArrays:["x","y","smoothed"],pointValKey:"y",linesApiNames:["smoothedLine"],init:function(){p.prototype.init.apply(this,
arguments);this.options=f({smoothedLine:{styles:{lineColor:this.color}}},this.options)},getValues:function(a,b){var c=b.periods[0];b=b.periods[1];var d=a.xData,e=(a=a.yData)?a.length:0,f=[],l=[],n=[],g=null,k;if(e<c||!r(a[0])||4!==a[0].length)return!1;for(k=c-1;k<e;k++){var q=a.slice(k-c+1,k+1);var v=h(q,2,1);var u=v[0];q=a[k][3]-u;u=v[1]-u;q=q/u*100;l.push(d[k]);n.push([q,null]);k>=c-1+(b-1)&&(g=p.prototype.getValues.call(this,{xData:l.slice(-b),yData:n.slice(-b)},{period:b}),g=g.yData[0]);f.push([d[k],
q,g]);n[n.length-1][1]=g}return{values:f,xData:l,yData:n}}}));""});e(a,"masters/indicators/stochastic.src.js",[],function(){})});
//# sourceMappingURL=stochastic.js.map