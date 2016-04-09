<?php
    $val = $_GET['v'];
    if (isset($val) && strlen($val) > 0) {
        $file = fopen('input.txt', 'w');
                fputs($file, strip_tags(strip_tags($val)));
                fclose($file);
    }
?>
