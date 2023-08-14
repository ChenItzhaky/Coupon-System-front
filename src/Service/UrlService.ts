class UrlService{
    private baseUrl = "http://localhost:8080/";
    public authUrl = this.baseUrl + "api/auth/";
    public adminUrl = this.baseUrl + "api/admin";
    public customerUrl = this.baseUrl + "api/customer";
    public companyUrl = this.baseUrl + "api/company";
    public loginUrl =this.baseUrl + "api/auth/login"
}

const urlService = new UrlService();
export default urlService;