import jwt from "jsonwebtoken";


export const genRefreshAccessToken = async (email: string) => {

    const refreshToken = jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET as string, {
        expiresIn: 60 * 60 * 24 * 7,
    });
    const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET as string, {
        expiresIn: 15 * 60,
    });

    return { refreshToken, accessToken }
}