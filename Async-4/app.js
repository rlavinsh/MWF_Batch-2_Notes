/**
 Company Assignment

Aap ek company ke liye Email Processing System bana rahe hain.

Company chahti hai ki kisi customer ko promotional email bhejne se pehle uska customer score check kiya jaye.

System ko:

Customer ki email receive karni hai.
Randomly 1–100 ke beech customer score generate karna hai.
Agar score 50 ya usse zyada hai:
Email successfully send karni hai.
Promise resolve() hona chahiye.
Agar score 50 se kam hai:
Email send nahi karni.
Promise reject() hona chahiye.
Result ko .then() aur .catch() se handle karna hai.
finally() mein processing complete hone ka message dikhana hai.

Possible Output 1
Processing email: rahul@gmail.com

Customer Score: 78

Email sent successfully to rahul@gmail.com

Email processing completed

Possible Output 2
Processing email: rahul@gmail.com

Customer Score: 32

Email could not be sent to rahul@gmail.com
Reason: Customer score is below 50

Email processing completed
 */

function sendEmail(email) {
  console.log(`Processing email: ${email}`);
  return new Promise((resolve, reject) => {
    const score = Math.floor(Math.random() * 100) + 1;
    console.log(`Customer Score: ${score}`);

    if (score >= 50) {
      resolve(`Email sent successfully to ${email}`);
    } else {
      reject(`Email could not be sent to ${email}
                    Reason: Customer score is below 50`);
    }
  });
}

sendEmail("abc@gmail.com")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Email processing completed");
  });
