export class DataManager {
  async fetchDataOW(url: string): Promise<any> {
    let response = await fetch(url);

    if (response.ok) {
      let json = await response.json();
      return json
    } else {
      return response.status;
    }
  }

}