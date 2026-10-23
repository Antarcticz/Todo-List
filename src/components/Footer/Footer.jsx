import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className='name'>
                <p>Maximilian Hedman</p>
            </div>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/maximilian-hedman-b10a2915b/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/MaximilianHedman" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </li>
                <li>
                    <a href="https://sv-se.facebook.com/maximilian.hedman" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </a>
                </li>
                <li>
                    <a href="https://sv-se.facebook.com/maximilian.hedman" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fas', 'envelope']} />
                    </a>
                </li>
            </ul>
            <div className='copyright'>
                <p>All rights reserved &copy; {currentYear}</p>
            </div>
        </footer>
    )
}

export default Footer