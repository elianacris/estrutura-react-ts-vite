import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AppRoutes } from "./routes/Routes";
import theme from "./constants/theme/theme";
// App é o Pai de todo o projeto, vão estar o theme e o CssBaseline que são componentes do Material UI
//para ajusar na responsividade e no design do projeto, as rotas também vão ser chamadas aqui
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <AppRoutes />
      </Box>
    </ThemeProvider>
  );
}

export default App;
