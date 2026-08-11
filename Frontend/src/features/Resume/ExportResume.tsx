import { useParams } from "react-router-dom";

import TemplateRenderer from "../templates/TemplateRendere";
import { useGetSingleResumeQuery } from "./ResumeApi";
export default function ExportResume() {

    const { id } = useParams();

    const { data, isLoading } = useGetSingleResumeQuery(id);

    if (isLoading) return null;


    return (
        <>
            <TemplateRenderer
                templateId={data.resume.template}
                resumeData={data.resume}
            />

        </>
    );
}
