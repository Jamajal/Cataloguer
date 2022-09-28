import { createContext, useState, useEffect } from "react";
import api from '../http/api';
export const AuthContext = createContext({});

async function userIsValid(email, password) {
    var result = await api.post('/login', { user: email, password: password });
    return result.data;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");
        if (userToken && usersStorage) {
            const hasUser = json.parse(usersStorage)?.filter(
                user => user.email === JSON.parse(userToken).email
            );
            if (hasUser)
                setUser(hasUser[0]);
        }
    }, []);

    const signin = async (email, password) => {
        var auth = await userIsValid(email, password)
        console.log("User auth", auth)
        if (auth.message) {
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem("user_token", JSON.stringify({ email, token }));
            setUser({ email, password });
            return;
        } else
            return "E-mail ou senha incorretos!";

        // const usersStorage = JSON.parse(localStorage.getItem("users_db"));
        // const hasUser = usersStorage?.filter(user => user.email === email);
        // if (hasUser?.length) {

        // }
        // else
        //     return "Usuário não cadastrado";

    }

    //Função para cadastro futuro
    /* const signup = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db")); // Trocar para dados do banco
        const hasUser = usersStorage?.filter(user => user.email === email);
 
        if(hasUser?.length)
            return "Já tem uma conta com esse E-mail";
 
        let newUser;
 
        if(usersStorage)
            newStorage = [...usersStorage, {email, password}]; // Acrescentando novo usuário caso já exista um storage
        else 
            newStorage = [{ email, password }]; // Criando storage com o novo usuário lá dentro
 
        localStorage.setItem("users_db", JSON.stringify(newUser))
 
        return;
    }; */

    // Sai do login
    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signin, /* signup, */ signout }}
        >
            {children}
        </AuthContext.Provider>
    )
}