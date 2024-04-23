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
                    <img src="https://instagram.fmaa12-1.fna.fbcdn.net/v/t51.2885-15/318478516_518246290263782_2793123973634261762_n.jpg?stp=c0.102.640.640a_dst-jpg_e15_s150x150&_nc_ht=instagram.fmaa12-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=qrjucPkjtWIAb6hwb0n&edm=AGXveE0BAAAA&ccb=7-5&oh=00_AfCMadFXr4lPjIEUWrzncuZp5i7_2N_m5gs0JBIClb8TRA&oe=66295AAF&_nc_sid=cf751b" alt="Abhinav Singh" />
                    <div className="contributor-info">
                        <h2>Abhinav Singh</h2>
                        <p>Registration Number: 22BCT0239</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContributorsPage;
