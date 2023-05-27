import React from 'react'
import { useNavigate } from 'react-router-dom';
import supabase from '../config/supabaseClient';
import { Button } from 'flowbite-react'

export default function LogOutBtn() {
  const navigate = useNavigate()
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    }
    else {
      navigate('/login')
      const session = supabase.auth.getSession();
      const isLoggedIn = session !== null;
    }
  };

  return <Button color="gray" onClick={handleLogout}>
    <img src="https://img.icons8.com/ios/50/null/exit--v1.png" />
    {/* <h1 className='ml-[]'></h1> */}
  </Button>;
}
