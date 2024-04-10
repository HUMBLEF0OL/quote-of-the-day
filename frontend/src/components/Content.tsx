"use client"
import React, { useState } from 'react'
import Snackbar from './Snackbar';

const Content = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regex.test(email)) {
            try {
                const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/registration`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email })
                });
                const result = await resp.json();
                console.log(result);

            } catch (err) {
                console.log(err);
            }
        } else {
            setError('Please enter a valid email');
        }
    }

    return (
        <>
            <h4 className="sm:text-[40px] text-[24px] mb-4">Welcome to &nbsp;
                <span className="relative inline-flex justify-center items-center">
                    <span className="relative text-cyan-400 font-bold tracking-[0.75rem]">QOT</span>
                    <span className="absolute left-0 bottom-0 pt-1 w-[95%] h-[2px] bg-white "></span>
                </span>
            </h4>
            <div>
                <label className="flex justify-center items-center">
                    <input
                        type="email"
                        required
                        placeholder="Please enter your email..."
                        className="sm:h-[55px] h-[40px] sm:w-[350px] w-full rounded-md text-gray-500 placeholder:italic placeholder:text-cyan-800 px-2 focus:outline-none focus:border-cyan-300 focus:ring-2"
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                handleSubmit();
                            }
                        }}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />
                    <button type="button" className="sm:h-[60px] sm:w-[60px] h-[40px] w-[40px]" onClick={handleSubmit}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-cyan-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </button>
                </label>
                <div className='absolute right-0 top-[72px]'>
                    <Snackbar message='Dummy message' mode='ERROR' />

                </div>

            </div>
        </>
    )
}

export default Content