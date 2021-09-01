import React from "react";
import {
  ImageList,
  ImageListItem,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  imageList: {
    width: "100%",
    height: 450,
  },
  text: {
    width: "50%",
    marginBottom: "5px",
    backgroundColor: "white",
  },
  grid: {
    alignItems: "center",
    justify: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function GiphyDisplay(props) {
  const { gifs, searchWord, loading, handleChange, handleClick } = props;
  const classes = useStyles();

  return (
    <Grid container direction="row">
      <Grid item xs={3} />
      <Grid item xs={6}>
        <Grid className={classes.grid} direction="column" container>
          <Grid item>
            <TextField
              className={classes.text}
              id="outlined-basic"
              label="Search"
              variant="outlined"
              onChange={handleChange}
              value={searchWord}
            />
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<SearchIcon />}
              onClick={handleClick}
            >
              Search
            </Button>
          </Grid>
          <ImageList rowHeight={160} className={classes.imageList} cols={2}>
            {!loading &&
              gifs &&
              gifs.map((gif) => (
                <ImageListItem key={gif.id} cols={1}>
                  <img src={gif.images.original.url} alt={gif.username} />
                </ImageListItem>
              ))}
          </ImageList>
        </Grid>
      </Grid>
      <Grid item xs={3} />
    </Grid>
  );
}

export default GiphyDisplay;
