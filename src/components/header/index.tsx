import { ReactElement, useEffect, useState } from "react";
import { IInput, Iuser } from "../../interfaces/headerInterface/header";
import { styled, alpha } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import logo from "../../assets/img/Hospital.png";
import SearchIcon from '@mui/icons-material/Search';
import EventIcon from "@mui/icons-material/Event";
import { useNavigate } from "react-router-dom";
import {  Button, Input, Toolbar } from "@mui/material";
import { ConteineirHeader, ConteinerAvatar, ConteinerLogoHeader } from "./styled";
import InputBase from '@mui/material/InputBase';
import { apiHospital } from "../../services/apiHospital";


export function Header({ input }: IInput): ReactElement {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const token = localStorage.getItem("@Token")
  const [user, setUser] = useState<Iuser>({} as Iuser)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    console.log(token)
    console.log(user)

    token !== null &&
      apiHospital.get('user', {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }).then(res => setUser(res.data.users))

    
  }, [token])

  return (
    <ConteineirHeader>
      <ConteinerLogoHeader>
        <Toolbar>
          <img src={logo} alt="logotipo da empresa" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            HospitalTS
          </Typography>
        </Toolbar>
        <Toolbar>
          <Button
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Tratamentos
          </Button>
          <Button
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Melhores avaliadas
          </Button>
          <Button
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Mais Proximas
          </Button>
        </Toolbar>
      </ConteinerLogoHeader>
      <ConteinerAvatar>
        {input && (
          <Box className="conteinerInput">
            <button className="buttonInput">
                <SearchIcon />
            </button>
            <input
              placeholder="Pesquisar…"
            />
          </Box>
        )}

        <Box>
          <Tooltip title="Configurações">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "perfil-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              {
                token !== null && user.avatar === null ?
                    <Avatar></Avatar>
                  :
                    <Avatar src={user.avatar} ></Avatar>
              }
              
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {
              token !== null ? 
              <>
                <MenuItem>
                  {
                      token === '' && user.avatar === null ?
                        <>
                          <Avatar></Avatar>
                          Perfil
                        </>
                        :
                        <>
                          <Avatar></Avatar>
                          Perfil
                        </>  
                    }
                  
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Configurações
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <EventIcon fontSize="small" />
                  </ListItemIcon>
                  Agenda
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    localStorage.clear();
                    navigate("/login");
                  }}
                >
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Sair
                </MenuItem>
              </>
            :
            <>
                <MenuItem
                  onClick={() => {
                    localStorage.clear();
                    navigate("/login");
                  }}
                >
                  <ListItemIcon>
                    <VpnKeyIcon fontSize="small" />
                  </ListItemIcon>
                  Login
                </MenuItem>
                <MenuItem
              onClick={() => {
                localStorage.clear();
                navigate("/register");
              }}>
                  <ListItemIcon>
                    <LockOpenIcon fontSize="small" />
                  </ListItemIcon>
                  Registrar
                </MenuItem>
            </>
          }
        </Menu>
      </ConteinerAvatar>
    </ConteineirHeader>
  );
}
