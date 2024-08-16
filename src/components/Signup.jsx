import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../config/firebase'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const signup = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            navigate('/login')
        } catch (err) {            
            setError(getErrorMessage(err.code))
        }
    }

    const getErrorMessage = (errorCode) => {
        switch (errorCode) {
          case 'auth/invalid-email':
            return 'The email address is not valid.';
          case 'auth/missing-password':
            return 'Password is required';
          case 'auth/email-already-in-use':
            return 'User already exisist.';
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
                <h1 className='text-2xl font-semibold mb-6 text-gray-700'>Create an Account</h1>
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
                    onClick={signup}
                    className='w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-200 mb-4'>
                    Sign Up
                </button>
                <Link
                    to={'/login'}
                    className='block text-center py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition duration-200'>
                    Already have an account?
                </Link>
            </div>
        </div>
    </>
    )
}

export default Signup
