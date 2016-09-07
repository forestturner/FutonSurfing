export const FormConstants = {
  UPDATE_FORM: "UPDATE_FORM"
};

export const updateForm = (form, value) => ({
  type: FormConstants.UPDATE_FORM,
  form,
  value
});
