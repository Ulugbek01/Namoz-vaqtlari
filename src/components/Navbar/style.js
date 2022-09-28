import styled from "styled-components";

export const NavbarSection = styled.nav`
    padding: 15px 0;
    background-color: #02823B;

    .navbar-container {
        max-width: 600px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & .nav-link {
            color: #fff;
            font-weight: 700;
            line-height: 26px;
        }
    }

    .active {
        padding: 6px 12px;
        background-color: #1CC465;
    }
`;