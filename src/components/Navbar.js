
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #111111
`;

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 30px;
    color : inherit;
    text-decoration: none;
`

const Navbar = () => {

    return(
        <Header position="static">
            <Toolbar>
            <Tabs to='/'>Home</Tabs>
            <Tabs to='/all'>All-User</Tabs>
            <Tabs to='/add'>Add-User</Tabs>
            <Tabs to='/multiImage'>Multi-Image</Tabs>
            </Toolbar>
        </Header>
    )
};

export default Navbar;