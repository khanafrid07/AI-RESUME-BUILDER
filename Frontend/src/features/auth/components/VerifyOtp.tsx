import { useLocation } from "react-router-dom";
import InputField from "../../../components/InputFiled";
import FormLayout from "./FormLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVerifyOtpMutation } from "../authApi";

export default function VerifyOtp() {
    const [otp, setOtp] = useState<string>("")
    const location = useLocation()
    const email = location.state

    const navigate = useNavigate()
    const [verifyOtp, { isLoading, isError }] = useVerifyOtpMutation()
    if (!email) {
        navigate("/register")
    }


    async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            const res = await verifyOtp({ email, otp }).unwrap()
            console.log(res)
            navigate("/")
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <form onSubmit={handleSubmit}>
            <FormLayout>
                <div className="flex flex-col gap-6">
                    <h1 className="text-center text-2xl font-bold">Verify OTP</h1>
                    <p className="text-center text-sm text-gray-500">Enter the OTP sent to your this {email}</p>
                    <InputField type="number" label="OTP" name="otp" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                    <button disabled={isLoading} type="submit" className="btn btn-primary">Verify Otp</button>

                </div>

            </FormLayout>

        </form>

    )
}