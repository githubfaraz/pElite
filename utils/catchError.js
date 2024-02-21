
  export const catchError = (error) => {
    let errorMsg = '';
    if (error.response) {
      errorMsg = error.response?.data?.message;
  
      if (error.response?.data?.error) {
        errorMsg = error.response.data.error.message;
      }
    } else {
      //something else happened
      errorMsg = error.message;
    }
  
    return errorMsg;
  };