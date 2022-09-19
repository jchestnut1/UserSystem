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

function isValid(user){

    let valid =true;
    if(user.email =="" || user.password=="" || user.name==""){
        valid=false;
        alert("Please enter an email");
    }
    return valid;
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

    if(isValid(aUser)){
        saveUser(aUser);
        $("input").val("");
    }
}

function init(){
    $("#btnSafe").on("click", register);
    $("h1").on("click",function(){
        $("nav").hide();
});
    $(".form-container").hide();
    $("#btnShow").on("click",function(){
        $(".form-container").slideDown(1500);
    })
    $("#btnClose").on("click",function(){
        $(".form-container").slideUp(1000);
    })
}

window.onload=init;