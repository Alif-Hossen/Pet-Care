import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    console.log(loading, user);

    // CREATE USER ->
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    };

    // FOR SIGN IN ->
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // FOR LOGOUT -> 
    const logOUt = () => {
        return signOut(auth);
    }

    // FOR OBSERVER ->
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])


    // FOR SHARE DATA
    const authData = {
        user,
        setUser,
        createUser,
        logOUt,
        signIn,
        loading,
        setLoading,
    };

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;