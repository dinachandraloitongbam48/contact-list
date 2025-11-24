import { LuStar } from "react-icons/lu";
import { useState } from "react";

function ContactCard({ contact }) {
    const [isFavorite, setIsFavorite] = useState(contact.favorite)
    return (
        <div className="card-content">
            <div className="card">
                <h3>{contact.name}</h3>
                <p>{contact.phone}</p>
            </div>
            <LuStar
                className={`star ${isFavorite && "yellow-star"}`}
                onClick={() => setIsFavorite(!isFavorite)}
            />
        </div>
    );
}

export default ContactCard;
