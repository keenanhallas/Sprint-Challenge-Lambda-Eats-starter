import React, { useState } from "react";

const PizzaForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        size: "",
        sauce: "",
        pepperoni: false,
        sausage: false,
        mushroom: false,
        pineapple: false,
        instructions: ""
    });

    const handleChange = () => {
        console.log("Change logged!");
    }

    const handleSubmit = () => {
        console.log("Submission logged!");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Please enter your info</h2>
            <label htmlFor="name">
                Name:
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                />
                {/*{errorState.name ? <ErrorMessage>{errorState.name}</ErrorMessage> : null}*/}
            </label>
            <br />
            <label htmlFor="size">
                Pizza size:
                <select
                    id="size"
                    name="size"
                    value={formState.name}
                    onChange={handleChange}
                >
                    <option value="">--Please select a size--</option>
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                    <option value="XL">Extra Large</option>
                </select>
                {/*{errorState.name ? <ErrorMessage>{errorState.name}</ErrorMessage> : null}*/}
            </label>
            <br />
            <button>Order now!</button>
        </form>
    );
};

export default PizzaForm;