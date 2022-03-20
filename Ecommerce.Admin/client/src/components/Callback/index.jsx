import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { CallbackComponent } from 'redux-oidc';
import userManager from '../../untils/userManager'

export default function CallbackPage() {
    let navigate = useNavigate();
   
    const handleLoginSuccess = (user) => {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/admin/dashboard');
    }

    useEffect(() => {
        const isLoggedIn = Boolean(localStorage.getItem('user'));
        if (isLoggedIn)
        {
            navigate("/admin/dashboard")
        }
    }, [navigate]);

    return (
        <CallbackComponent
        userManager={userManager}
        successCallback={handleLoginSuccess}
        errorCallback={error => {
            navigate('/admin/404');
          
        }}
      >
        <div>Redirecting...</div>
      </CallbackComponent>
    )
}
