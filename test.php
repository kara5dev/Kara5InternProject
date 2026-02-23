<?php
$ch = curl_init("https://gateway.octobercms.com/api/project/detail");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CAINFO, "C:/laragon/etc/ssl/cacert.pem"); // force CA
curl_setopt($ch, CURLOPT_CAPATH, "C:/laragon/etc/ssl/cacert.pem"); // optional
$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
} else {
    echo "Success!";
}