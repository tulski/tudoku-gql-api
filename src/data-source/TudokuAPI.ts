import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";

class TudokuAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.token);
  }

  async signIn(input: any) {
    try {
      return await this.put("/auth", input);
    } catch (err) {
      console.error(err);
    }
  }

  async signUp(input: any) {
    try {
      return await this.post("/auth", input);
    } catch (err) {
      console.error(err);
    }
  }
}

export default TudokuAPI;
