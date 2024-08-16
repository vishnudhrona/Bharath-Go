import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const navigate = useNavigate()
    
    const login = async() => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth,email,password)
            navigate('/')
        } catch(err) {
            setError(getErrorMessage(err.code))
        }
    }  
    
    const getErrorMessage = (errorCode) => {
        switch (errorCode) {
          case 'auth/invalid-email':
            return 'The email address is not valid.';
          case 'auth/user-disabled':
            return 'This user account has been disabled.';
          case 'auth/user-not-found':
            return 'No user found with this email.';
          case 'auth/wrong-password':
            return 'Incorrect password. Please try again.';
          default:
            return 'An unknown error occurred. Please try again later.';
        }
      };

  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
        <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm w-full'>
            <h1 className='text-2xl font-semibold mb-6 text-gray-700'>LogIn</h1>
            {error && (
                <span className='text-red-500 text-sm'>{error}</span>
            )}
            <input
                className='w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                type="email"
                name='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className='w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                type="password"
                name='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button 
                onClick={login}
                className='w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-200 mb-4'>
                LogIn
            </button>
            <Link
                to={'/signup'}
                className='block text-center py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition duration-200'>
                Create an account?
            </Link>
        </div>
    </div>
</>
  )
}

export default Login

