import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {Box, Container} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import {Card} from "@material-ui/core";


const style ={
  display: 'flex',
  flexWrap:'wrap',
  alignItems: 'center',
  justifyContent:'space-between',
  width:'100',
  marginLeft: 7,
  borderRadius: '5px',
  padding:'25px',
  cursor:'pointer',

}


const style2 = {
  textAlign: 'center',
  alignItems: 'center',
  flexWrap:'wrap',
  color: 'red',
  font:40,
  display: 'flex',
  marginLeft:7,
  width: '18rem',
  height: '18rem',

}


const style3 = {
  minWidth: 16,
  lineHeight: 3,
  borderRadius: 8,
  border: "none",
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
    <Box style={style}>
      {notes.map((note) => (
            <Grid>
                <Card style={style2}>
                  {/*<TestButton onClick={(value) => console.log(value)}>*/}
                  {/*  {note.title}*/}
                  {/*</TestButton>*/}
                  {note.title}
                  <Button
                    style={style3}
                    variant="contained"
                    color="primary"
                    onClick={() => history.push(`/edit?id=${note.id}`)}
                  >
                    Jump
                  </Button>
                </Card>
            </Grid >
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

