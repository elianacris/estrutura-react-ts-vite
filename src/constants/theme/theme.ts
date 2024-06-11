import { createTheme } from "@mui/material/styles";

// aqui você pode personalizar o tema do seu projeto, cores, fontes, estilo bordas, o css do body, etc
//lembre-se quando for personalizar a font do projeto, você deve importar a fonte no index.html
//exemplo: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap">
//e depois você pode chamar a fonte no tema do projeto
// foi utilizado a fonte Roboto do Google Fonts

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#ffff",
          fontFamily: "Roboto, Arial", // use a fonte Roboto aqui
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#ff3333",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial", // use a fonte Roboto aqui
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
