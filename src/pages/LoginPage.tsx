import React from 'react';
import {Form, Link} from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";

const LoginPage = () => {
    return (
        <section className='h-screen flex items-center justify-center'>
            <Form method='post'
                  className='card w-96 p-8 bg-base-200 shadow-lg gap-y-4'
            >
                <h4 className='text-4xl text-center font-bold'>Login</h4>
                <FormInput label={'email'} name={'email'} type={'email'} defaultValue={''}/>
                <FormInput label={'name'} name={'name'} type={'password'} defaultValue={''}/>
                <div className='flex flex-col gap-y-5'>
                    <SubmitButton text={'login'} />
                    <button className='btn btn-secondary btn-block'>Guest User</button>
                    <p className='text-center'>
                        Dont have an account? {' '}
                        <Link to={'/register'} className='ml-2 link link-hover link-primary capitalize'>
                            Register
                        </Link>
                    </p>
                </div>
            </Form>
        </section>
    );
};

export default LoginPage;