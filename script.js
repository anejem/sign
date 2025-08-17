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

  document.getElementById("card-details").innerHTML = `
    <p><strong>الاسم:</strong> ${name}</p>
    <p><strong>الرقم الوظيفي:</strong> ${id}</p>
    <p><strong>القسم:</strong> ${department}</p>
    <p><strong>المنصب:</strong> ${position}</p>
    <p><strong>البريد الإلكتروني:</strong> ${email}</p>
    <p><strong>الهاتف:</strong> ${phone}</p>
    <p><strong>الجوال:</strong> ${mobile}</p>
  `;
});
