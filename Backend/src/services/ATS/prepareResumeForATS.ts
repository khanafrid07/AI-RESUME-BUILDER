function prepareResumeForATS(resume: any) {
    return {
        summary: resume.summary || "",

        skills: resume.skills || [],

        experience: resume.experience || [],

        education: resume.education || [],

        projects: resume.projects || [],

        certifications: resume.certifications || [],

        customSection: resume.customSection || [],

        languages: resume.languages || []
    };
}