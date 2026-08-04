import FormLayout from "./components/FormLayout";
import InputField from "../../components/InputFiled";
import { useSendOtpMutation } from "./authApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export default function Signup() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: "",
    })
    const navigate = useNavigate();


    const [sendOtp, { isLoading, isError }] = useSendOtpMutation();

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res: any = await sendOtp({ email: formData.email, password: formData.password, username: formData.username }).unwrap();
            console.log(res);
            navigate("/account/verify-otp", {
                state: formData.email
            });
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            else {
                console.log(error);
            }
        }
    }
    return (
        <FormLayout>
            <form className="flex flex-col gap-3 " onSubmit={handleSubmit}>
                <InputField type="text" name="username" label="Full Name" placeholder="John Doe" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                <InputField type="email" name="email" label="Email" placeholder="someone@gmail.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <InputField type="password" name="password" label="Password" placeholder="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                <button type="submit" disabled={isLoading} className="w-full btn btn-primary">{isLoading ? "Sending OTP..." : "Signup"}</button>
            </form>
        </FormLayout>
    )
}