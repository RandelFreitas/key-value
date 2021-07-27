import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))

function App() {
  const classes = useStyles()
  const [descricao, setDescricao] = useState({});

  //const [key, setKey] = useState('');
  //const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const handleChangeKey = (event) => {
    console.log(event.target.value);
  }

  const handleChangeValue = (event) => {
    console.log(event.target.value);
  }

  return (
    <Container>
      <h1>Descrição</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        <div key={descricao.id}>
          <TextField
            name="firstName"
            label="Descrição"
            value={descricao.key}
            onChange={event => handleChangeKey(event)}
          />
          <TextField
            name="lastName"
            label="Valor"
            value={descricao.value}
            onChange={event => handleChangeValue(event)}
          />
        </div>
        <Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit"
        >Salvar</Button>
      </form>
    </Container>
  );
}

export default App;
