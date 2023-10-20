import React from 'react';
import {useNavigate} from "react-router-dom";

interface SubmitButtonProps{
    text: string
}

const SubmitButton:React.FC<SubmitButtonProps> = ({text}) => {
    const navigation = useNavigate()
    const isSubmitting = navigation.state === 'submitting'

    return (
        <button className='btn btn-primary btn-block'>
            {isSubmitting ? (<span className='loading loading-spinner'>Loading...</span>)
                : (<span>{text}</span>)}
        </button>
    );
};

export default SubmitButton;