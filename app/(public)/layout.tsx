// app/(country)/layout.tsx

import React from 'react';

export default function Layout({ children }) {
    return (
        <div className='bg-red-600'>
           
            <main >{children}</main>
          
        </div>
    );
}

