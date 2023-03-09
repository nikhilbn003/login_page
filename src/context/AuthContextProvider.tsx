// import { useContext, createContext } from "react";
// import {
//      GoogleAuthProvider,
//      signInWithPopup,
//      signInWithRedirect,
//      signOut,
//      onAuthStateChanged
// } from "firebase/auth";
// import { auth } from "../../utils/firebase";


// const AuthContext = createContext <any>(null);

// export const AuthProvider = ({ children }: any) => {
//     const googleSignIn = () =>{
//         const provider = new GoogleAuthProvider();
//          signInWithPopup(auth,provider);
//     };
//    return( <AuthContext.Provider value ={{googleSignIn}}>
//         {children}
//     </AuthContext.Provider>
//    )

// }

// export const UserAuth = () =>{
//     return useContext(AuthContext);
// }


