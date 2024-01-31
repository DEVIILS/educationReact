import { useState, useEffect } from 'react';
import { styled } from 'styled-components';

import logo from '/logo-deviils.svg';
// import './Header.css';

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
`;

export function Header() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setCurrentDate(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <HeaderContainer>
            <img src={logo} alt={'altResult'} />
            <span>Время сейчас: {currentDate.toLocaleTimeString()}</span>
        </HeaderContainer>
    );
}
