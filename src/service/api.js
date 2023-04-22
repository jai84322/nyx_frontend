import axios from 'axios';

const URL = 'nyx-backend.vercel.app';

export const addUser = async (data) => {
    try {
       return await axios.post( `${URL}/add`, data);
    } catch (error) {
        console.log("error while adding new user: ", error);
    }
} 

export const getUsers = async () => {
    try {
       return await axios.get(`${URL}/all`);
    } catch (error) {
        console.log("error while getting user data: ", error);
    }
};

export const getUser = async (id) => {
    try {
       return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log("error while getuser api: ", error);
    }
};

export const editUser = async (user, id) => {
    try {
       return await axios.put(`${URL}/${id}`, user);
    } catch (error) {
        console.log("error while edituser api: ", error);
    }
};

export const deleteUser = async (id) => {
    try {
       return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log("error while deleteuser api: ", error);
    }
};