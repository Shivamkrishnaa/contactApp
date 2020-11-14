export default {

    port : process.env.REDIS_PORT || "",
    host  : process.env.REDIS_HOST || "localhost", 
    auth  : process.env.REDIS_AUTH || ""
}