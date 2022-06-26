import { Form, FormikProvider, useFormik } from "formik";
import React from "react";
import classNames from "classnames";
import { IRegister } from "./types";
import { RegisterSchema } from "./validataion";
import CropperDialog from "../../common/CropperDialog";

const RegisterPage: React.FC = () => {
  const initialValues: IRegister = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    photo: "",
    confirmPassword: "",
    password: "",
  };
  const onHandleSubmit = async (values: IRegister) => {
    console.log("Send server form", values);
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onHandleSubmit,
    validationSchema: RegisterSchema
  });

  //Деструктуризація
  const { errors, touched, handleSubmit, handleChange } = formik;

  return (
    <div className="row">
      <div className="offset-md-3 col-md-6">
        <h1 className="text-center">Створити новий аканут</h1>
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit}>
            
            <CropperDialog />

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Електронна пошта
              </label>
              <input
                type="email"
                className={classNames("form-control",
                    {"is-invalid": touched.email && errors.email},
                    {"is-valid": touched.email && !errors.email}
                )}
                name="email"
                id="email"
                onChange={handleChange}
              />
              {touched.email && errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <button type="submit" className="btn btn-primary">
              Реєструватися
            </button>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default RegisterPage;
