import axios from 'axios'
import { api_version } from './version';

export async function postPoster(formData,setResultPosterState){
    console.log(api_version+"/posters")
    await axios.post(
        api_version+"/posters",
        formData)
        .then(function(response){
            console.log(response);
            const data = response['data']
            setResultPosterState(data['image_url']);
        })
        .catch(function(error){
            console.log(error);
        })

}