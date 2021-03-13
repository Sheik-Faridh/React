import client from './api';

export const encrypt = async payload => {
    try{
        const config = {
            headers: {
                'Authorization': `Basic ${btoa('pdfeditor:6qtRdpGsu0Y24>,')}`,
                'Content-Type': 'application/json'
            }
        }
        const res = await client.post('/auth/encrypt',payload,config);
        return res.data;
    }catch(error){
        console.error("Failed to encrypt the data");
        console.error(error);
        throw new Error("Failed to encrypt the data");
    }
}

export const createUserData = async payload => {
    try{
        const encodedPayload = await encrypt(payload);
        const config = {
            'Content-Type': 'application/json',
            withCredentials: true
        };
        const res = await client.post('/auth/register', { user:encodedPayload }, config);
        return res.data;
    }catch(error){
        console.error("Failed to create the user");
        console.error(error);
        throw new Error("Failed to create the user");
    }
}

export const getAuthToken = async (userName,password) => {
    try{
        const payload = {
            userName,
            password
        };
        const encryptedData = await encrypt(payload);
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        };
        const res = await client.post('/auth/authenticate',encryptedData,config);
        return res.data;
    }catch(error){
        console.error("Error while verifying the user");
        console.error(error);
        return null;
    }
}

export const getAllFiles = async () => {
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials : true
        };
        const res = await client.get('/api/v1/file/all',config);
        return res.data;
    }catch(error){
        console.error("Failed to get the files");
        console.error(error.response);
        throw new Error("Failed to fetch the files");
    }
}

export const uploadFile = async file => {
    try{
        const formData = new FormData();
        formData.append("file",file);
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials : true
        };
        const res = await client.post('/api/v1/file/upload',formData,config);
        return {
            file: res.data,
            isUploaded: true
        };
    }catch(error){
        console.error("Failed to upload the files to the server");
        console.error(error.response);
        return {
            isUploaded: false
        }
    }
}

export const getFile = async (fileId,fileData) => {
    try{
        const config = {
            responseType: 'blob',
            headers: {
                'Accept': 'application/pdf'
            },
            withCredentials : true
        };
        const res = await client.get(`/api/v1/file/${fileId}`,config);
        const file = new File([res.data], fileData.name, {lastModified: fileData.updated_at});
        return file;
    }catch(error){
        console.error("Failed to access the file");
        console.error(error.response);
        throw new Error("failed to access the file");
    }
}

export const updateFile = async (fileId,file) => {
    try{
        const formData = new FormData();
        formData.append("file",file);
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials : true
        };
        await client.put(`/api/v1/file/${fileId}`,formData,config);
        return true;
    }catch(error){
        console.error("Failed to update the file");
        console.error(error.response);
        return false;
    }
}

export const getFileData = async fileId => {
    try{
        const files = await getAllFiles();
        return files.find(fileData => fileData._id === fileId);
    }catch(error){
        throw error;
    }
}

export const deletePDFFile = async fileId => {
    try{
        const config = {
            withCredentials: true
        };
        return await client.delete(`/api/v1/file/${fileId}`,config);
    }catch(error){
        console.error("failed to delete the file");
        console.error(error.response);
        throw new Error("Failed to delete the file");
    }
}

export const logout = async () => {
    try{
        const config = {
            withCredentials: true
        };
        return await client.post(`/auth/logout`,{},config);
    }catch(error){
        console.error("failed to logout the user");
        console.error(error.response);
        throw new Error("Failed to logout the user");
    }
}


export const getLoggedInUserData = async () => {
    try{
        const config = {
            withCredentials: true,
            'Content-Type': 'apllication/json'
        };
        const res = await client.get(`/api/v1/user/me`,config);
        return res.data;
    }catch(error){
        console.error("failed to get the user data");
        console.error(error.response);
        throw new Error("Failed to get the user data");
    }
}