import * as React from "react";
import { TextField, Button } from "@mui/material";
import DashboardLayout from "../../../components/IT/DashboardLayout";
import { Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

export default function I10_NewFaculty() {
  //MOCKDATA
  const majors = ["majors 1", "majors 2", "majors 3", "majors 4"];
  //variables
  const [majorsSelected, setMajorsSelected] = React.useState([]);
  const [formData, setformData] = React.useState({
    faculty: "",
    major: [],
  });

  //functions
  const handleMajorsSelected = (event, values) => {
    setMajorsSelected(values);
    setformData((prevFormData) => ({
      ...prevFormData,
      major: majorsSelected,
    }));
  };
  const handleChange = (event) => {
    const { value } = event.target;
    setformData((prevFormData) => ({
      ...prevFormData,
      faculty: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // APT for pass data to back should be call here

    // Reset the form after submission
    setformData({
      faculty: "",
      major: [],
    });
  };

  return (
    <DashboardLayout>
      <p>ایجاد دانشکده</p>

      <div
        style={{
          boxShadow: "0 2px 4px rgba(0, 0.4, 0, 0.4)",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid
            container
            direction="column"
            gap="20px 300px"
            justifyContent="space-evenly"
          >
            <Grid item>
              <label>نام</label>
              <br />
              <TextField
                style={{ width: "300px" }}
                name="first_name"
                value={formData.faculty}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <label> رشته ها</label>
              <br />
              <div style={{ margin: "0 auto", width: "300px" }}>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={majors}
                  getOptionLabel={(option) => option}
                  filterSelectedOptions
                  onChange={handleMajorsSelected}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            </Grid>
          </Grid>

          <Button
            style={{ marginTop: "40px", height: "50px", width: "300px" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            ثبت
          </Button>
        </form>
      </div>
    </DashboardLayout>
  );
}
