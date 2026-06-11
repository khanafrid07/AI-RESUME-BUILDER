import ContactForm from "./ContactForm";

export default function Form() {


    return (

        <div className="grid grid-cols-2">
            <div>
                Form Infos
                <ContactForm />
            </div>
            <div>
                Imgs preview
            </div>

        </div>
    )
}