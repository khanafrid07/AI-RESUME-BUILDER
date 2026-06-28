export interface Education{
    degree:string;
    schoolName:string;
    startDate:string;
    endDate:string;
}
export interface Experience{
    companyName: string;
    jobRole:string;
    startDate:string;
    endDate:string;
}
export interface Projects{
    projectName:string;
    description:string;
    startDate:string;
    endDate:string;
    techStack?:string[]
}
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


export interface ResumeData {
    personalInfo: ContactInfo;
    summary: string;
    education: Education[];
    experience: Experience[];
    projects: Projects[];
    skills: string[];
    certifications: string[];
    languages: string[];
}