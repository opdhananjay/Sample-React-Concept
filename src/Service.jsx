// export const GetData1 = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');  
//     return response.json();
// }

import { axiosClient } from "./axiosClient"

export const GetData1 = async () => {
    const result = await axiosClient.get('https://jsonplaceholder.typicode.com/posts');
    return result.data;
}
