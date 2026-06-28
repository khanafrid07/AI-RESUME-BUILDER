
import InputField from "../../components/InputFiled";
import type { ContactInfo, ResumeData } from "./types";
import type { Dispatch } from "react";
import type { SetStateAction } from "react";

type contactProp={
    contactInfo:ContactInfo
    setResumeData:Dispatch<SetStateAction<ResumeData>>
}

export default function ContactForm({ contactInfo, setResumeData }: contactProp) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setResumeData((prev)=>{
            return{...prev, personalInfo:{...prev.personalInfo, [name]:value} }
        })
    };

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