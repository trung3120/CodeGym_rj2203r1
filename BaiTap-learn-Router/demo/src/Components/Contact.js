import { Link } from "react-router-dom";

export default function Contact() {
    let port = [1000, 2000, 3000];

    return (
        <div>
            Contact:

            {port.map(id => (
                <Link className="b" to={`/contact/${id}`} key={id}>
                    {id}
                </Link>
            ))}
        </div>
    );
}
