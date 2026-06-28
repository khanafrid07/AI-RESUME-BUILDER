import React from 'react';

interface InputFieldProps {
    label: string;
    name: string;
    placeholder?: string;
    type: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({ name, label, placeholder = "", type = "text", value = "", onChange }: InputFieldProps) {
    return (
        <div className="w-full">
            <label className="block mb-1 text-sm font-medium">{label}</label>
            <input
                className="input w-full"
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}