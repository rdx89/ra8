function md5(input) {
  var md5Hash = CryptoJS.MD5(input);
  return md5Hash.toString();
}

function checkPassword() {
  var password = document.getElementById("password").value;
  var encryptedPassword = md5(password);

  // Compare the encrypted password with the correct encrypted password
  if (encryptedPassword === "054308e7f4e4a4d8f0ed3ff31c53dce2") {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("content").style.display = "block";
    return false; // Prevent form submission
  } else {
    alert("Invalid password!");
    return false;
  }
}
