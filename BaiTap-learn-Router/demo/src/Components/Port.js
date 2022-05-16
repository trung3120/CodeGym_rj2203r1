import { useParams } from 'react-router-dom';

export default function Port() {
    let params = useParams();
    return (
        <div>
            <h2>Hello {params.port}</h2>
            <p>Port: {params.port}</p>
        </div>
    );
}