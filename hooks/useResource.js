import axios from 'axios';
import useSWR from 'swr';

export const apiURL = process.env.NEXT_PUBLIC_RESOURCE_URL;
import { useAuth } from '../contexts/auth';

export default function useResource(){
    const { tokens, logout } = useAuth();
    const { data, error, mutate } = useSWR([apiURL, tokens], fetchResource)

    async function fetchResource(url) {
        if (!tokens) {
            return;
        }
        try {
            const response = await axios.get(url, config());

            return response.data;
        } catch (err) {
            handleError(err);
        }
    }
    async function createResource(info) {
        try {
            await axios.post(apiUrl, info, config());
            mutate();
        } catch (err) {
            handleError(err)
        }
    }

    async function deleteResource(id) {
        try {
            const url = apiUrl + id;
            await axios.delete(url, config());
            mutate();
        } catch(err) {
            handleError(err);
        }
    }

    async function updateResource(resource) {
        // STRETCH
        // Add ability for user to update an existing resource
    }


    function config() {

        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        };
    }

    function handleError(err) {
        console.error(err);
        // currently just log out on error
        // but a common error will be short lived token expiring
        // STRETCH: refresh the access token when it has expired
        logout();
    }
    console.log(tokens && !error && !data)
    return {
        resources: data,
        error,
        loading: tokens && !error && !data,
        createResource,
        deleteResource,
        updateResource,
    };
}
