import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleOAuthComponent = () => {
  const handleGoogleLoginSuccess = (response: any) => {
    // Handle the successful login here
    console.log('Google login success', response);

    // You can also perform actions like storing the user data or token

    // Redirect the user to the desired page after successful login
    window.location.href = '/'; // Replace with your desired URL
  };

  return (
    <GoogleOAuthProvider clientId="598491698187-0lger0g3s5i5i4h8mk3rq1nvon2qt3un.apps.googleusercontent.com">
      <GoogleLogin onSuccess={handleGoogleLoginSuccess} />
    </GoogleOAuthProvider>
  );
};

export default GoogleOAuthComponent;
