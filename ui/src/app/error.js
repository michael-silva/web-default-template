'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

export default function Error({ error, reset }) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Ops, something went wrong!
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Sorry about this, please try again in some minutes or contact us.
        </Typography>
        {/* <Alert severity="error">{error}</Alert> */}
        <Button onClick={reset}>Try again</Button>
      </Container>
    </Box>
  )
}
