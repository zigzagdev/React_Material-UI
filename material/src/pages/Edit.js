import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const style = {
  minWidth: 16,
  lineHeight: 3,
  borderRadius: 8,
  border: "none",
  padding: "0 16px",
  color: "red",
  background: "black",
};

const style2 = {
  minWidth: 16,
  lineHeight: 3,
  borderRadius: 8,
  border: "none",
  padding: "0 16px",
  color: "#fff",
  background: "#639",
};

export default function Edit() {
  const [note, setNote] = useState([]);
  const history = useHistory();

  useEffect(() => {
    /** URLパラメータから取得したId */
    const id = new URLSearchParams(history.location.search).get("id");

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setNote(data));
  }, []);

  return (
    <p key={note.id}>
      {note.title}
      <Container>
        <Grid container spacing={6}>
          <Grid item md={12}>
            <Paper key={note.title}>
              <Button style={style2} variant="contained" color="primary">
                Jump
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </p>
  );
}

//個別(idを含んだ)ごとのpathを含んだページへの遷移はpropsでの引き渡しが多くなるのだろうか・・・・(課題点として残しておく)
