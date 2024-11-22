import React, { createContext } from 'react';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {



    const authInfo = {
        name: "aziz"
    }
    return (
        <div>
            <AuthProvider value={authInfo}>
                {children}
            </AuthProvider>

        </div>
    );
};

export default AuthProvider;