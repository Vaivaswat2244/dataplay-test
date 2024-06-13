import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Loader from "../../components/Loader";
import { userCheckAPi, googleOAuth } from "../../lib/client/clientApis";
import { useDispatch } from "react-redux";
import { setuser } from "../../store/redux/authSlice";
import { handleIsProfile } from "../../store/redux/genaralSlice";
import axios from "axios";

export default function GoogleLogin(props) {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(()=>{
    
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const state = urlParams.get("state");
    const scope = urlParams.get("scope");

    if (state && scope) {
      handleCallback(state, scope);
    } else {
      initiateGoogleOAuth();
    }
  }, []);
  

  const initiateGoogleOAuth = () => {
    googleOAuth('http://localhost:8000/googleoAuth/').then((data) => {
      if (data && data.authorization_url) {
        console.log("Redirecting to Google OAuth...");
        window.location.href = data.authorization_url;
      }
    });
  };

  const handleCallback = async (state, scope) => {
    console.log(state);
    console.log(scope);
    setLoading(true);
    try {
      const tokens = await exchangeCodeForTokens(state, scope);
      console.log("got token");
      localStorage.setItem("access_token", tokens.access);
      localStorage.setItem("refresh_token", tokens.refresh);
      const user = await fetchUserData(tokens.access_token);
      dispatch(setuser(user));
      dispatch(handleIsProfile(true));
      router.push("/");
    } catch (error) {
      console.error("Error handling callback:", error);
    } finally {
      setLoading(false);
    }
  };

  const exchangeCodeForTokens = async (state, scope) => {
    try {
      const code = new URLSearchParams(window.location.search).get('code');
      const url = new URL('https://api.dataplay.co.in/auth/sauth/o/google-oauth2/');
      url.searchParams.append('state', state);
      url.searchParams.append('scope', scope);
      url.searchParams.append('code', code);

      console.log(`Requesting token exchange with URL: ${url}`);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const data = await response.json();
      console.log(data);
      
      return data;
    } catch (error) {
      console.error('Error exchanging code for tokens:', error);
      throw error;
    }
  };
  

  const fetchUserData = async (accessToken) => {
    const response = await axios.get('https://api.dataplay.co.in/user/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    if (response.data) {
      return response.data;
    } else {
      throw new Error('Failed to fetch user data');
    }
  };

  return loading && <Loader />;
}
