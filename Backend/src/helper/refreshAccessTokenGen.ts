import jwt from "jsonwebtoken";


export const genRefreshAccessToken = async (userId: string) => {

    const refreshToken = jwt.sign({ id: userId }, process.env.REFRESH_TOKEN_SECRET as string, {
        expiresIn: 60 * 60 * 24 * 7,
    });
    const accessToken = jwt.sign({ id: userId }, process.env.ACCESS_TOKEN_SECRET as string, {
        expiresIn: 15 * 60,
    });

    return { refreshToken, accessToken }
}