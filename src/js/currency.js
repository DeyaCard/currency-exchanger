export default class Currency {
  static async currencyEx(amount, currencyTo) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currencyTo}`)
      console.log(response);

      if (!response.ok) {
        throw Error (response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  } 
}

