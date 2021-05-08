import React, {useState} from 'react'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";


  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "70vh",
    },
    avatar: {
      margin: theme.spacing(1),
      height:"80px",
      width:"80px",
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%", 
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    },
    root: {
     
        marginTop: "120px",
        position: "flex",
        background: "linear-gradient(45deg, #bbdefb 10%, #fafafa 90%)"
            
    },
    paperContainer: {
        zIndex: -1,
        height: "100vh",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60)`,
        
      },
   
  }));

export const LoginUser =(props)=>{
    const [userState, setUserState]= useState({
        login:'',
        password:''
    })
    const classes = useStyles();

    const handleSubmit =(e)=>{
         e.preventDefault()
         props.handleSubmit(userState)
    }

    const handleChange =(e)=>{
        let newUser ={...userState}
        newUser[e.target.name]=e.target.value
        setUserState(newUser)
    }

    return (
        <Paper className={classes.paperContainer}>
        <Container component="main" maxWidth="xs" className={classes.root} >
      <CssBaseline />
      <div className={classes.paper}>
    
        <Avatar className={classes.avatar} src="https://i.pinimg.com/originals/ee/0e/26/ee0e261dc56d4b03b93ccc29b6c94237.png">

        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email or username"
            label="Email Address or Username"
            name="login"
            autoComplete="username"
            autoFocus
            value={userState.login}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={userState.password} 
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container alignItems="center" justify="center">
            <Grid item >
              <Link href="/users/register" variant="body2" >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
       </Paper>
    
    )
}