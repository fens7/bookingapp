// Core
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
// Parts
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { orange } from '@mui/material/colors'
import { Container } from "@mui/material";
// Engine
import store from "../../engine/config/store";
import Header from "../components/Header";

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500]
        }
    }
})

export function Layout(){

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Header/>
                <Container>
                    <Outlet/>
                </Container>
            </ThemeProvider>
        </Provider>
    )
}