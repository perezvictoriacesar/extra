<meta charset="UTF-8">
<title>Document</title>
<script src="http://momentjs.com/downloads/moment.min.js"></script>
</head>
<body>
<form>
<input type="date" id="start" onchange="getEventTime()">
<input type="date" id="end" onchange="getEventTime()">
</form>
<script>
var getEventTime = function(){
var start = moment(document.getElementById("start").value);
var end = moment(document.getElementById("end").value);
console.log(moment.duration(end.diff(start)).asDays());
}
</script>