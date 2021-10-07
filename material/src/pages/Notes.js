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

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <p key={note.id}>
          {note.title}
          <Container>
            <Grid container spacing={6}>
              <Grid item md={12}>
                <Paper key={note.title}>
                  <Button
                    style={style2}
                    variant="contained"
                    color="primary"
                    onClick={() => history.push(`/edit?id=${1}`)}
                  >
                    Jump
                  </Button>
                  {/** このログを見ると「テスト」の文字列が返ってくる */}
                  <TestButton onClick={(value) => console.log(value)}>
                    テスト
                  </TestButton>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </p>
      ))}
    </div>
  );
}

/** コールバック説明用のテストボタン */
const TestButton = (props) => {
  return (
    <Button props={() => props.onClick("テスト")}>{props.children}</Button>
  );
};

// Map機能自体叩かれている要素の数だけreturn内の処理が行われる為、書く工数の反映として勝手にforeachが回っているイメージとなる。
// また、useEffect()でfetchを利用してAPIを取得する時は基本的に全体(Index)での利用を取得とすることが多い。
