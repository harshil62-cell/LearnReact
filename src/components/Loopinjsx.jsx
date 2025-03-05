import React from 'react';

function Loopinjsx() {
    const userData = [
        {
            name: "Harshil",
            college: "Mithibai",
            internship: true
        },
        {
            name: "Vaibhav",
            college: "Thakur clg Kandivalli",
            internship: true
        },
        {
            name: "Deepak",
            college: "faltu",
            internship: true
        }
    ];

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <td>NAME</td>
                        <td>COLLEGE</td>
                        <td>INTERNSHIP</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user) => {
                            return (
                                <tr key={user.name}>
                                    <td>{user.name}</td>
                                    <td>{user.college}</td>
                                    <td>{user.internship ? 'Yes' : 'No'}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Loopinjsx;
