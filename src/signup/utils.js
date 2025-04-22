export const validationForm = (formData) => {
  const error = {};
  const exclude = ["skills", "address"];
  for (let key in formData) {
    console.log(key);
    if (!exclude.includes(key) && formData[key] === "") {
      error[key] = "required";
    }
  }
  return error;
};
