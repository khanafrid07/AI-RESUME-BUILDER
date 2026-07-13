export interface Education{
    degree:string;
    schoolName:string;
    startDate:string;
    endDate:string;
    location:string;
    description:string
}
export interface Experience{
    companyName: string;
    jobRole:string;
    startDate:string;
    endDate:string;
    currentlyWorking?:string;
    location:string;
    description:string[];
}
export interface Projects{
    projectName:string;
    projectLink:string;
    githubLink:string;
    description:string;
    startDate:string;
    endDate:string;
    technologies:string[]
}
export type PersonalInfo = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address?: string;
  city?: string;
  country?: string;
  portfolioWeb?: string;

};
export type Skill = {
    id:string
    skills: string[];
    category?: string;
};
export type Certification = {
    id: string;
    title: string;
    issuer: string;
    issueDate?: string;
};
export type Language = {
    id: string;
    language: string;
    proficiency: string;
};



export interface ResumeData {
    personalInfo: PersonalInfo;
    summary: string;
    education: Education[];
    experience: Experience[];
    projects: Projects[];
    skills: Skill[];
    certifications: Certification[];
    languages: Language[];
    targetRole:""
}