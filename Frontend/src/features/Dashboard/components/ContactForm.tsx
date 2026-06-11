export default function ContactForm() {

    return (
        <div>
            <h1>Contacts</h1>
            <div className="flex gap-4 w-full">
                <div className="w-full">
                    <label>First Name</label>
                    <input className="input w-full" type="text" placeholder="Oliver" />

                </div>
                <div className="w-full">

                    <label>Last Name </label>
                    <input className="input w-full" type="text" placeholder="Kahn" />
                </div>


            </div>
            <div>
                <label className="block">Job Title</label>
                <input className="input w-full" type="text" placeholder="SOFTWARE DEVELOPER" />
            </div>
            <div className="flex gap-4 w-full">
                <div className="w-full">
                    <label>Phone</label>
                    <input className="input w-full" type="text" placeholder="+91-98271242.." />

                </div>
                <div className="w-full">

                    <label>Email </label>
                    <input className="input w-full" type="text" placeholder="someone@gmail.com" />
                </div>


            </div>
            <div className=" collapse ">
                <input type="checkbox" className="peer" />
                <div
                    className="collapse-title font-semibold text-2xl text-blue-400"
                >
                    Additonal Information
                </div>
                <div
                    className="collapse-content "
                > <div className="flex gap-4 w-full">
                        <div className="w-full">
                            <label>Location</label>
                            <input className="input w-full" type="text" placeholder="New York, USA" />

                        </div>
                        <div className="w-full">

                            <label>Website </label>
                            <input className="input w-full" type="text" placeholder="myportfolio.com" />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}