import React from 'react';
import {Form, Link} from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";

const RegisterPage = () => {
    return (
        <section className='h-screen flex place-items-center justify-center'>
            <Form method='post' className='card w-96 p-8 bg-base-200 shadow-lg gap-y-4'>
                <h4 className='text-center text-3xl font-bold'>Register</h4>
                <FormInput label='username' name='username' type='text' />
                <FormInput label='email' name='email' type='email' />
                <FormInput label='password' name='password' type='password' />
                <div className='flex flex-col gap-y-5'>
                    <SubmitButton text={'login'} />
                    <p className='text-center'>
                        Already have an account? {' '}
                        <Link to={'/login'} className='ml-2 link link-hover link-primary capitalize'>
                            Register
                        </Link>
                    </p>
                </div>
            </Form>
        </section>
    );
};
    
export default RegisterPage;