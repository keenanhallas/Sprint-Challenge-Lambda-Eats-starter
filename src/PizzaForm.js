import React, { useState, useEffect } from "react";
import * as yup from "yup";
import styled from "styled-components";
import axios from 'axios';

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

    const [orders, setOrders] = useState([]);

    const formSchema = yup.object().shape({
        name: yup.string().min(2, "Your name must be at least 2 characters.").required("You must enter your name."),
        size: yup.string().oneOf(["S", "M", "L", "XL"], "You must select a size"),
        sauce: yup.string().oneOf(["Red", "White"], "You must select a sauce"),
        pepperoni: yup.boolean(),
        sausage: yup.boolean(),
        mushroom: yup.boolean(),
        pineapple: yup.boolean(),
        instructions: yup.string()
    });

    const [errorState, setErrorState] = useState({
        name: ""
    });

    const handleChange = (event) => {
        event.persist();
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setFormState({
            ...formState,
            [event.target.name]: value
        });
        console.log(formState);
        validate(event, value);
    }

    const validate = (event, value) => {
        yup.reach(formSchema, event.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [event.target.name]: ""
                });
            })
            .catch(err => {
                setErrorState({
                    ...errorState,
                    [event.target.name]: err.errors[0]
                });
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://reqres.in/api/orders", formState)
            .then(response => {
                console.log(response.data);
                setOrders([...orders, {
                    name: response.data.name,
                    size: response.data.size,
                    sauce: response.data.sauce,
                    instructions: response.data.instructions
                }]);
            })
            .catch(err => {
                console.log(err);
            })
        setFormState({
            name: "",
            size: "",
            sauce: "",
            pepperoni: false,
            sausage: false,
            mushroom: false,
            pineapple: false,
            instructions: ""
        });
        //console.log();
    }

    useEffect(() => {
        console.log(orders);
    }, [orders]);

    const ErrorMessage = styled.span`
        color: red;
        font-size: .75rem;
        margin-left: 5px;
    `;

    return (
        <form onSubmit={handleSubmit}>
            <h3>First things first</h3>
            <label htmlFor="name">
                Name:
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                />
                {errorState.name ? <ErrorMessage>{errorState.name}</ErrorMessage> : null}
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
                {errorState.size ? <ErrorMessage>{errorState.size}</ErrorMessage> : null}
            </label>
            <br />
            <h3>Toppings</h3>
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
                {errorState.sauce ? <ErrorMessage>{errorState.sauce}</ErrorMessage> : null}
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
            <h3>Special instructions</h3>
            <label htmlFor="instructions">
                <textarea
                    id="instructions"
                    name="instructions"
                    value={formState.instructions}
                    onChange={handleChange}
                />
                {/*{errorState.name ? <ErrorMessage>{errorState.name}</ErrorMessage> : null}*/}
            </label>
            <br />
            <button>Order now!</button>
        </form>
    );
};

export default PizzaForm;