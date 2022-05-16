import { useState } from "react";

export default function FormElements() {
    const [state, setState] = useState({
        description: "gnurt!!",
        country: "DN"
    });

    return(
        <form>
            <textarea value={state.description}></textarea>
            <br></br>
            <select value={state.country}>
                <option value="HN">Hà Nội</option>
                <option value="DN">Đà Nẵng</option>
                <option value="HCM">Hồ Chí Minh</option>
            </select>
        </form>
    )
}