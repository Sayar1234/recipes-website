import React from 'react';
import './ContributorsPage.css';

function ContributorsPage() {
    return (
        <div className="contributors-page">
            <div className="contributors-container">
                <div className="contributor-card">
                    <img src="https://media.licdn.com/dms/image/D5603AQGCxDHIerqWrA/profile-displayphoto-shrink_400_400/0/1707327423535?e=1719446400&v=beta&t=qbRGqydNaI-_-2VVVT3IT3cmvTfMWfpy131MsmLLoBs" alt="Sayar Chakraborty" />
                    <div className="contributor-info">
                        <h2>Sayar Chakraborty</h2>
                        <p>Registration Number: 22BCE3936</p>
                    </div>
                </div>
                <div className="contributor-card">
                    <img src="https://media.licdn.com/dms/image/D5603AQH9o80PR-LSsQ/profile-displayphoto-shrink_100_100/0/1689654083984?e=1719446400&v=beta&t=xrk020iS_7XEy4x9v4S9J6z17wLGbazA7JcGfywuMsA" alt="Abhinav Singh" />
                    <div className="contributor-info">
                        <h2>Abhinav Singh</h2>
                        <p>Registration Number: 22BCT0239</p>
                    </div>
                </div>
                <div className="contributor-card">
                    <img src="https://media-maa2-2.cdn.whatsapp.net/v/t61.24694-24/359716019_316777697364448_8477230435482732013_n.jpg?ccb=11-4&oh=01_Q5AaICe_3d7KYNNzbjDGoLcJcBvYM9VIrzuv36sND__724E-&oe=66377CB4&_nc_sid=e6ed6c&_nc_cat=102" alt="Utkarsh Yadav" />
                    <div className="contributor-info">
                        <h2>Utkarsh Yadav</h2>
                        <p>Registration Number: 22BCE3305</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContributorsPage;
