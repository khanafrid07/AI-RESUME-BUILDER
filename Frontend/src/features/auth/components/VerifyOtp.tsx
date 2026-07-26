import { useLocation } from "react-router-dom";
import InputField from "../../../components/InputFiled";
import FormLayout from "./FormLayout";
import { useState } from "react";

export default function VerifyOtp() {
    const [otp, setOtp] = useState<string>("")
    const location = useLocation()
    const email = location.state

    function handleOtpChange(e: React.ChangeEvent<HTMLInputElement>) {
        setOtp(e.target.value)
    }

    return (
        <form>
            <FormLayout>
                <div className="flex bg-gray-800 items-center justify-center gap-12">
                    <h1 className="text-center text-2xl font-bold">Verify OTP</h1>
                    <p className="text-center text-sm text-gray-500">Enter the OTP sent to your this {email}</p>
                    <InputField type="number" label="OTP" name="otp" placeholder="Enter OTP" value="" onChange={() => { }} />
                    <button className="btn btn-primary">Verify Otp</button>

                </div>

            </FormLayout>

        </form>

    )
}