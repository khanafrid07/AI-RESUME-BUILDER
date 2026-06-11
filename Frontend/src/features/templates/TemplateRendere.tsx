import ModernCreative from "./ModernCreative"

export default function TemplateRenderer({ template }: { template: string }) {
    switch (template) {
        case "Modern":
            return <ModernCreative />
        default:
            return null
    }
}