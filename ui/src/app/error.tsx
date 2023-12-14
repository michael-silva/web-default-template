'use client'

import * as React from 'react'
import { Typography, Box, Container, Button } from '@mui/material'

export default function Error({
  error,
  reset,
}: {
  error: string
  reset: () => null
}) {
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
