document.getElementById("employee-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const id = document.getElementById("id").value;
  const department = document.getElementById("department").value;
  const position = document.getElementById("position").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const mobile = document.getElementById("mobile").value;

  const qrData = `
الاسم: ${name}
الرقم الوظيفي: ${id}
القسم: ${department}
المنصب: ${position}
البريد الإلكتروني: ${email}
الهاتف: ${phone}
الجوال: ${mobile}
  `;

  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), {
    text: qrData,
    width: 200,
    height: 200
  });
});