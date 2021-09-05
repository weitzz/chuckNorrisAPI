import {useState,useEffect} from 'react'
import axios from 'axios'
import { Container, makeStyles, Typography } from "@material-ui/core"
import Button from '@material-ui/core/Button';
import Chuck from '../../assets/chuck.png'
const useStyles = makeStyles({
  root:{
    backgroundColor:'#ececec',
    display: "flex",
    flexDirection:'column' ,
    justifyContent:'center',
    alignItems:'center',
    marginTop:'50px',
    borderRadius:'3px',
    boxShadow: '0 3px 5px 2px rgba(163, 163, 163, 0.3)',
    height: '800px'
  },
  container:{
    marginTop:'30px',
    width: '100%'
  }
})


const Main = () => {
  const [state,setState] = useState([])

  async function loadJokes(){
    try {
      const response = await axios.get(`http://api.icndb.com/jokes/random`)
      setState(response.data.value.joke)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    loadJokes()
  },[])

  const classes = useStyles()
  return (
    <Container maxWidth="md" className={classes.root}>
        <Typography variant='h2' align='center'>Piadas do Chuck Norris</Typography>
          <img src={Chuck} alt="Chuck norris" width='300'/>
        <Button variant="contained"
         color="primary"
         onClick={loadJokes}>Gerar piadas</Button>
        <div className={classes.container}>
          <Typography variant='h6' align='center'>{state}</Typography>
        </div>
    </Container>
  )
}

export default Main
