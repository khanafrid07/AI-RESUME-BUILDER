import InputField from "../../../components/InputFiled";

export default function Form() {
    return (
        <div className="flex justify-center h-screen ">
            <div className="w-full p-6 rounded-xl shadow-lg max-w-md border border-gray-200">

                <InputField placeholder="username" label="Username" onChange={() => console.log("login clicked")} name="username" type="text" value="" />
                <InputField placeholder="someone@gmail.com" label="Email" onChange={() => console.log("login clicked")} name="email" type="email" value="" />
                <InputField placeholder="password" label="Password" onChange={() => console.log("login clicked")} name="password" type="password" value="" />
                <button className="w-full btn btn-primary">Login</button>
            </div>
        </div>
    )
}