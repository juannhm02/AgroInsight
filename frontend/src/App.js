import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
    useEffect(() => {
        axios.get("http://localhost:5000")
            .then((response) => console.log(response.data))
            .catch((error) => console.error(error));
    }, []);

    return <div>Welcome to AgroInsight</div>;
};

export default App;