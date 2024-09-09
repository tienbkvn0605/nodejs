import ApiBase from "./ApiBase";

class ApiPosts extends ApiBase {
    constructor() {
        super();
        this.path = "posts";
    }

    list(data) {
        return this.httpGet(this.path, data);
        return this.httpPost('products', data);
    }
}

export const apiPosts = new ApiPosts();