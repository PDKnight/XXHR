<!DOCTYPE html>
<html>
<head>
    <title>Input change</title>
</head>
<body>

<form action="index.php" method="post">
    <input type="text" 
           name="content"
           placeholder="Type something..."
           autocomplete="off"
           id="input">
</form>

<p id="val"><?php echo file_get_contents('input.txt'); ?></p>

<script src="../XXHR.js"></script>
<script>
// Function which adds event
function addEvent(el, name, func, bool)
{
    if (el.addEventListener)
        el.addEventListener(name, func, bool);
    else if (el.attachEvent)
        el.attachEvent('on' + name, func);
    else el['on' + name] = func;
}


// Add keyup event for input
addEvent(input, 'keyup', 
    function()
    {
        if (input.value.length > 0)
            XXHR().request('fileManager.php?v=' + input.value);
    }, false
);


// Get contents of input.txt file every 2 seconds (1s == 1000ms)
setInterval(
    function()
    {
        XXHR().request('input.txt', function(response)
            {
                val.innerHTML = response;
            }, true
        );
    }, 2000 // interval
);
</script>

</body>
</html>
