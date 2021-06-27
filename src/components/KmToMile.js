import { useState } from "react";

const KmToMile = () => {

    const [km, setKm] = useState(0);

    const handleChange = (e) => {
        setKm(e.target.value);
    }

    const convertToMile = (km) => {
        return (km / 1.609).toFixed(2);
    }

    return (
        <div>
            <h3>Km to Mile Converter</h3>
            Km: <input type="text" value={km} onChange={handleChange} />
            <p>{km} equals to {convertToMile(km)} miles.</p>
        </div>
    );

}

export default KmToMile;