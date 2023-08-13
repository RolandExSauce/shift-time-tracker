import React, { useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import { Formik, Form, Field } from "formik";
// import { IRegister, RegisterInitialValues } from "./tools/RegisterTools";
// import { useNavigate } from "react-router-dom";

import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { REGISTER_USER_MUTATION } from "./assets/operations";

// import { genProfilId } from "./tools/generated_Profil_Id";
// import { AuthContext } from "../auth/authContext";

const intials = {
  password: "",
  employeeRole: "",
  teamLeaderName: "",
  userDepartment: "",
  firstName: "",
  lastName: "",
};

enum Department {
  IT,
  VK,
  HR,
}

// To String

const Register: React.FC = () => {
  //   const navigate = useNavigate();
  const [errors, setErrors] = useState();
  // const context = useContext(AuthContext);

  const [registerUser] = useMutation(REGISTER_USER_MUTATION, {
    onCompleted: ({createUser}) => {
      console.log(createUser);
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors as any);
    },
  });

  const onSubmit = async (values: any) => {
    // console.log(values);

    // if (values.department === "IT") {
    //   const dep = Department[Department.IT];
    // } else if (values.department === "VK") {
    //   const dep = Department[Department.VK];
    // } else if (values.department === "HR") {
    //   const dep = Department[Department.HR];
    // }

    await registerUser({
      variables: {
        createUserInput: {
          password: values.password,
          employeeRole: values.employeeRole,
          teamLeaderName: values.teamLeaderName,
          userDepartment: values.userDepartment,
          firstName: values.firstName,
          lastName: values.lastName,
        },
      },
    });
    //navigate("/home");
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ color: "#000", margin: "20px " }}>
        Login
      </Typography>

      <Formik
        initialValues={intials}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => {
          const { values, handleChange, setFieldValue } = props;

          return (
            <Form>
              <Stack direction={"column"} spacing={3}>
                {/* <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="personal*"
                    variant="outlined"
                    fullWidth
                    autoComplete="off"
                    value={values.personalNumber}
                    id="personal"
                    name="personalNumber"
                    onChange={handleChange}
                  />
                </Grid> */}
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="password*"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="EmployeeRole*"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    id="employeeRole"
                    name="employeeRole"
                    value={values.employeeRole}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="teamLeader"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    id="teamLeaderName"
                    name="teamLeaderName"
                    value={values.teamLeaderName}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="userDepartment"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    id="userDepartment"
                    name="userDepartment"
                    value={values.userDepartment}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="firstName"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    id="firstName"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="lastName"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    id="lastName"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                  />
                </Grid>
              </Stack>

              <Button
                sx={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginTop: "15px",
                  width: "15rem",
                  height: "60px",
                  borderRadius: "30px",
                }}
                variant="contained"
                type="submit"
              >
                <Stack
                  sx={{
                    gap: "20px",
                  }}
                  direction="row"
                  spacing={2}
                >
                  Absenden
                </Stack>
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Register;
