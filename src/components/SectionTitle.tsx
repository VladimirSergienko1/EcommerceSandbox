import React from 'react';

interface SectionProps {
    text: string
}
const SectionTitle:React.FC<SectionProps> = ({text}) => {
    return (
        <div className='border-b border-base-300 pb-5'>
            <h2 className='text-3xl font-medium tracking-wider capitalize'>{text}</h2>
            
        </div>
    );
};

export default SectionTitle;