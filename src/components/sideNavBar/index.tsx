import { Box } from '@mui/material';
import './style.scss';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import logo from '../../assets/logo.png';
import PATH from '../../router/paths';
import { NavLink } from 'react-router-dom';

const SideNavBar = () => {
  return (
    <Box className="side-nav-bar">
      <Box>
        <img className="logo" src={logo} />
      </Box>
      <NavLink
        to={PATH.HOME}
        className={({ isActive }) => (isActive ? 'side-nav-item--clicked' : 'side-nav-item')}>
        <HomeRoundedIcon className="icon" />
      </NavLink>
      <NavLink
        to={PATH.PATIENTS}
        className={({ isActive }) => (isActive ? 'side-nav-item--clicked' : 'side-nav-item')}>
        <GroupRoundedIcon className="icon" />
      </NavLink>
    </Box>
  );
};

export default SideNavBar;
