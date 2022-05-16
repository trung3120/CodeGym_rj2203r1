import { useState } from "react";

export default function ValidateForm() {
    const MESSAGE_ERROR = {
        username: "Username error",
        email: "Email error",
        phone: "Phone error",
        message: "Please enter message",
    };

    const REGEX = {
        username: /^[a-zA-Z]{2,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /^[0-9]{10}$/,
    };

    const [form, setForm] = useState({});

    function handleChange(event) {
        let error = "";
        if (event.target.name === "phone") {
            if (form.message && form.message.value) {
                error =
                    event.target.value === form.message.value
                        ? ""
                        : MESSAGE_ERROR[event.target.name];
            } else {
                error = REGEX[event.target.name].test(event.target.value)
                    ? ""
                    : MESSAGE_ERROR[event.target.name];
            }
        } else if (event.target.name === "message") {
            error =
                event.target.value === form.phone.value
                    ? ""
                    : MESSAGE_ERROR[event.target.name];
        } else {
            error = REGEX[event.target.name].test(event.target.value)
                ? ""
                : MESSAGE_ERROR[event.target.name];
        }
        setForm({
            ...form,
            [event.target.name]: { value: event.target.value, error: error },
        });
    }

    function handleSubmit() {
        const isFilled =
            form.username &&
            form.username.value &&
            form.email &&
            form.email.value &&
            form.phone &&
            form.phone.value &&
            form.message &&
            form.message.value;
        const isError =
            isFilled &&
            (form.username.error ||
                form.email.error ||
                form.phone.error ||
                form.message.error);

        alert(
            isFilled && !isError
                ? "Sign up successfully!!!"
                : "Please fill out all the fields!!!"
        );
    }

    return (
        <div className="container">
            <h1>Contact Form</h1>
            <form>
                <div
                    className={`custom-input 
                        ${form.username
                        && form.username.error
                        && "custom-input-error"
                        }`}
                >
                    <label>Name </label>
                    <input
                        name="username"
                        value={(form.username && form.username.value) || ""}
                        onChange={handleChange}
                    />
                    {form.username && form.username.error && (
                        <p className="error">{form.username.error}</p>
                    )}
                </div>
                <div
                    className={`custom-input 
                        ${form.email
                        && form.email.error
                        && "custom-input-error"
                        }`}
                >
                    <label>Email </label>
                    <input
                        name="email"
                        value={(form.email && form.email.value) || ""}
                        onChange={handleChange}
                    />
                    {form.email && form.email.error && (
                        <p className="error">{form.email.error}</p>
                    )}
                </div>
                <div
                    className={`custom-input 
                        ${form.phone
                        && form.phone.error
                        && "custom-input-error"
                        }`}
                >
                    <label>Phone </label>
                    <input
                        type="text"
                        name="phone"
                        value={(form.phone && form.phone.value) || ""}
                        onChange={handleChange}
                    />
                    {form.phone && form.phone.error && (
                        <p className="error">{form.phone.error}</p>
                    )}
                </div>
                <div
                    className={`custom-input 
                        ${form.message
                        && form.message.error
                        && "custom-input-error"
                        }`}
                >
                    <label>Message </label>
                    <textarea type="text"
                        name="message"
                        value={(form.message && form.message.value) || ""}
                        onChange={handleChange}
                    >
                    </textarea>
                    {form.message && form.message.error && (
                        <p className="error">{form.message.error}</p>
                    )}
                </div>
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}
