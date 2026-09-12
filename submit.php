```php
<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get form data safely
    $name  = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : '';
    $email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';

    // -----------------------------------
    // 1. SEND EMAIL
    // -----------------------------------

    $to = "lmt@property-first.com, propertyfirstads@gmail.com";
   

    $subject = "New Enquiry from - Godrej Azure Chennai ad";

    $message = "
Godrej Azure Chennai Details:

Name: $name
Phone: $phone
Email: $email
";

    $headers = "From: noreply@yourdomain.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $mailSent = mail($to, $subject, $message, $headers);


    // -----------------------------------
    // 2. SEND DATA TO ZOHO FLOW
    // -----------------------------------

    $zohoWebhookUrl = "https://flow.zoho.in/60079714926/flow/webhook/incoming?zapikey=1001.597fbe671a353275cd934f22a7db0cf6.44b29da171b320a4ec6dc8d83b9eee2e&isdebug=false";

    // Data matching your Zoho Flow webhook fields
    $data = [
        "Project"   => "Godrej Whitefield Villas",
        "Email"     => $email,
        "LeadSource" => "Google",
        "Phone"     => $phone,
        "Name"      => $name
    ];
    
   

    // Initialize cURL
    $ch = curl_init($zohoWebhookUrl);
//      echo "<pre>";
// print_r($ch);
// echo "</pre>";

// exit;

    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Content-Type: application/json",
        "Accept: application/json"
    ]);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);

    $zohoResponse = curl_exec($ch);

    $zohoHttpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    $zohoError = curl_error($ch);

    curl_close($ch);
    
    
    // DEBUG
// echo "<pre>";

// echo "===== DATA SENT =====\n";
// print_r($data);

// echo "\n===== HTTP CODE =====\n";
// echo $zohoHttpCode;

// echo "\n===== CURL ERROR =====\n";
// echo $zohoError ?: "No error";

// echo "\n===== ZOHO RESPONSE =====\n";
// print_r($zohoResponse);

// echo "</pre>";

// exit;


    // -----------------------------------
    // 3. REDIRECT USER
    // -----------------------------------

    if ($mailSent) {

        echo "<script>
                window.location.href='thank_you.html';
              </script>";

    } else {

        echo "Something went wrong. Please try again.";
    }

} else {

    echo "Invalid Request";
}

?>
```
