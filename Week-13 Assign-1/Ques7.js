function generateOTP() {
  // Generate a random number between 1000 and 9999
  const otp = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

  console.log(Math.random() * 100);
  return otp;
}

// Generate and display a random OTP
const otp = generateOTP();
console.log("Generated OTP:", otp);
