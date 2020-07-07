<?php     
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];


$template = file_get_contents("template.html");

$template = str_replace("[content]",
'
    <table style="width:100%">
        <tr>
          <td>
            <b>First Name:</b>
          </td>
          <td>
          '.$first_name.'
          </td>
        </tr>
        <tr>
          <td>
            <b>Last Name:</b>
          </td>
          <td>
          '.$last_name.'
          </td>
        </tr>
        <tr>
          <td>
            <b>Email:</b>        
          </td>
          <td>
          '.$email.'
          </td>
        </tr>
        <tr>
          <td>
            <b>Contact No:</b>
          </td>
          <td>
          '.$phone.'
          </td>
        </tr>
        <tr>
          <td>
            <b>Message:</b> 
          </td>
          <td>
          '.$message.'
          </td>
        </tr>
      </table>
'
,$template);


$to_email = $email.', info@spitel.com';
$subject = 'Enquiry Mail from '.$first_name;
$message = 'This mail is sent using the PHP mail function';
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: info@spitel.com';
mail($to_email,$subject,$template,$headers);
?>