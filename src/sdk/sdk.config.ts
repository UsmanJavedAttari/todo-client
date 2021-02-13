export class SdkConfig {
    private static ApiUrl = 'http://localhost:3000';

    static get ApiPath() {
        return this.ApiUrl;
    }
}
