
# Advanced Email Authentication  -- Ongoing .

This is an **Advanced Email Authentication** project using **Node.js**, **React**, and **Mailtrap** for email sending. It demonstrates how to implement authentication with email verification, password recovery, and secure login functionality.


-Used Mailtrap to send and manage users amd emails sent.

-Postman for CRUD operations.

----------------------------------------------------------------------------------------------------------------------------------------------------

## 🚀 Features

- **Signup**: Users can sign up with their email and password.
- **Email Verification**: Sends a verification email with a unique code after signup. Users must verify their email by entering the code.
- **Login**: Allows users to log in after email verification.
- **Forgot Password**: Sends a password reset email if the user forgets their password.
- **Reset Password**: Allows users to reset their password using a token.
- **Protected Routes**: Ensures only authenticated users can access certain pages.

---------------------------------------------------------------------------------------------------------------------------------------------------

## 📧 Email Verification

When a user signs up, a verification code is sent to their email. The user must enter this code on the verification page to complete the sign-up process. The code is sent using **Mailtrap** for testing and simulating email sending.

--------------------------------------------------------------------------------------------------------------------------------------------------


### Login page
![Screenshot(2299)](./Screenshot%20(2301).png)

### Signup page
![Screenshot(2299)](./Screenshot%20(2302).png)

### Verify email 
![Screenshot(2299)](./Screenshot%20(2303).png)
-this email is sent with a verification code after user signs up.

### Welcome email
![Screenshot(2299)](./Screenshot%20(2304).png)
-Sent after user succesfully logins.

![Screenshot(2299)](./Screenshot%20(2305).png)

### Password reset email
![Screenshot(2299)](./Screenshot%20(2306).png)
-Sent when user forgets their password.
