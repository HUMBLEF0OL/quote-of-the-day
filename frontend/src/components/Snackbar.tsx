"use client"
import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

const Snackbar = ({ message, mode, resetStatus }: { message: string, mode: 'SUCCESS' | 'ERROR', resetStatus: any }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (isVisible) {
            let timeout = setTimeout(() => {
                setIsVisible(false);
                resetStatus({
                    message: '',
                    mode: 'ERROR'
                })
            }, 3000)
            return () => {
                clearTimeout(timeout)
            }
        }
    }, [isVisible])

    return (
        <>
            {
                isVisible && (
                    <div className={`flex h-[40px] w-[300px] ${mode === 'ERROR' ? 'bg-red-100' : 'bg-green-100'} justify-between px-2 items-center right-0 top-0`}>
                        <p className={` ${mode === 'ERROR' ? 'text-red-700' : 'text-green-700'} text-xl font-semibold`}>{message}!</p>
                        <button onClick={() => { setIsVisible(false) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-7 h-7 ${mode === 'SUCCESS' ? 'text-green-700' : 'text-red-700'}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </button>


                    </div>

                )
            }
        </>
    )
}

export default Snackbar