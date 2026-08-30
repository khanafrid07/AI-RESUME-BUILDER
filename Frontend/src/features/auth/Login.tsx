
import InputField from "../../components/InputFiled";
import FormLayout from "./components/FormLayout";
import { useState } from "react";
import { useLoginUserMutation } from "./authApi";


export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [loginUser, { isLoading, isError }] = useLoginUserMutation()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response: any = await loginUser(formData)
            console.log("this si the response", response.error.data.message)
            alert(response.error.data.message)
            navigate("/")
        }
        catch (error) {
            console.log(error)

        }
    }
    if (isLoading) {
        return <div>Loading...</div>
    }


    return (
        <div>
            <FormLayout >
                <form onSubmit={handleSubmit}>

                    <div className="flex flex-col gap-3 ">

                        <InputField type="email" name="email" label="Email" placeholder="someone@gmail.com" value={formData.email} onChange={handleChange} />
                        <InputField type="password" name="password" label="Password" placeholder="password" value={formData.password} onChange={handleChange} />


                        <button type="submit" className="w-full btn btn-primary">Login</button>
                    </div>
                </form>
            </FormLayout>
        </div>
    )

}