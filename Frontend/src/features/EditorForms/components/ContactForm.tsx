
import e from "cors";
import InputField from "../../../components/InputFiled";
import type { PersonalInfo, ResumeData } from "../types";
import type { Dispatch } from "react";
import type { SetStateAction } from "react";

type contactProp={
    contactInfo:PersonalInfo
    setResumeData:Dispatch<SetStateAction<ResumeData>>
    role:string
}

export default function ContactForm({ contactInfo, role, setResumeData }: contactProp) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setResumeData((prev)=>{
            return{...prev, personalInfo:{...prev.personalInfo, [name]:value} }
        })
    };
    const targetRoleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        setResumeData((prev)=>{
            return{...prev, [name]:value}
        })
    }

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold">Personal Information</h1>
            <div className="flex gap-4 w-full">
                <InputField label="First Name" placeholder="Afrid" name="firstName" type="text" value={contactInfo.firstName} onChange={handleChange}/>
                <InputField label="Last Name" placeholder="Khan" name="lastName" type="text" value={contactInfo.lastName} onChange={handleChange}/>


            </div>
            <div className="flex gap-4 w-full">
                <InputField label="Phone" placeholder="+91 8174029572" name="phone" type="text" value={contactInfo.phone} onChange={handleChange}/>
                <InputField label="Email" placeholder="someone123@gmail.com" name="email" type="email" value={contactInfo.email} onChange={handleChange}/>


            </div>
            <InputField label="Targeted Role" type="text" value={role} placeholder="Sales Manager" name="targetRole" onChange={targetRoleChange}/>
            <div >
                
                
                <div
                    
                > <div className="grid grid-cols-2 gap-4 w-full">
                        <InputField label="Address" placeholder="New York, USA" name="address" type="text" value={contactInfo.address || ""} onChange={handleChange}/>
                        
                        <InputField label="Portfolio" placeholder="www.myportfolio.com" name="portfolioWeb" type="text" value={contactInfo.portfolioWeb || ""} onChange={handleChange}/>


                    </div>
                </div>
            </div>
        </div>
    )
}