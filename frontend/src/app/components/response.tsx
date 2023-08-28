
import axios from "axios";

export default async function Response(props:any){
    try {
        const response = await axios.post(`https://code-converter-ltof.onrender.com${props.url}`, {
            code:props.data,
            targetLang:props.targetLang
        });
        return response.data
      } catch (error) {
        return error
      }
}