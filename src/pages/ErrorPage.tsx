import React from 'react';
import {Link, useRouteError} from "react-router-dom";

const ErrorPage:React.FC = () => {
    const error = useRouteError()


    if(error.status === 404){
        return (
            <main className='flex justify-center items-center h-screen'>
                <div className='text-center'>
                    <p className='text-9xl font-semibold text-primary'>404</p>
                    <h4 className='mt-2  font-bold text-4xl'>page not found</h4>
                    <button className='mt-8 text-white font-bold btn btn-primary'>
                        <Link to={'/'}>
                            Back to main
                        </Link>
                    </button>
                </div>
            </main>
        )
    }


    return (
        <main className='flex justify-center items-center min-h-screen'>
            <h4 className='text-center font-bold text-4xl'>there was an error...</h4>
        </main>
    );
};

export default ErrorPage;