import { useState } from "react";

const SumCalculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);

    const handleNum1 = (e) => {
        setNum1(e.target.value);
    }

    const handleNum2 = (e) => {
        setNum2(e.target.value);
    }

    const handleSubmit = (e) => {
        setSum(Number(num1) + Number(num2));
        e.preventDefault(); // Prevent reload page caused by the form.
    }

    return (
        <form onSubmit={handleSubmit}>

            <h3>Sum Calculator</h3>

            <input type="number" value={num1} onChange={handleNum1} />
            <input type="number" value={num2} onChange={handleNum2} />

            <input type="submit" value="Calculate" />

            <p>Sum is: {sum}</p>
        </form>
    );
}

export default SumCalculator;