

import React from 'react';

export default function Layout({ children }) {
    return (
        <div className='bg-green-500'>
           
            <main>{children}</main>
          
        </div>
    );
}

