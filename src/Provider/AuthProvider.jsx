

import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut, 
    updateProfile,
    sendPasswordResetEmail
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // CREATE USER
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // SIGN IN
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // UPDATE USER
    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    };

    // LOGOUT
    const logOut = () => {
        return signOut(auth);
    };

    // PASSWORD RESET
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    // OBSERVER
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);

    const authData = {
        user,
        setUser,
        createUser,
        signIn,
        logOut,
        updateUser,
        resetPassword,
        loading,
        setLoading,
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
