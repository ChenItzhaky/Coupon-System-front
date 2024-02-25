

class UrlService{
    private baseUrl = "http://localhost:8080";
    public authUrl = this.baseUrl + "/api/auth/";
    public adminUrl = this.baseUrl + "/api/admin";
    public customerUrl = this.baseUrl + "/api/customer";
    public SingleCustomerUrl = this.baseUrl + "/api/admin/customer";
    public SingleCompanyUrl = this.baseUrl + "/api/admin/company";
    public registerUrl = this.baseUrl +"/api/auth/register"
    public companyUrl = this.baseUrl + "/api/company";
    public couponUrl = this.baseUrl + "/api/public/coupon";
    public couponByPriseUrl = this.baseUrl + "/api/public/coupon/price";
    public couponByCategoryUrl = this.baseUrl + "/api/public/coupon/category";
    public addCustomerUrl = this.baseUrl + "/api/public/customer/add";
    public loginUrl =this.baseUrl + "/api/auth/login";
    public adminCustomerUrl =this.adminUrl+ "/customer";
    public adminCompanyUrl =this.adminUrl+ "/companies";
    public addCompanyUrl =this.baseUrl + "/api/admin/companies/add"
    public companyCouponUrl =this.companyUrl + "/coupons";
    public customerCouponUrl =this.customerUrl + "/coupon";
    public AddCoupon =this.companyCouponUrl + "/add";
    public PurchaseCoupon =this.baseUrl + "/api/customer/purchase";
    public allUsersUrl =this.baseUrl + "/api/admin/user";
    public UpdateCouponUrl=this.baseUrl + "/api/company/coupons";
    
}  

const urlService = new UrlService();
export default urlService;