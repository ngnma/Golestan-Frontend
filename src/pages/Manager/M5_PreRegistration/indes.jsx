import { Grid, TextField, Button, Typography } from '@mui/material';
import React from 'react';
import Mainlayout from '../../../components/MainLayout';
import './styles.scss';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DashboardLayout from '../../../components/DashboardLayout';
import M5_CourseItem from '../../../components/Manager/M5_CourseCard';

export default function M5_PreRegistration() {
    //mock data
    const mock = [
        { name: "آمار و احتمال مهندسی", count: 12 },
        { name: "برنامه نویسی پیشرفته", count: 23 },
        { name: "شبکه های کامپیوتری", count: 1 },
    ];
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <DashboardLayout>
            <Grid container>
                <Grid
                    container
                    item
                    justifyContent="space-between"
                    alignContent="center"
                >
                    <Grid item>
                        <Button variant="text">افزودن درس +</Button>
                    </Grid>
                    <Grid item>
                        {/* text should be handled by redux */}
                        <Typography>دروس پیش ثبت نامی پاییز?</Typography>
                    </Grid>
                </Grid>
                <hr
                    style={{
                        width: "100%",
                        borderWidth: 0,
                        borderTop: "1px solid black",
                    }}
                />

                <Grid item container direction="column" >
                    <Grid item container justifyContent="space-between"  >
                        <Grid item><Button variant='contained' style={{ width: "200px", height: "50px" }}>excel</Button></Grid>

                        <Grid item>
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}>
                                <ToggleButton value="true">بیشترین تعداد ثبت نامی</ToggleButton>
                                <ToggleButton value="false">کمترین تعداد ثبت نامی</ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>

                        <Grid item>
                            <TextField placeholder='جستجو بر اساس نام درس' style={{ width: "300px" }}></TextField></Grid>
                    </Grid>
                    <Grid item container justifyContent='center'>
                        {mock.map((item, index) => (
                            <M5_CourseItem
                                name={item.name}
                                count={item.count}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </DashboardLayout>
    );
}

