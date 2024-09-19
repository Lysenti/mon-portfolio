<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Envoyer l'email ou stocker les informations dans une base de données
    // mail(to, subject, message, headers);

    echo "Merci pour votre message, $name.";
}
?>
