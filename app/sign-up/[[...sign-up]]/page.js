import { AppBar, Button, Container, Toolbar, Typography, Box } from "@mui/material";
import Link from "next/link";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage(){
    return (
        <Container maxWidth = "100vw">
            <AppBar position = "static">
                <Toolbar>
                    <Typography
                    variant = 'h6'
                    sx = {{
                        flexGrow: 1,
                    }}
                    >
                        Flash
                    </Typography>
                    <Button color = "inherit">
                        <Link href = "/sign-in" passHref>
                            Log in
                        </Link>
                    </Button>
                    <Button color = "inherit">
                        <Link href = "/sign-up" passHref>
                            Sign up
                        </Link>
                    </Button>
                </Toolbar>    
            </AppBar> 
            <Box
            display = "flex"
            flexDirection = "column"
            alignItems = "center"
            justifyContent = "center"
            >
                <Typography variant = 'h4'>
                    Sign Up
                </Typography>
                <SignUp />
            </Box>
        </Container>
    )
}