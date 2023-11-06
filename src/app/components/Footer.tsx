
import "./Footer.css"

const contacts = [
    {name : "Email", content: "hotelBRB@gmail.com",link : "something"},
    {name : "Email", content: "hotelBRB@gmail.com",link : "something"},
    {name : "Email", content: "hotelBRB@gmail.com",link : "something"}


]


export  default function Footer(){




    return(
        <>
            <footer className="footer ">

                <div>
                    <h6>Contacts:</h6>
                    <ul>
                        {contacts.map(cont =>
                            (<li className={"contact-comp"} key={"name"}>{cont.name} : <a href={cont.link} >{cont.content}</a> </li>)
                        )}

                    </ul>
                </div>

                <div>
                    <h6>Contacts:</h6>
                    <ul>
                        {contacts.map(cont =>
                            (<li className={"contact-comp"} key={"name"}>{cont.name} : <a href={cont.link} >{cont.content}</a> </li>)
                        )}

                    </ul>
                </div>

                <div>
                    <h6>Contacts:</h6>
                    <ul>
                        {contacts.map(cont =>
                            (<li className={"contact-comp"} key={"name"}>{cont.name} : <a href={cont.link} >{cont.content}</a> </li>)
                        )}

                    </ul>
                </div>

            </footer>
        </>
    )

}