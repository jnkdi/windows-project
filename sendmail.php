<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');

	//От кого письмо
	$mail->setFrom('anaidik11@gmail.com', 'Фрилансер по жизни');
	//Кому отправить
	$mail->addAddress('richard.soul18@gmail.com');
	//Тема письма
	$mail->Subject = 'Сообщение с формы обратной связи на сайте';

	//Тело письма
	$body = 'Данные клиента:
	';
	
	if(trim(!empty($_POST['name']))){
		$body.='
		Имя: '.$_POST['name'].' ';
	}
	if(trim(!empty($_POST['email']))){
		$body.='
		E-mail: '.$_POST['email'].' ';
	}
	if(trim(!empty($_POST['message']))){
		$body.='
		Сообщение: '.$_POST['message'].' ';
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>