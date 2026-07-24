
import redis from "../config/redis";


export const resendRateLimit = async (email: string) => {

    const resendOtp = await redis.incrby(`resend:${email}`, 1)
    if (resendOtp === 1) {
        await redis.expire(`resend:${email}`, 300)

    }
    if (resendOtp > 5) {
        throw new Error("Too many requests")
    }
}   
