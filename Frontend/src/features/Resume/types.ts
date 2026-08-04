import type { Dispatch, SetStateAction } from "react";

export type ContactInfo = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address?: string;
  city?: string;
  country?: string;
  portfolioWeb?: string;
};

export type AiFormInfo = {
  targetRole: string;
  yearsOfExperience: string;
  summary: string;
  workExperience: string;
  education: string;
  skills: string;
  projects: string;
  certifications: string;
  languages: string;
};

export type ContactFormProps = {
  contactInfo: ContactInfo;
  setContactInfo: Dispatch<SetStateAction<ContactInfo>>;
};

export type AiFormProps = {
  aiFormData: AiFormInfo;
  setAiFormData: Dispatch<SetStateAction<AiFormInfo>>;
};
