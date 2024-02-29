import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
//import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {Link as CLink} from 'react-router-dom';
import { orange } from '@mui/material/colors';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <CLink  to="/login"><button style={{backgroundColor:"#AEC7E3"}}>Login</button></CLink>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
         <button style={{fontStyle:"Coronet"}}> {"Hindustan Times"}</button>
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <CLink to='/signup'>
       <button style={{backgroundColor:"#AEC7E3"}}>Sign up</button>   
        </CLink>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}