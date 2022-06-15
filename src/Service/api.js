import axios from "axios";

const url ="http://localhost:5000";

export const Addcontact = async (contactdata) =>{
   return await axios.post(`${url}/contacts`,contactdata);
}

export const Getcontact = async () =>{
    return await axios.get(`${url}/contacts`);
}

export const Updatecontact= async (contactdata) =>{
    return await axios.put(`${url}/contacts`,contactdata);
}

export const deletecontact= async (id) =>{
    return await axios.delete(`${url}/contacts/${id}`);
}

export const getsinglecontact = async (id) =>{
    return await axios.get(`${url}/contacts/${id}`);
}

export const getsearchcontact = async (name) =>{
    return await axios.get(`${url}/search/${name}`);
}
