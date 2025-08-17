document.getElementById("toggle-lang").addEventListener("click", function () {
  const isArabic = document.documentElement.lang === "ar";
  document.documentElement.lang = isArabic ? "en" : "ar";
  document.documentElement.dir = isArabic ? "ltr" : "rtl";

  document.getElementById("title").textContent = isArabic ? "Employee Card Generator" : "مولد بطاقات الموظفين";
  document.getElementById("name").placeholder = isArabic ? "Full Name" : "الاسم الكامل";
  document.getElementById("id").placeholder = isArabic ? "Employee ID" : "الرقم الوظيفي";
  document.getElementById("department").options[0].text = isArabic ? "Select Department" : "اختر القسم";
  document.getElementById("custom-department").placeholder = isArabic ? "Enter new department name" : "أدخل اسم القسم الجديد";
  document.getElementById("position").placeholder = isArabic ? "Position" : "المنصب";
  document.getElementById("email").placeholder = isArabic ? "Email" : "البريد الإلكتروني";
  document.getElementById("phone").placeholder = isArabic ? "Phone" : "رقم الهاتف الأرضي";
  document.getElementById("mobile").placeholder = isArabic ? "Mobile" : "رقم الجوال";
  document.getElementById("create-btn").textContent = isArabic ? "Create Card" : "إنشاء البطاقة";
  this.textContent = isArabic ? "العربية" : "English";
});
