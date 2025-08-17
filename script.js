document.getElementById("employee-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const position = document.getElementById("position").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const mobile = document.getElementById("mobile").value;
  const website = document.getElementById("website").value;

  const qrData = `
الاسم: ${name}
المنصب: ${position}
البريد الإلكتروني: ${email}
الهاتف: ${phone}
الجوال: ${mobile}
الموقع الإلكتروني: ${website}
  `;

  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), {
    text: qrData,
    width: 100,
    height: 100
  });

  document.getElementById("card-details").innerHTML = `
    <p><strong>الاسم:</strong> ${name}</p>
    <p><strong>المنصب:</strong> ${position}</p>
    <p><strong>البريد الإلكتروني:</strong> ${email}</p>
    <p><strong>الهاتف:</strong> ${phone}</p>
    <p><strong>الجوال:</strong> ${mobile}</p>
    <p><strong>الموقع الإلكتروني:</strong> ${website}</p>
  `;
});
