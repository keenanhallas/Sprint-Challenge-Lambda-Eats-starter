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
                    value={formState.size}
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
            <label htmlFor="sauce">
                Sauce:
                <select
                    id="sauce"
                    name="sauce"
                    value={formState.sauce}
                    onChange={handleChange}
                >
                    <option value="">--Please select a sauce--</option>
                    <option value="Red">Red</option>
                    <option value="White">White</option>
                </select>
                {/*{errorState.name ? <ErrorMessage>{errorState.name}</ErrorMessage> : null}*/}
            </label>
            <br />
            <label htmlFor="pepperoni">
                Pepperoni:
                <input
                    type="checkbox"
                    id="pepperoni"
                    name="pepperoni"
                    checked={formState.pepperoni}
                    onChange={handleChange}
                    /> 
            </label>
            {/*{errorState.name ? <ErrorMessage>{errorState.name}</ErrorMessage> : null}*/}
            <br />
            <label htmlFor="sausage">
                Sausage:
                <input
                    type="checkbox"
                    id="sausage"
                    name="sausage"
                    checked={formState.sausage}
                    onChange={handleChange}
                    /> 
            </label>
            {/*{errorState.name ? <ErrorMessage>{errorState.name}</ErrorMessage> : null}*/}
            <br />
            <label htmlFor="mushroom">
                Mushroom:
                <input
                    type="checkbox"
                    id="mushroom"
                    name="mushroom"
                    checked={formState.mushroom}
                    onChange={handleChange}
                    /> 
            </label>
            {/*{errorState.name ? <ErrorMessage>{errorState.name}</ErrorMessage> : null}*/}
            <br />
            <label htmlFor="pineapple">
                Pineapple:
                <input
                    type="checkbox"
                    id="pineapple"
                    name="pineapple"
                    checked={formState.pineapple}
                    onChange={handleChange}
                    /> 
            </label>
            {/*{errorState.name ? <ErrorMessage>{errorState.name}</ErrorMessage> : null}*/}
            <br />
            <button>Order now!</button>
        </form>
    );
};

export default PizzaForm;