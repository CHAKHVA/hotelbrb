
import "./FAB.css"
import { faPhone , faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from "react";
import Image from "next/image";
export default function FAB(){

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };



    return (<>
        <div className={`${isExpanded ? 'expanded' : 'fab'} fab-container` }  aria-label="Contact Us" onClick={!isExpanded ? handleToggleExpand : undefined}>
            {isExpanded ? (
                <div className={`fab-content`}>
                    <button className="close-btn" aria-label="Close" onClick={handleToggleExpand}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>

                    <Image
                        className={"avatar"}
                        width={50}
                        height={50}
                        key={""}
                        src={"https://flowbite.com/docs/images/carousel/carousel-1.svg"}
                        alt=""
                    />
                    <div className={"m-2"}>Rati Gigauri</div>
                    <div className="phone-number">+1234567890</div>

                    {/* add content here */}

                </div>
                ) : <FontAwesomeIcon icon={faPhone} className="fab-icon" />}
        </div>
        </>
    );

}