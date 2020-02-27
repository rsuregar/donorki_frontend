import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import BottomNav from '../layouts/bottomnav'
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import Links from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import { Autocomplete } from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';
import { kabupaten, golda, register } from '../utils/constant';
import { fetchData, registration } from '../utils/api';
import { useHistory } from 'react-router-dom'
// import Footer from '../layouts/footer'

const gender = [
    {
      value: '1',
      label: 'Laki-laki',
    },
    {
      value: '2',
      label: 'Perempuan',
    },
  ];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop:20
  },
  stickToTop: {
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 3
  },
  textField: {
    marginTop:20
  }
}));


export default function Akun() {
  const classes = useStyles();
  let history = useHistory()
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [blood_data, setBloodData] = React.useState([]);
  const loading = open && options.length === 0;

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [ref_gender_id, setGender] = React.useState('');
  const [ref_golda_id, setGolda] = React.useState('');
  const [ref_kabupaten_id, setKabupaten ] = React.useState();


  const handleSubmit = async event => {
    event.preventDefault()
    let dt ={ name : name, email : email, password : password, confirm_password : password, phone : 62+phone, ref_golda_id : ref_golda_id, ref_gender_id: ref_gender_id, ref_kabupaten_id: ref_kabupaten_id, role_id:3 }
    // console.log(dt)


    await registration(register, dt, (data) => {
      console.log(data)
      history.push('/')
    }, (e) => {
        console.log(e.response)
    })
    // postData
    // let response = ''
    // if(id)
    //     response = await getData(urlAdmSetApp + '/' + id, dt)
    // else 
    //     response = await getData(urlAdmAddApp, dt)
    // history.push('/administrator/apps')

}


  const getGolda = async () => {
    await fetchData(golda, (data) =>{
      var darah = data.map((a,i) =>{
        return ({
          value: a.id,
          label: a.name
        })
      })
      setBloodData(darah)
    // console.log(data)
    }, (e)=>{
      console.log(e.response)
    })    
 }

  React.useEffect(() =>{
    getGolda()
  }, []);

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
    
      const response = await fetch(kabupaten);
      const countries = await response.json();

      if (active) {
        setOptions(countries)
      }
    })();

    return () => {
      active = false;
    };

    }, [loading]);

    React.useEffect(() => {
        if (!open) {
        setOptions([]);
        }
    }, [open]);

  return (
    <Fragment>
    <Container maxWidth="sm" className={classes.stickToTop} style={{backgroundColor:'#fff', textAlign:'center'}}>
      <Typography variant="subtitle1" color="inherit">
      <Box component="span">
            <img  style={{marginTop:10, marginBottom:'-10px'}} height="50px"
                alt="Logo"
                src="/static/logo.png"
              />
            </Box>
      </Typography>
      </Container>
    <Container maxWidth="sm" style={{backgroundColor:'#fff', height: '100vh', paddingLeft:0, paddingRight:0}}>
    <Grid style={{padding:30, marginTop:0}}>
    <Typography gutterBottom variant="h6">Bergabung bersama Donorki 
    <Divider /></Typography>
    
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-full-width"
          label="Nama"
          required 
          value={name}
          onChange = {(e) => setName(e.target.value)}
          placeholder="Nama lengkap"
        //   helperText="Full width!"
          fullWidth
          margin="dense"
        //   InputLabelProps={{
        //     shrink: true,
        //   }}
          variant="outlined"
          color="primary"
          className={classes.textField}
        />
        <TextField
          label="Email"
          required 
          id="email"
          value={email}
          onChange = {(e) => setEmail(e.target.value)}
          
          placeholder="Email"
          type="email"
        //   helperText="Nama lengkap Anda"
          margin="dense"
          fullWidth
          variant="outlined"
          className={classes.textField}
        />
        <TextField
          label="Kata Sandi"
          required 
          id="password"
          
          type="password"
          value={password}
          onChange = {(e) => setPassword(e.target.value)}
          placeholder="Password min. 8 karakter"
        //   helperText="Nama lengkap Anda"
          margin="dense"
          fullWidth
          variant="outlined"
          className={classes.textField}
        />
        <TextField
          label="Telepon / WhatsApp"
          required 
          id="whatsapp"
          
          value={phone}
          onChange = {(e) => setPhone(e.target.value)}
          placeholder="Lebih baik menggunakan nomor WhatsApp"
        //   helperText="Nama lengkap Anda"
          margin="dense"
          fullWidth
          type="number"
          variant="outlined"
          InputProps={{
            startAdornment: <InputAdornment position="start">62</InputAdornment>,
          }}
          className={classes.textField}
        />
        <Autocomplete
            id="asynchronous-demo"
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            // value={ref_kabupaten_id}
            getOptionSelected={(option, value) => option.id === value.id}
            getOptionLabel={option =>  option.name}
            options={options}
            loading={loading}
            onChange={(event, value) =>  setKabupaten(value !== null ? value.id:null)}
            autoHighlight
            renderInput={params => (
                <TextField
                {...params}
                label="Kota/Kabupaten Domisili"
                variant="outlined"
                margin="dense"
                fullWidth
                required
                className={classes.textField}
                InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                    <React.Fragment>
                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                        {params.InputProps.endAdornment}
                    </React.Fragment>
                    ),
                }}
                />
            )}
            />
            
            <TextField
              select
              label="Jenis Kelamin"
              value={ref_gender_id}
              onChange={(e) => setGender(e.target.value)}
              margin="dense"
              placeholder="Jenis Kelamin"
              // helperText="Please select your currency"
              variant="outlined"
              fullWidth
              required
              className={classes.textField}
            >
              {gender.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Golongan Darah"
              value={ref_golda_id}
              onChange={(e) => setGolda(e.target.value)}
              margin="dense"
              placeholder="Golongan darah"
              // helperText="Please select your currency"
              variant="outlined"
              fullWidth
              required
              className={classes.textField}
            >
              {blood_data.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            
            <Button fullWidth type="submit" onClick={handleSubmit} color="secondary"
            className={classes.textField}
            disabled = {!(name && password && phone && email && ref_kabupaten_id && ref_golda_id && ref_gender_id)}
            variant="contained"
            >Daftar sekarang</Button>
      </div>
    </form>

    </Grid>
    </Container>
    <BottomNav/>
    </Fragment>
  );
}