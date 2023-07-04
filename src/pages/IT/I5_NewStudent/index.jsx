import * as React from "react";
import { TextField, Button } from "@mui/material";
import DashboardLayout from "../../../components/IT/DashboardLayout";
import { Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";

export default function I5_NewStudent() {
  //MOCKDATA
  const facultys = ["daneshkade1", "daneshkade2", "daneshkade3", "daneshkade4"];
  const majors = ["majors1", "majors2", "majors3", "majors4"];
  //variables
  const [faculty, setFaculty] = React.useState("");
  const [major, setMajor] = React.useState("");
  const [course, setCours] = React.useState("");
  const [courses, setCourses] = React.useState([]);
  const I2toI5Add = useSelector((state) => state.I2TOI5NEW);
  const I2TOI5NAME = useSelector((state) => state.I2TOI5NAME);
  const I2TOI5LASTNAME = useSelector((state) => state.I2TOI5LASTNAME);
  const I2TOI5ID = useSelector((state) => state.I2TOI5ID);
  const I2TOI5NATIONALCODE = useSelector((state) => state.I2TOI5NATIONALCODE);
  const I2TOI5FACULTY = useSelector((state) => state.I2TOI5FACULTY);
  const I2TOI5MAJOR = useSelector((state) => state.I2TOI5MAJOR);
  const I2TOI5PROFFESOR = useSelector((state) => state.I2TOI5PROFFESOR);
  const I2TOI5ENTRYYEAR = useSelector((state) => state.I2TOI5ENTRYYEAR);
  const [formData, setformData] = React.useState({
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

  //init for edit
  React.useEffect(() => {
    if (I2toI5Add === false) {
      setformData((prevFormData) => ({
        ...prevFormData,
        first_name: I2TOI5NAME,
        last_name:I2TOI5LASTNAME,
        id:I2TOI5ID,
        national_code:I2TOI5NATIONALCODE,
        faculty:I2TOI5FACULTY,
        major:I2TOI5MAJOR,
        peroffesor:I2TOI5PROFFESOR,
        entry_year:I2TOI5ENTRYYEAR,
      }));
    }
  }, []);

  //functions
  const handleAddCourse = () => {
    setCourses((prevCourses) => [...prevCourses, course]);
    setCours("");
    setformData((prevFormData) => ({
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
    setformData((prevFormData) => ({
      ...prevFormData,
      faculty: value,
    }));
  };

  const handleMajorChange = (event, value) => {
    setMajor(value);
    setformData((prevFormData) => ({
      ...prevFormData,
      major: value,
    }));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // APT for pass data to back should be call here

    // Reset the form after submission
    setformData({
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

  return (
    <DashboardLayout>
      <p>ثبت / تغییر اطلاعات دانشجو جدید</p>
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
                style={{ width: "300px", textAlign: "center" }}
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
              <label>شماوه دانشجویی</label>
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
              <TextField
                style={{ width: "230px" }}
                name=""
                value={course}
                onChange={handleChangeCourse}
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
              <label>استاد راهنما</label>
              <br />
              <TextField
                style={{ width: "300px" }}
                name="peroffesor"
                value={formData.peroffesor}
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
