
import InputField from "../../components/InputFiled";
import FormLayout from "./components/FormLayout";

export default function Login() {

    return (
        <div>
            <FormLayout>
                <div className="flex flex-col gap-3 ">

                    <InputField type="email" name="email" label="Email" placeholder="someone@gmail.com" value="" onChange={() => console.log("login clicked")} />
                    <InputField type="password" name="password" label="Password" placeholder="password" value="" onChange={() => console.log("login clicked")} />


                    <button className="w-full btn btn-primary">Login</button>
                </div>
            </FormLayout>
        </div>
    )

}