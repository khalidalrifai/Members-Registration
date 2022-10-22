import { useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import { object, date, string, mixed, bool } from "yup";
import AEALogo from "./logo.svg";
import styles from "./Forms.module.css";

function RegisterForm() {
    const [submit, setSubmit] = useState(false);
    const schema = object().shape({
        firstName: string()
            .min(2, "Name Must Be More Than 1 Letter")
            .max(50, "Name Must Be Less Than 50 Letter")
            .required("Please Enter Your Name"),
        lastName: string()
            .min(2, "Surname Must Be More Than 1 Letter")
            .max(20, "Surname Must Be Less Than 20 Letter")
            .required("Please Enter Your Surname"),
        email: string()
            .email("Invalid Email")
            .required("Please Enter Your Email Address"),
        linkedin: string().url("Invalid Link").nullable().required(),
        birthday: date()
            .required("Please Enter Your Birthday Date")
            .min("1920-01-01", "Your Birthdate Date Must Not Be Before 1920-01-01")
            .max("2006-01-01", "Your Birthdate Date Must Not Be After 2006-01-01"),
        team: string().required(),
        role: string().required(),
        file: mixed()
            .test("fileSize", "The file is too large", (value) => {
                if (!value.length) return true; // attachment is optional
                return value[0].size <= 2000;
            })
            .required(),
        terms: bool().required().oneOf([true], "Terms Must Be Accepted"),
    });

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                linkedin: "",
                birthday: "",
                team: "",
                role: "",
                file: null,
                terms: false,
            }}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values); // same shape as initial values
            }}
        >
            {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
              }) => (
                <Container
                    fluid
                    className={`${styles.ShadowContainer} d-flex justify-content-center align-items-center px-5`}
                >
                    <Form noValidate className={styles.form} onSubmit={handleSubmit}>
                        <img
                            src={AEALogo}
                            className="logoAEA"
                            alt="AEA"
                            width="auto"
                            height="180"
                        />
                        <h3 className="p2"> This form is strictly for AEA Members </h3>
                        <h3 className="p1"> Kindly fill up the following form </h3>

                        <Row>
                            <Form.Group as={Col} controlId="lastname">
                                <Form.Label>LinkedIn Profile</Form.Label>
                                <Form.Control
                                    className="mb-4"
                                    controlId="linkedin"
                                    type="link"
                                    name="linkedin"
                                    text="linkedin"
                                    placeholder="https://www.linkedin.com/in/linkedinyourname"
                                    value={values.linkedin}
                                    onChange={handleChange}
                                    isValid={touched.linkedin && !errors.linkedin}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-4">
                            <Form.Group as={Col} controlId="formGridTeam">
                                <Form.Label>Team</Form.Label>
                                <Form.Select
                                    placeholder="Choose"
                                    defaultValue="Choose Your Team"
                                >
                                    <option>Choose You Team</option>
                                    <option>Project Team</option>
                                    <option>Company Team</option>
                                    <option>DevOps Team</option>
                                    <option>Event Team</option>
                                    <option>Content Team</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                controlId="formGridRole"
                                placeholder="Choose Your Role"
                            >
                                <Form.Label>Role</Form.Label>
                                <Form.Select defaultValue="Choose Your Role">
                                    <option>Choose You Role</option>
                                    <option>Team Leader</option>
                                    <option>Team Member</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        {/*<Form.Group className="position-relative mb-3">*/}
                        <Form.Group className="mb-4">
                            <Form.Label>Personal Photo</Form.Label>
                            <Form.Control
                                type="file"
                                required
                                name="personalphoto"
                                onChange={handleChange}
                                isValid={touched.file && !errors.file}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.file}{" "}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button
                            className={`${styles["submit-btn"]} w-50`}
                            onClick={() => setSubmit(true)}
                            enabled={submit && isValid}
                            variant="primary"
                            type="submit"
                        >
                            {" "}
                            Submit
                        </Button>
                    </Form>
                </Container>
            )}
        </Formik>
    );
}

export default RegisterForm;