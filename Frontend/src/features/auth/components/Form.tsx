import InputField from "../../../components/InputFiled";

export default function Form() {
    return (
        <div>
            <InputField placeholder="username" label="Usernmae" onChange={() => console.log("login clicked")} name="username" type="text" value="" />
        </div>
    )
}