function User(fname,lname,email,password,age,gender,address,phone,color,payment){

    this.fname=fname;
    this.lname=lname
    this.email=email;
    this.password=password;
    this.age=age;
    this.gender=gender;
    this.address=address;
    this.phone=phone;
    this.color=color;
    this.payment=payment;
}

function register(){
    let txtFname = $("#userFname").val();
    let txtLname = $("#userLname").val();
    let txtEmail = $("#userEmail").val();
    let txtPassword = $("#userPassword").val();
    let txtAge = $("#userAge").val();
    let txtGender = $("#userGender").val();
    let txtAddress = $("#userAddress").val();
    let txtPhone = $("#userPhone").val();
    let selColor = $("#userColor").val();
    let selPayment= $("#userPayment").val();

    let aUser = new User(txtFname,txtLname,txtEmail,txtPassword,txtAge,txtGender,txtAddress,txtPhone,selColor,selPayment);

    console.log(aUser);
    $("input").val("");
}

function init(){

}