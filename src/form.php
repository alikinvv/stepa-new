 
<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'phpmails@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '$dk820&123'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('phpmails@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('sales@oniks.info');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

if ($_POST['hide'] === 'specialist') {
    $mail->Subject = 'Заявка на звонок с сайта Дядя Степа';
    $mail->Body    = 'Пользователь: ' . $_POST['name'] . ', оставил заявку на обратный звонок, его телефон: ' . $_POST['phone'];
}

if ($_POST['hide'] === 'callme') {
    $mail->Subject = 'Заявка на звонок с сайта Дядя Степа';
    $mail->Body    = 'Пользователь: ' . $_POST['name'] . ', оставил заявку на обратный звонок, его телефон: ' . $_POST['phone'];
}

if ($_POST['hide'] === 'questions') {
    $mail->Subject = 'Заявка на подборку планировок с сайта Дядя Степа';
    $mail->Body    = 'Пользователь: ' . $_POST['name'] . ', оставил заявку на подборку планировок, его почта: ' . $_POST['email'];
}

if ($_POST['hide'] === 'ex') {
    $mail->Subject = 'Подробности эскроу-счета с сайта Дядя Степа';
    $mail->Body    = 'Пользователь: ' . $_POST['name'] . ', оставил заявку на подробности эскроу-счета, его почта: ' . $_POST['email'];
}

if ($_POST['hide'] === 'request') {
    $mail->Subject = 'Заявка на покупку с сертификатом с сайта Дядя Степа';
    $mail->Body    = 'Пользователь: ' . $_POST['name'] . ', оставил заявку на покупку с сертификатом, его почта: ' . $_POST['email'] . ' и телефон: ' . $_POST['phone'];
}

if ($_POST['hide'] === 'tradein') {
    $mail->Subject = 'Заявка на trade-in с сайта Дядя Степа';
    $mail->Body    = 'Пользователь: ' . $_POST['name'] . ', оставил заявку на trade-in, его почта: ' . $_POST['email'] . ' и телефон: ' . $_POST['phone'];
}

if ($_POST['hide'] === 'installment') {
    $mail->Subject = 'Заявка на рассрочку с сайта Дядя Степа';
    $mail->Body    = 'Пользователь: ' . $_POST['name'] . ', оставил заявку на рассрочку, его почта: ' . $_POST['email'] . ' и телефон: ' . $_POST['phone'];
}

if ($_POST['hide'] === 'mortgage') {
    $mail->Subject = 'Заявка на ипотеку с сайта Дядя Степа';
    $mail->Body    = 'Пользователь: ' . $_POST['name'] . ', оставил заявку на ипотеку, его почта: ' . $_POST['email'] . ' и телефон: ' . $_POST['phone'];
}

if ($_POST['hide'] === 'more') {
    $mail->Subject = 'Заявка на звонок с сайта Дядя Степа';
    $mail->Body    = 'Пользователь: ' . $_POST['name'] . ', оставил заявку на обратный звонок, его почта: ' . $_POST['email'] . ' и телефон: ' . $_POST['phone'];
}

if ($_POST['hide'] === 'design') {
    $mail->Subject = 'Заявка на дизайн-проект с сайта Дядя Степа';
    $mail->Body    = 'Пользователь: ' . $_POST['name'] . ', оставил заявку на заказ дизайн-проекта, его почта: ' . $_POST['email'] . ', телефон: ' . $_POST['phone'] . ', выбранный тип квартиры: ' . $_POST['type'];
}

if ($_POST['hide'] === 'price') {
    $mail->Subject = 'Заявка на прайс с сайта Дядя Степа';
    $mail->Body    = 'Пользователь: ' . $_POST['name'] . ', оставил заявку на получение прайса, его почта: ' . $_POST['email'] . ' и телефон: ' . $_POST['phone'];
}

if ($_POST['hide'] === 'call') {
    $mail->Subject = 'Заявка подбор квартиры с сайта Дядя Степа';
    $mail->Body    = 'Пользователь: ' . $_POST['name'] . ', оставил заявку на подбор квартиры, его почта: ' . $_POST['email'] . ' и телефон: ' . $_POST['phone'];
}


$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'success';
}
?>