import envConfiq from "@/src/config/envConfig";
import { delay } from "@/src/utils/delay";

export const getRecentPosts = async () =>{
    const res = await fetch(`
        ${envConfiq.baseApi}/items?sortBy=createdAt&limit=9`
    ); 

    await delay(5000)

     return res.json();
}