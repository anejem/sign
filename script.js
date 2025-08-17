document.getElementById("department").addEventListener("change", function () {
  const customInput = document.getElementById("custom-department");
  if (this.value === "other") {
    customInput.style.display = "block";
    customInput.required = true;
  } else {
    customInput.style.display = "none";
    customInput.required = false;
  }
});

document.getElementById("employee-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const id = document.getElementById("id").value;
  const departmentSelect = document.getElementById("department");
  const department = departmentSelect.value === "other"
    ? document.getElementById("custom-department").value
    : departmentSelect.value;
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

  const card = document.createElement("div");
  card.className = "card";

  const details = document.createElement("div");
  details.className = "card-details";
  details.innerHTML = `
    <p><strong>الاسم:</strong> ${name}</p>
    <p><strong>الرقم الوظيفي:</strong> ${id}</p>
    <p><strong>القسم:</strong> ${department}</p>
    <p><strong>المنصب:</strong> ${position}</p>
    <p><strong>البريد الإلكتروني:</strong> ${email}</p>
    <p><strong>الهاتف:</strong> ${phone}</p>
    <p><strong>الجوال:</strong> ${mobile}</p>
    <p style="color: green; font-size: 12px;">يرجى عدم طباعة هذه البطاقة إلا عند الحاجة للمحافظة على البيئة</p>
  `;

  const qrDiv = document.createElement("div");
  qrDiv.className = "qrcode";
  card.appendChild(details);
  card.appendChild(qrDiv);

  new QRCode(qrDiv, {
    text: qrData,
    width: 100,
    height: 100
  });

  const printBtn = document.createElement("button");
  printBtn.className = "print-button";
  printBtn.textContent = "طباعة البطاقة";
  printBtn.onclick = () => {
    window.print();
  };

  card.appendChild(printBtn);

  document.getElementById("cards-container").appendChild(card);

  document.getElementById("employee-form").reset();
  document.getElementById("custom-department").style.display = "none";
});

