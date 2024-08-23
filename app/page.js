import Image from "next/image";
import getStripe from '@/utils/get-stripe'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Head from "next/head";
import { AppBar, Button, Container, Toolbar, Typography, Box, Grid } from "@mui/material";
export default function Home() {
  return (
    <Container maxWidth = "100vw">
      <Head>
        <title>Flash</title>
          <meta name = "description" content = "Create flaschards from user text"/>  
      </Head>

      <AppBar position = "static">
        <Toolbar>
          <Typography variant = "h6" style = {{flexGrow: 1}}>Flash</Typography>
          <SignedOut>
            <Button color = 'inherit' href = '/sign-in'>Log in</Button>
            <Button color = 'inherit' href = '/sign-up'>Sign up</Button>
          </SignedOut>
        </Toolbar>
      </AppBar>

      <Box sx = {{
        textAlign: 'center',
        my: 4,
      }}>
        <Typography variant = "h2">Welcome to Flash</Typography>
        <Typography variant = "h6">
          {' '}
          The easiest way to make flashcards from user text</Typography>
      <Button variant = "contained" color = "primary" sx = {{mt: 2}} href = "/generate">
        Get Started
      </Button>
      </Box>
      <Box sx = {{my: 6}}>
        <Typography variant = "h4" components = "h2">
          Features
        </Typography>
        <Grid container spacing = {4}>
          <Grid item xs = {12} md = {4}>
            <Typography variant = "h6">
              {' '}
              Easy text input
            </Typography>
            <Typography>
              Simply input your text and let our software do the rest.
              Creating flashcards has never been easier.
            </Typography>
          </Grid>
          <Grid item xs = {12} md = {4}>
            <Typography variant = "h6">Smart flashcards</Typography>
            <Typography>{' '}
              Our AI intelligently breaks down your text into concise flashcards.
              Perfect for studying and revising in a flash.
            </Typography>
          </Grid>
          <Grid item xs = {12} md = {4}>
            <Typography variant = "h6">Easy text input</Typography>
            <Typography>
              {' '}
              Access your flashcards anywhere, from any device, at any time.
              Study on the go with ease. 
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx = {{my: 6, textAlign: 'center'}}>
        <Typography variant = 'h4'>Pricing </Typography>
        <Grid container spacing = {4}>
          <Grid item xs = {12} md = {6}>
            <Box sx = {{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 7,
            }}>
            <Typography variant = "h6" gutterBottom>
              {' '}
              Basic</Typography>
              <Typography variant = "h5" gutterBottom>
                $5
              </Typography>
            <Typography>
              Access to basic flashcards and limited storage.
            </Typography>
            <Button variant = "contained" color = "primary">
              Choose Basic
            </Button>   
            </Box>
          </Grid>
          <Grid item xs = {12} md = {6}>
            <Box sx = {{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 7,
            }}>
            <Typography variant = "h6" gutterBottom>
              {' '}
              Professional</Typography>
              <Typography variant = "h5" gutterBottom>
                $10
              </Typography>
            <Typography>
              Faster flashcard generation along with extra storage facilities.
            </Typography>
            <Button variant = "contained" color = "primary">
              Choose Professional
            </Button>   
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
