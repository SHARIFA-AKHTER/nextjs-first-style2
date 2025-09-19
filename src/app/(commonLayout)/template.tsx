import React from 'react';
import Navbar from '../component/Navbar';

const CommonLayout = ({ children }: {children:React.ReactNode}) => {

    return (
        <div>
            <Navbar />
          {children}  
        </div>
    );
};

export default CommonLayout;