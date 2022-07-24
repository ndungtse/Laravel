import React from "react";

const Home = () => {
    const [districts, setDistricts] = React.useState([]);

    React.useEffect(() => {
        const getDistricts = async () => {
            try {
                const res = await fetch("http://127.0.0.1:8000/api");
                const data = await res.json();
                setDistricts(data);
            } catch (error) {
                console.log(error);
            }
        };
        getDistricts();
    }, []);
    return (
        <div>
            <p>Districts in Rwanda</p>
            <table className="table-responsive table-striped table table-black">
                <thead>
                    <tr>
                        <th>district id</th>
                        <th>provinceId</th>
                        <th>districtName</th>
                    </tr>
                </thead>
                <tbody>
                    {districts.map((vill, index) => (
                        <tr key={index}>
                            <td>{vill.districtId}</td>
                            <td>{vill.provinceId}</td>
                            <td>{vill.districtName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
