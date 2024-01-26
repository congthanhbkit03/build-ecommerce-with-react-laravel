class AppURL {
  static BaseURL = "http://127.0.0.1:8000/api";
  static PostContact = this.BaseURL + "/postcontact";
  static SiteInfo = this.BaseURL + "/siteinfo";
  static AllCategoryDetails = this.BaseURL + "/allcats";
  static ProductListByRemark(Remark) {
    console.log(Remark);
    return this.BaseURL + "/productlistbyremark/" + Remark;
  }

  static ProductListByCategory(category) {
    return this.BaseURL + "/productlistbycategory/" + category;
  }

  static ProductListBySubCategory(category, subcategory) {
    return (
      this.BaseURL + "/productlistbysubcategory/" + category + "/" + subcategory
    );
  }
  //slider
  static AllSlider = this.BaseURL + "/allsliders";
  //auth uri
  static UserLogin = this.BaseURL + "/login";
  static UserData = this.BaseURL + "/user";
  static UserRegister = this.BaseURL + "/register";
  static UserForgetPassword = this.BaseURL + "/forgetpassword";

  static ProductDetails(code) {
    return this.BaseURL + "/productdetails/" + code;
  }
}

export default AppURL;
