import React from "react";

class CV extends React.Component {
    componentDidMount() {
        //alert("Welcome")
    }

    componentWillUnmount() {
        // alert("bye bye")
    }

    myInfo = {
        name: "Omar Kalthoum",
        imagePath: "./images/profile.jpg",
        email: "omar.381@hotmail.com",
        phone: "0727894062",
        location: {
            address: "Östra storgatan 4",
            postalCode: "29132",
            city: "Kristianstad",
            region: "Skåne"
        },
        "socialMedia": [{
            "network": "Youtube",
            "url": "https://youtube.com"
        }, {
            "network": "Facebook",
            "url": "https://facebook.com"
        }],
        education: [{
            "institutionName": "HKR",
            "area": "Software development",
            "startDate": "2018-08-01",
            "endDate": "2021-06-01",
            "courses": [
                "React",
                "C#",
                "C++"
            ]
        }],
        "languages": [{
            "language": "Arabic",
            "fluency": "Native speaker"
        },
        {
            "language": "English",
            "fluency": "Pro"
        }],
    }
    showMyInfo = () => {
        const item = this.myInfo;
        return (
            <div style={{ textAlign: "center" }}>
                <h1>MY CV</h1>
                <div>
                    <div>
                        <h2>Basic Info</h2>
                        <h3>Name: {item.name}</h3>
                        <h3>Email: {item.email}</h3>
                        <h3>Phone: {item.phone}</h3>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h2>Address</h2>
                        <h3>{item.location.address}</h3>
                        <h3>{item.location.postalCode}</h3>
                        <h3>{item.location.city}</h3>
                        <h3>{item.location.region}</h3>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h2>Social Media</h2>
                        <ul>
                            {item.socialMedia.map((value, index) => {
                                return (
                                    <li key={index} >
                                        <a href={value.url}>{value.network}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h2>Education</h2>
                        <ul>
                            {item.education.map((value, index) => {
                                return (
                                    <li key={index}>
                                        <h3>Institution Name: {value.institutionName}</h3>
                                        <h3>Area: {value.area}</h3>
                                        <h3>Start Date: {value.startDate}</h3>
                                        <h3>End Date:{value.endDate}</h3>
                                        <ul>
                                            <h2>Courses</h2>
                                            {value.courses.map((course, index) => {
                                                return (
                                                    <li key={index}>{course}</li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h2>Languages</h2>
                        <ul>
                            {item.languages.map((value, index) => {
                                return (
                                    <li key={index}>
                                        <h3>{value.language}</h3>
                                        <h3>{value.fluency}</h3>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.showMyInfo()}
            </div>
        )
    }
}

export default CV;