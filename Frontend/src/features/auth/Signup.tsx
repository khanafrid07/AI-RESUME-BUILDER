import FormLayout from "./components/FormLayout";
import InputField from "../../components/InputFiled";

export default function Signup() {
    return (
        <FormLayout>
            <div className="flex flex-col gap-3 ">
                <InputField type="text" name="username" label="Full Name" placeholder="John Doe" value="" onChange={() => console.log("login clicked")} />
                <InputField type="email" name="email" label="Email" placeholder="someone@gmail.com" value="" onChange={() => console.log("login clicked")} />
                <InputField type="password" name="password" label="Password" placeholder="password" value="" onChange={() => console.log("login clicked")} />
                <button className="w-full btn btn-primary">Signup</button>
            </div>
        </FormLayout>
    )
}