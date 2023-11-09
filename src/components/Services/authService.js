export const userLogin = async (formData) => {
  try {
    const response = await commonRequest(
      "POST", `${BASE_URL}/login&#39`, formData)
    return response
  }
  catch (error) {
    return console.error();
  }
}