class UrlService{
    private baseUrl = "http://localhost:8080";
    public authUrl = this.baseUrl + "/api/auth/";
    public adminUrl = this.baseUrl + "/api/admin";
    public customerUrl = this.baseUrl + "/api/customer";
    public registerUrl = this.baseUrl +"/api/auth/register"
    public companyUrl = this.baseUrl + "/api/company";
    public couponUrl = this.baseUrl + "/api/public/coupon";
    public couponByPriseUrl = this.baseUrl + "/api/public/coupon/price";
    public couponByCategoryUrl = this.baseUrl + "/api/public/coupon/category";
    public addCustomerUrl = this.baseUrl + "/api/public/customer/add";
    public loginUrl =this.baseUrl + "/api/auth/login";
    public adminCustomerUrl =this.adminUrl+ "/customer";
    public adminCompanyUrl =this.adminUrl+ "/company";
    public addCompanyUrl =this.baseUrl + "/api/admin/companies/add"
    public companyCouponUrl =this.companyUrl + "/coupons";
    public customerCouponUrl =this.customerUrl + "/coupons";
    public AddCoupon =this.companyCouponUrl + "/add";
    
}  

const urlService = new UrlService();
export default urlService;