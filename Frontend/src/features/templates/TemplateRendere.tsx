import type { ComponentType } from "react";
import { templates } from "./tempConfig";
import { useNavigate } from "react-router-dom";

type TemplateRendererProps = {
    templateId: string;
    [key: string]: unknown;
};

export default function TemplateRenderer({ templateId, ...props }: TemplateRendererProps) {
    const navigate = useNavigate()
    const template = templates.find((temp) => temp.id === templateId);
    const Component = template?.component as ComponentType<any> | undefined;

    if (!Component) {
        return null;
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={() => navigate("/resume/templates")}>Switch Template</button>

            <Component {...props} />
        </div>
    );
}