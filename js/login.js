function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function signup(){
  var arr = document.getElementsByClassName('form-input');
  var tendangnhap= arr[0].value;
  var matkhau= arr[1].value;
  var nhaplaimatkhau= arr[2].value;
  if(tendangnhap == "" || matkhau == "" || nhaplaimatkhau == "" ){
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
  }

  if(matkhau != nhaplaimatkhau){
      alert("Vui lòng nhập đúng mật khẩu");
      return;
  }
  if(tendangnhap.length <5){
      alert("Tên đăng nhập phải từ 6-20 kí tự");
      return;
  }
  confirm('Đăng kí thành công!')
}

function contact(){
  var arr = document.getElementsByClassName('contact-form-input');
  var name= arr[0].value;
  var email= arr[1].value;
  var mess= arr[2].value;
  if(name == "" || email == "" || mess == "" ){
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
  }
}