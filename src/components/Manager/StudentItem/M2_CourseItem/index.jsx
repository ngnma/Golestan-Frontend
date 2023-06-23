import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "./style.scss";

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';



export default function M2_CourseItem() {
    // return (
    //     <div style={{ width: '300px' }}>
    //         <Box sx={{ flexGrow: 1 }}>
    //             <Grid container spacing={2} direction="row" alignItems="center">
    //                 <Button variant="contained">ویرایش</Button>
    //                 <Button variant="outlined">حذف</Button>
    //                 <p>ترم پاییز ۱۴۰۱</p>
    //             </Grid>
    //         </Box>
    //     </div>
    // );
    return (
        <div style={{ width: '500px' ,backgroundColor:"silver"}}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} direction="row" >
              <Grid item xs={2} className="M2_btn">
                <Button variant="contained">ویرایش</Button>
              </Grid>
              <Grid item xs={2} className="M2_btn">
                <Button variant="outlined">حذف</Button>
              </Grid>
              <Grid item xs={8}>
                <p>ترم پاییز ۱۴۰۱</p>
              </Grid>
            </Grid>
          </Box>
        </div>
      );
};

