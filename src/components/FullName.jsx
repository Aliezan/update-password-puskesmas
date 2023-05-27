import React, { useState, useEffect } from 'react'
import supabase from '../config/supabaseClient'

const FullName = () => {
    const [fullName, setFullName] = useState(null)

    useEffect(() => {
        const getUserData = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            const full_name = user.user_metadata.full_name
            setFullName(full_name)
        }

        getUserData()
    }, [])

    return <h1 className='font-medium font-inter'>Selamat Datang, {fullName}</h1>
}

export default FullName