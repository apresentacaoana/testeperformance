import axios from 'axios'
import client from '../util/authUtil';

export const getProducts = async (offset, limit) => {
    const response = await client.get(`products/${offset * 10}/${10}`);
    const { list } = response.data;
    return list;
}