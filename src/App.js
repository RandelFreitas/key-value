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
  const [elements, setElements] = useState({});
  const [desc, setDesc] = useState([1]);

  const add = () => {
    setDesc([...desc, 2]);
    console.log(desc);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    elements[descricao.key] = descricao.value;
    console.log(elements);
  };

  const handleChangeKey = (event) => {
    descricao.key = event.target.value;
    setDescricao(descricao);
  }

  const handleChangeValue = (event) => {
    descricao.value = event.target.value;
    setDescricao(descricao);
  }

  return (
    <Container>
      <h1>Descrição</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        {desc.map((item, index) => (
          <div key={index}>
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
        ))}
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          onClick={() => add()}
        >
          +
        </Button>
        <Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit"
        >
          Salvar
        </Button>
      </form>
    </Container>
  );
}

export default App;
