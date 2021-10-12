import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Box, Container, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Card } from "@material-ui/core";

const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginLeft: 7,
  paddingTop: 25,
  cursor: "pointer",
};

const style2 = {
  textAlign: "center",
  marginLeft: 20,
  marginRight: 20,
  width: "18rem",
  height: "18rem",
  marginTop: 40,
  display: "flex",
  flexFlow: "column",
  justifyContent: "space-between",
};

const style3 = {
  lineHeight: 3,
  color: "#fff",
  background: "#639",
  display: "block",
  margin: "0 auto 40px",
};

const style4 = {
  marginTop: 20,
  color: "red",
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
    <Box style={style}>
      {notes.map((note) => (
        <Grid>
          <Card style={style2}>
            {/*<TestButton onClick={(value) => console.log(value)}>*/}
            {/*  {note.title}*/}
            {/*</TestButton>*/}
            <Typography style={style4}>{note.title}</Typography>
            <Button
              style={style3}
              onClick={() => history.push(`/edit?id=${note.id}`)}
            >
              Jump
            </Button>
          </Card>
        </Grid>
      ))}
    </Box>
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
