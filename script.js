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

document.getElementById("toggle-dark").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

let isArabic = true;
document.getElementById("toggle-language").addEventListener("click", function () {
  isArabic = !isArabic;
  document.documentElement.lang = isArabic ? "ar" : "en";
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.getElementById("title").textContent = isArabic ? "بطاقة الموظف" : "Employee Card";
  document.getElementById("name").placeholder = isArabic ? "الاسم الكامل" : "Full Name";
  document.getElementById("id").placeholder = isArabic ? "الرقم الوظيفي" : "Employee ID";
  document.getElementById("department").options[0].text = isArabic ? "اختر القسم" : "Select Department";
  document.getElementById("custom-department").placeholder = isArabic ? "أدخل اسم القسم الجديد" : "Enter new department";
  document.getElementById("position").placeholder = isArabic ? "المنصب" : "Position";
  document.getElementById("email").placeholder = isArabic ? "البريد الإلكتروني" : "Email";
  document.getElementById("phone").placeholder = isArabic ? "رقم الهاتف الأرضي" : "Phone";
  document.getElementById("mobile").placeholder = isArabic ? "رقم الجوال" : "Mobile";
  document.getElementById("generate").textContent = isArabic ? "إنشاء البطاقة" : "Generate Card";
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

  const logo = document.createElement("img");
  logo.src = "logo.jpg";
  logo.className = "logo";
  card.appendChild(logo);

  const details = document.createElement("div");
  details.className = "card-details";
  details.innerHTML = `
    <p><strong>${isArabic ? "الاسم" : "Name"}:</strong> ${name}</p>
    <p><strong>${isArabic ? "الرقم الوظيفي" : "Employee ID"}:</strong> ${id}</p>
    <p><strong>${isArabic ? "القسم" : "Department"}:</strong> ${department}</p>
    <p><strong>${isArabic ? "المنصب" : "Position"}:</strong> ${position}</p>
    <p><strong>${isArabic ? "البريد الإلكتروني" : "Email"}:</strong> ${email}</p>
    <p><strong>${isArabic ? "الهاتف" : "Phone"}:</strong> ${phone}</p>
    <p><strong>${isArabic ? "الجوال" : "Mobile"}:</strong> ${mobile}</p>
    <p style="color: green; font-size: 12px;">${isArabic ? "يرجى عدم طباعة هذه البطاقة إلا عند الحاجة للمحافظة على البيئة" : "Please print this card only when necessary to protect the environment"}</p>
  `;
  card.appendChild(details);

  const qrDiv = document.createElement("div");
  qrDiv.className = "qrcode";
  card.appendChild(qrDiv);

  new QRCode(qrDiv, {
    text: qrData,
    width: 100,
    height: 100
  });

  const printBtn = document.createElement("button");
  printBtn.className = "print-button";
  printBtn.textContent = isArabic ? "طباعة البطاقة" : "Print Card";
  printBtn.onclick = () => window.print();
  card.appendChild(printBtn);

  const exportBtn = document.createElement("button");
  exportBtn.className = "export-button";
  exportBtn.textContent = isArabic ? "تصدير كصورة" : "Export as Image";
  exportBtn.onclick = () => {
    html2canvas(card).then(canvas => {
      const link = document.createElement("a");
      link.download = "employee_card.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };
  card.appendChild(exportBtn);

  document.getElementById("cards-container").appendChild(card);
  document.getElementById("employee-form").reset();
  document.getElementById("custom-department").style.display = "none";
});
