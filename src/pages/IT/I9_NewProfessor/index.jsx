import * as React from "react";
import { TextField, Button } from "@mui/material";
import DashboardLayout from "../../../components/IT/DashboardLayout";
import { Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";

export default function I9_NewProfessor() {
  //MOCKDATA
  const facultys = [
    "daneshkade 1",
    "daneshkade 2",
    "daneshkade 3",
    "daneshkade 4",
  ];
  const majors = ["majors 1", "majors 2", "majors 3", "majors 4"];
  //variables
  const [faculty, setFaculty] = React.useState("");
  const [major, setMajor] = React.useState("");
  const I3TOI9NEW = useSelector((state) => state.I3TOI9NEW);
  const I3TOI9LASTNAME = useSelector((state) => state.I3TOI9LASTNAME);
  const I3TOI9NAME = useSelector((state) => state.I3TOI9NAME);
  const I3TOI9ID = useSelector((state) => state.I3TOI9ID);
  const I3TOI9FACULTY = useSelector((state) => state.I3TOI9FACULTY);
  const I3TOI9MAJOR = useSelector((state) => state.I3TOI9MAJOR);
  const I3TOI9LEVEL = useSelector((state) => state.I3TOI9LEVEL);
  const I3TOI9ERNTRYYEAR = useSelector((state) => state.I3TOI9ERNTRYYEAR);
  const I3TOI9NATIONALCODE = useSelector((state) => state.I3TOI9NATIONALCODE);

  const [formData, setFormData] = React.useState({
    first_name: "",
    last_name: "",
    id: "",
    national_code: "",
    faculty: "",
    major: "",
    level: "",
    entry_year: "",
  });

  //functions
  React.useEffect(() => {
    if (I3TOI9NEW === false) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        first_name: I3TOI9NAME,
        last_name: I3TOI9LASTNAME,
        id: I3TOI9ID,
        national_code: I3TOI9NATIONALCODE,
        faculty: I3TOI9FACULTY,
        major: I3TOI9MAJOR,
        level: I3TOI9LEVEL,
        entry_year: I3TOI9ERNTRYYEAR,
      }));
    }
  }, []);
  const handleFacultyChange = (event, value) => {
    setFaculty(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      faculty: value,
    }));
  };

  const handleMajorChange = (event, value) => {
    setMajor(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      major: value,
    }));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // APT for pass data to back should be call here

    // Reset the form after submission
    setFormData({
      first_name: "",
      last_name: "",
      id: "",
      national_code: "",
      faculty: "",
      major: "",
      level: "",
      entry_year: "",
    });
  };
  React.useEffect(() => {
    //get mock from back and remove mock data
    console.log(I3TOI9NEW);
  }, []);

  return (
    <DashboardLayout>
      <p>ثبت / تغییر اطلاعات استاد جدید</p>

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
            direction="row-reverse"
            gap="20px 300px"
            justifyContent="space-evenly"
          >
            <Grid item>
              <label>نام</label>
              <br />
              <TextField
                style={{ width: "300px" }}
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <labell>نام خانوادگی</labell>
              <br />
              <TextField
                style={{ width: "300px" }}
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <label>شماره پرسنلی</label>
              <br />
              <TextField
                style={{ width: "300px" }}
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <label>کد ملی</label>
              <br />
              <TextField
                style={{ width: "300px" }}
                name="national_code"
                value={formData.national_code}
                onChange={handleChange}
              />
            </Grid>

            <Grid item>
              <label>رشته</label>
              <br />
              <div style={{ margin: "0 auto", width: "300px" }}>
                <Autocomplete
                  disablePortal
                  options={majors}
                  value={major}
                  onChange={handleMajorChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            </Grid>
            <Grid item>
              <label>دانشکده</label>
              <br />
              <div style={{ margin: "0 auto", width: "300px" }}>
                <Autocomplete
                  disablePortal
                  options={facultys}
                  value={faculty}
                  onChange={handleFacultyChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            </Grid>
            <Grid item>
              <label>سال ورود</label>
              <br />
              <TextField
                style={{ width: "300px" }}
                name="entry_year"
                value={formData.entry_year}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <label>سطح</label>
              <br />
              <TextField
                style={{ width: "300px" }}
                name="level"
                value={formData.level}
                onChange={handleChange}
              />
            </Grid>
            <Grid item style={{ width: "300px" }}></Grid>
          </Grid>

          <Button
            style={{ marginTop: "40px", height: "50px", width: "300px" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            ثبت جدید/تغییر اطلاعات
          </Button>
        </form>
      </div>
    </DashboardLayout>
  );
}
