import type { ComponentType } from "react";
import { templates } from "./tempConfig";

type TemplateRendererProps = {
    templateId: string;
    [key: string]: unknown;
};

export default function TemplateRenderer({ templateId, ...props }: TemplateRendererProps) {
    const template = templates.find((temp) => temp.id === templateId);
    const Component = template?.component as ComponentType<any> | undefined;

    if (!Component) {
        return null;
    }

    return (
        <div>
            <Component {...props} />
        </div>
    );
}