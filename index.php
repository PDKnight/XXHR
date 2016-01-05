<!DOCTYPE html>
<html>
<head>
	<title>Input change powa</title>
</head>
<body>

<form action="index.php" method="post">
	<input type="text" 
			name="content" 
			style="font-size: 25px" 
			placeholder="Name of content"
			id="input">
</form>

<p id="val"><?php echo file_get_contents('input.txt'); ?></p>

<script src="./XXHR.js"></script>
<script>
var input_sel = document.querySelector('#input'),
	p_sel = document.querySelector('#val'),
	interval = 2000;

function addEvent(el, name, func, bool) {
	if (el.addEventListener) {
		el.addEventListener(name, func, bool);
	}
	else if (el.attachEvent) {
		el.attachEvent('on' + name, func);
	}
	else
		el['on' + name] = func;
}
addEvent(input_sel, 'keyup', 
	function() {
		if (input_sel.value.length > 0)
			XXHR.getText('./FileMang.php?v=' + input_sel.value);
	}, false);
setInterval(function() {
	XXHR.getText('./input.txt', function(v) {
		p_sel.innerHTML = v;
	}, true);
},interval);
</script>

</body>
</html>