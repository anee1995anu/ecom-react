import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import "./SignUp.css"

const Signup = () => {

const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required("please enter firstname").min(5, "Firstname should contain minm 5 letters"),
    lastName: yup.string().required("please enter lastname"),
    email: yup.string().required("please enter email"),
    number: yup.number().required("please enter number").positive().integer().test('leng', "Number should be 10 digits", (value)=>String(value).length===10),
    password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "password should contain one capital letter one small letter and one number"),
    confirmPassword: yup.string().required().oneOf([yup.ref("password"),null], "confirm password should match password"),
    photo: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
  });

const signUpFormSubmitHandle=(values)=>{
  console.log("values.......>",values)
}



  return (

<Container>
  <Row>
    <Col md={4}  className='d-flex'>

    <Formik
    validationSchema={schema}
    onSubmit={signUpFormSubmitHandle}
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      password: '',
      confirmPassword: '',
      photo: null,
      terms: false,
    }}
  >
    {({ handleSubmit, handleChange, values, touched, errors }) => (
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationFormik101"
            className="position-relative"
          >
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              isInValid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
          </Form.Group>
          </Row>
          <Row>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationFormik102"
            className="position-relative"
          >
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              isInValid={!!errors.lastName}
            />

            <Form.Control.Feedback tooltip type='invalid'>{errors.lastName}</Form.Control.Feedback>
          </Form.Group>
          </Row>
          <Row>
          <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
            <Form.Label>email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="email"
                aria-describedby="inputGroupPrepend"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.email}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik103"
            className="position-relative"
          >
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Number"
              name="number"
              value={values.number}
              onChange={handleChange}
              isInvalid={!!errors.number}
            />

            <Form.Control.Feedback type="invalid" tooltip>
              {errors.number}
            </Form.Control.Feedback>
          </Form.Group>
          </Row>
          <Row>
          <Form.Group
            as={Col}
            md="3"
            controlId="validationFormik104"
            className="position-relative"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          </Row>
          <Row>
          <Form.Group
            as={Col}
            md="3"
            controlId="validationFormik105"
            className="position-relative"
          >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              isInvalid={!!errors.confirmPassword}
            />

            <Form.Control.Feedback type="invalid" tooltip>
              {errors.confirmPassword}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="position-relative mb-3">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            type="file"
            required
            name="photo"
            onChange={handleChange}
            isInvalid={!!errors.photo}
          />
          <Form.Control.Feedback type="invalid" tooltip>
            {errors.photo}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="position-relative mb-3">
          <Form.Check
            required
            name="terms"
            label="Agree to terms and conditions"
            onChange={handleChange}
            isInvalid={!!errors.terms}
            feedback={errors.terms}
            feedbackType="invalid"
            id="validationFormik106"
            feedbackTooltip
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    )}
  </Formik>

    </Col>
  </Row>

</Container>


    
  )
}

export default Signup