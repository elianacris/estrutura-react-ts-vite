// Na pasta de Pages criamos a Home.tsx que vai ser a primeira página a ser chamada no projeto
// você pode criar quantas páginas quiser e chamar elas no Routes.tsx
import { Box, Typography } from '@mui/material';

export const Home = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Typography variant="h1">React Estrutura</Typography>
        </Box>
    );
};