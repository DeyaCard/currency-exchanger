export default class Currency {
  static async currencyEx(currency, amount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/4f3e47e58a612beb18e2981c/latest/USD`)
      if (!response.ok) {
        throw Error (response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  } 
}

