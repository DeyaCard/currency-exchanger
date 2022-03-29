export default class Currency {
  static async currencyEx(amount, currencyTo) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currencyTo}`)
      
      if (!response.ok) {
        throw Error (response.statusText);
      }
      const jsonData = await response.json();
      return jsonData;
    } catch(error) {
      return error.message;
    }
  } 
}

