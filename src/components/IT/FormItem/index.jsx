import React from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { Box, Button } from "@mui/material";

export default function FormItem(props) {
  const handleClick = () => {
    props.onClick(props.index);
  };
  const handleRemove = () => {
    // Call the removeItem callback function with the item's index
    props.removeItem(props.index);
};
//   const handleClick2 =()=>{
//     props.onClick
//   }
  return (
    <Grid
      item
      sx={{ width: "400px", backgroundColor: "#B2CDFE", borderRadius: "10px" }}
    >
      <Box >
        <Grid container alignItems="center" width={"400px"}>
          <Grid item xs={4}>
            <Button varient="text" onClick={handleRemove}>حذف</Button>
          </Grid>
          <Grid item xs={4}>
            <Button onClick={handleClick}>{props.name}</Button>
          </Grid>
          <Grid item xs={4}>
            <Avatar alt={props.name} src={props.image} />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
