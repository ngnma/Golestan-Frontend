import * as React from "react";
import { TextField, Button } from "@mui/material";
import DashboardLayout from "../../../components/DashboardLayout";
import { Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

export default function I5_NewStudent() {
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
  const [course, setCours] = React.useState("");
  const [courses, setCourses] = React.useState([]);
  const [formData2, setFormData2] = React.useState({
    first_name: "",
    last_name: "",
    id: "",
    national_code: "",
    faculty: "",
    major: "",
    passed_courses: [],
    peroffesor: "",
    entry_year: "",
  });

  //functions
  const handleAddCourse = () => {
    setCourses((prevCourses) => [...prevCourses, course]);
    setCours("");
    setFormData2((prevFormData) => ({
      ...prevFormData,
      passed_courses: courses,
    }));
  };
  const handleChangeCourse = (event) => {
    const { value } = event.target;
    setCours(value);
  };
  const handleFacultyChange = (event, value) => {
    setFaculty(value);
    setFormData2((prevFormData) => ({
      ...prevFormData,
      faculty: value,
    }));
  };

  const handleMajorChange = (event, value) => {
    setMajor(value);
    setFormData2((prevFormData) => ({
      ...prevFormData,
      major: value,
    }));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData2((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // APT for pass data to back should be call here

    // Reset the form after submission
    setFormData2({
      first_name: "",
      last_name: "",
      id: "",
      national_code: "",
      faculty: "",
      major: "",
      passed_courses: [],
      peroffesor: "",
      entry_year: "",
    });
  };

  //test
  React.useEffect(() => {
    // console.log(formData2);
    console.log(formData2);
  }, [formData2]);

  return (
    <DashboardLayout>
      <p>ثبت / تغییر اطلاعات دانشجو جدید</p>
      <div style={{ marginTop: "20px" }}>
        <form onSubmit={handleSubmit}>
          <Grid container direction="row-reverse" gap="20px 300px" justifyContent="space-evenly"  >

            <Grid item >
              <label>نام</label>
              <br />
              <TextField
                style={{ width: "300px" }}
                name="first_name"
                value={formData2.first_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item >
              <labell>نام خانوادگی</labell>
              <br />
              <TextField
                style={{ width: "300px" }}
                name="last_name"
                value={formData2.last_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item >
              <label>شماوه دانشجویی</label>
              <br />
              <TextField
                style={{ width: "300px" }}
                name="id"
                value={formData2.id}
                onChange={handleChange}
              />
            </Grid>
            <Grid item >
              <label>کد ملی</label>
              <br />
              <TextField
                style={{ width: "300px" }}
                name="national_code"
                value={formData2.national_code}
                onChange={handleChange}
              />
            </Grid>
            <Grid item >
              <label>دروس پاس کرده </label>
              <br />
              <Button
                style={{ width: "40px", height: "70%", marginRight: "5px" }}
                variant="contained"
                color="primary"
                onClick={handleAddCourse}
              >
                افزودن
              </Button>
              <TextField style={{ width: "230px" }} name="" value={course} onChange={handleChangeCourse} />
            </Grid>

            <Grid item >
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
                value={formData2.entry_year}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <label>استاد راهنما</label>
              <br />
              <TextField
                style={{ width: "300px" }}
                name="peroffesor"
                value={formData2.peroffesor}
                onChange={handleChange}
              />
            </Grid>
            <Grid item style={{ width: "300px" }}></Grid>
          </Grid>

          <Button style={{ marginTop: "40px", height: "50px", width: "300px" }} type="submit" variant="contained" color="primary">
            ثبت جدید/تغییر اطلاعات
          </Button>
        </form>
      </div>

    </DashboardLayout>
  );
}
