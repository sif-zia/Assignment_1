// (() => {
//   "use strict";

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   const forms = document.querySelectorAll(".needs-validation");

//   // Loop over them and prevent submission
//   Array.from(forms).forEach((form) => {
//     form.addEventListener(
//       "submit",
//       (event) => {
//         if (!form.checkValidity()) {
//           event.preventDefault();
//           event.stopPropagation();
//         }

//         form.classList.add("was-validated");
//       },
//       false
//     );
//   });
// })();

let job = 0;
let certificate = 0;

$("document").ready(function () {
  $("#addJob").click(function () {
    job++;
    $("#jobs").append(
      '<div class="row g-3 px-3 pb-3 my-3 border border-secondary border-1"> <div class="col-6 form-floating"> <input type="text" class="form-control validation15 alphabets" placeholder="Job Title" id="jobtitle' +
        job +
        '" required /> <label for="jobtitle' +
        job +
        '" class="form-label ms-2">Job Title</label> </div> <div class="col-6 form-floating"> <input type="text" class="form-control validation16 required" placeholder="Company Name" id="companyname' +
        job +
        '" required /><label for="companyname' +
        job +
        '" class="form-label ms-2">Company Name</label></div><div class="col-6 form-floating"><input type="date" class="form-control validation17 date" id="startdate' +
        job +
        '" required /><label for="startdate' +
        job +
        '" class="form-label ms-2">Start Date</label> </div><div class="col-6 form-floating"><input type="date" id="enddate' +
        job +
        '" class="form-control validation18 date" required /><label for="enddate' +
        job +
        '" class="form-label ms-2">End Date</label></div></div>'
    );
  });

  $("#removeJob").click(function () {
    if (job == 0) return;
    $("#jobs").children().last().remove();
    job--;
  });

  $("#addSkill").click(function () {
    if ($("#skill-input").val()) {
      $("#skillsList").append("<li>" + $("#skill-input").val() + "</li>");
      $("#skill-input").val("");
    } else $("#skill-input").addClass("is-invalid");
  });

  $("#addCertificate").click(function () {
    certificate++;
    $("#certificates").append(
      '<div class="row g-3 px-3 pb-3 my-3 border border-secondary border-1"><div class="col-6 form-floating"> <input type="text" class="form-control validation19 required" placeholder="Certificate Name" id="certificateName' +
        certificate +
        '" required /> <label for="certificateName' +
        certificate +
        '" class="form-label ms-2">Certificate Name</label> </div> <div class="col-6 form-floating"> <input type="text" class="form-control validation20 alphabets" placeholder="Awarded By" id="awardedBy' +
        certificate +
        '" required /><label for="awardedBy' +
        certificate +
        '" class="form-label ms-2" >Awarded By</label> </div> </div>'
    );
  });

  $("#removeCertificate").click(function () {
    if (certificate == 0) return;
    $("#certificates").children().last().remove();
    certificate--;
  });

  let data = JSON.parse(localStorage.getItem("data"));
  if (data == null) {
    data = [];
    localStorage.setItem("data", JSON.stringify(data));
  }

  $("form").submit(function (e) {
    e.preventDefault();

    //regex
    let alphabets = /^[A-Za-z ]+$/;
    let phoneNo = /^(\+92\s?\d{3}\s?\d{7}|\+92\d{7}|03\d{2}\s?\d{7}|03\d{9})$/;
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let no = /^[0-9]+$/;

    $(".checkBox").each(function () {
      if ($(this).prop("checked") == false) {
        $(this).addClass("is-invalid");
        $(this).removeClass("is-valid");
        $(this).focus();
      } else {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
      }
    });

    $(".required").each(function () {
      if (!$(this).val()) {
        $(this).addClass("is-invalid");
        $(this).removeClass("is-valid");
        $(this).focus();
      } else {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
      }
    });

    $(".alphabets").each(function () {
      if (!alphabets.test($(this).val())) {
        $(this).addClass("is-invalid");
        $(this).removeClass("is-valid");
        $(this).focus();
      } else {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
      }
    });

    $(".phoneNo").each(function () {
      if (!phoneNo.test($(this).val())) {
        $(this).addClass("is-invalid");
        $(this).removeClass("is-valid");
        $(this).focus();
      } else {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
      }
    });

    $(".email").each(function () {
      if (!email.test($(this).val())) {
        $(this).addClass("is-invalid");
        $(this).removeClass("is-valid");
        $(this).focus();
      } else {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
      }
    });

    $(".select").each(function () {
      if (!$(this).val()) {
        $(this).addClass("is-invalid");
        $(this).removeClass("is-valid");
        $(this).focus();
      } else {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
      }
    });

    $(".no").each(function () {
      if (!no.test($(this).val())) {
        $(this).addClass("is-invalid");
        $(this).removeClass("is-valid");
        $(this).focus();
      } else {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
      }
    });

    $(".file").each(function () {
      //console.log(this.files[0]?.name);
      if (!$(this).val()) {
        $(this).addClass("is-invalid");
        $(this).removeClass("is-valid");
        $(this).focus();
      } else {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
      }
    });

    const currentYear = new Date().getFullYear();
    $(".year").each(function () {
      if ($(this).val() < 1900 || $(this).val() > currentYear + 10) {
        $(this).addClass("is-invalid");
        $(this).removeClass("is-valid");
        $(this).focus();
      } else {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
      }
    });

    $(".radio").each(function () {
      if (!$('input[name="' + $(this).attr("name") + '"]:checked').val()) {
        $(this).addClass("is-invalid");
        $(this).removeClass("is-valid");
        $(this).focus();
      } else {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
      }
    });

    // const currentDate = new Date().toISOString().split('T')[0];
    $(".date").each(function () {
      if ($(this).val() < "1900-01-01" || $(this).val() > "2049-12-31") {
        $(this).addClass("is-invalid");
        $(this).removeClass("is-valid");
        $(this).focus();
      } else {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
      }
    });

    $(".time").each(function () {
      //console.log($(this).val());
      if (!$(this).val()) {
        $(this).addClass("is-invalid");
        $(this).removeClass("is-valid");
        $(this).focus();
      } else {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
      }
    });

    $(".notRequired").each(function () {
      if (!$(this).val() && $(this).hasClass("is-invalid")) {
        $(this).removeClass("is-invalid");
      }
      if ($(this).val() && !$(this).hasClass("is-invalid")) {
        $(this).addClass("is-valid");
      }
    });

    let valid = true;
    $("input").each(function () {
      if ($(this).hasClass("is-invalid")) {
        valid = false;
      }
    });

    if (valid) {
      let skills = [];
      $("#skillsList li").each(function () {
        skills.push($(this).text());
      });

      let certificates = [];
      for (let i = 1; i <= certificate; i++) {
        certificates.push({
          certificateName: $("#certificateName" + i).val(),
          awardedBy: $("#awardedBy" + i).val(),
        });
      }

      let jobs = [];
      for (let i = 1; i <= job; i++) {
        jobs.push({
          jobTitle: $("#jobtitle" + i).val(),
          companyName: $("#companyname" + i).val(),
          startDate: $("#startdate" + i).val(),
          endDate: $("#enddate" + i).val(),
        });
      }

      let relocate = $("#can-relocate").prop("checked");

      let info = {
        firstName: $("#validation01").val(),
        lastName: $("#validation02").val(),
        phoneNo: $("#validation03").val(),
        email: $("#validation04").val(),
        street: $("#validation05").val(),
        city: $("#validation06").val(),
        province: $("#validation07").val(),
        zip: $("#validation08").val(),
        resume: $("#validation09").val(),
        coverLetter: $("#validation10").val(),
        education: $("#validation11").val(),
        school: $("#validation12").val(),
        field: $("#validation13").val(),
        year: $("#validation14").val(),
        jobs: jobs,
        skills: skills,
        certificates: certificates,
        relocate: relocate,
        availableAfter: $("#jobstartdate").val(),
        scheduleStart: $("#jobstarttime").val(),
        scheduleEnd: $("#jobendtime").val(),
        referenceName: $("#validation24").val(),
        referencePhone: $("#validation25").val(),
        referenceEmail: $("#validation26").val(),
        workReason: $("#validation27").val(),
      };

      data.push(info);
      localStorage.setItem("data", JSON.stringify(data));
      console.log(data);

      window.location.replace("/data.html");

      $("#form").submit();
    } else {
      return false;
    }
  });

  $("#table").hide();

  setTimeout(() => {
    $("#done-icon").prop("src", "img/icons8-done-48.png");
  }, 1000);

  console.log(data);
  data.forEach(function (value, index) {
    $("#name-row").append(
      '<div class="col-2 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        (index + 1) +
        '</p> </div> <div class="col-5 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        value?.firstName +
        '</p> </div> <div class="col-5 border-bottom border-start border-end border-1 border-black text-center" > <p class="text-wrap">' +
        value?.lastName +
        "</p>"
    );

    $("#contact-row").append(
      '<div class="col-2 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        (index + 1) +
        '</p> </div> <div class="col-5 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        value?.phoneNo +
        '</p> </div> <div class="col-5 border-bottom border-start border-end border-1 border-black text-center" > <p class="text-wrap">' +
        value?.email.slice(0, value?.email.indexOf('@')) +' '+value?.email.slice(value?.email.indexOf('@'))+
        "</p>"
    );

    $("#address-row").append(
      '<div class="col-1 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        (index + 1) +
        '</p> </div> <div class="col-8 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        value?.street +
        ", " +
        value?.city +
        ", " +
        value?.province +
        ", " +
        value?.zip +
        '</p> </div> <div class="col-3 border-bottom border-start border-end border-1 border-black text-center" > <p class="text-wrap">' +
        value?.resume.slice(value?.resume.lastIndexOf("\\") + 1) +
        "</p>"
    );

    $("#education-row").append(
      '<div class="col-1 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        (index + 1) +
        '</p> </div> <div class="col-3 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        value?.education +
        '</p> </div> <div class="col-3 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        value?.school +
        '</p> </div> <div class="col-3 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        value?.field +
        '</p> </div> <div class="col-2 border-bottom border-start border-end border-1 border-black text-center" > <p class="text-wrap">' +
        value?.year +
        "</p>"
    );

    value?.jobs.forEach(function (job) {
      $("#jobs-row").append(
        '<div class="col-1 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
          (index + 1) +
          '</p> </div> <div class="col-3 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
          job?.jobTitle +
          '</p> </div> <div class="col-4 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
          job?.companyName +
          '</p> </div> <div class="col-2 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
          job?.startDate +
          '</p> </div> <div class="col-2 border-bottom border-start border-end border-1 border-black text-center" > <p class="text-wrap">' +
          job?.endDate +
          "</p>"
      );
    });

    let skillStr = "";
    value?.skills.forEach(function (skill, idx) {
      if (idx == value?.skills.length - 1) skillStr += skill;
      else skillStr += skill + ", ";
    });

    $("#skills-row").append(
      '<div class="col-1 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        (index + 1) +
        '</p> </div> <div class="col-11 border-bottom border-start border-end border-1 border-black text-center" > <p class="text-wrap">' +
        skillStr +
        "</p>"
    );

    value?.certificates.forEach(function (certificate) {
      $("#certificates-row").append(
        '<div class="col-2 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
          (index + 1) +
          '</p> </div> <div class="col-5 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
          certificate?.certificateName +
          '</p> </div> <div class="col-5 border-bottom border-start border-end border-1 border-black text-center" > <p class="text-wrap">' +
          certificate?.awardedBy +
          "</p>"
      );
    });

    $("#availability-row").append(
      '<div class="col-1 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        (index + 1) +
        '</p> </div> <div class="col-3 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        (value?.relocate ? "Yes" : "No") +
        '</p> </div> <div class="col-4 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        value?.availableAfter +
        '</p> </div> <div class="col-2 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        value?.scheduleStart +
        '</p> </div> <div class="col-2 border-bottom border-start border-end border-1 border-black text-center" > <p class="text-wrap">' +
        value?.scheduleEnd +
        "</p>"
    );

    $("#reference-row").append(
      '<div class="col-1 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        (index + 1) +
        '</p> </div> <div class="col-3 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        value?.referenceName +
        '</p> </div> <div class="col-4 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        value?.referencePhone +
        '</p> </div> <div class="col-4 border-bottom border-start border-end border-1 border-black text-center" > <p class="text-wrap">' +
        value?.referenceEmail.slice(0, value?.referenceEmail.indexOf("@"))+' '+value?.referenceEmail.slice(value?.referenceEmail.indexOf("@")) +
        "</p>"
    );

    $("#question-row").append(
      '<div class="col-1 border-bottom border-start border-1 border-black text-center" > <p class="text-wrap">' +
        (index + 1) +
        '</p> </div> <div class="col-11 border-bottom border-start border-end border-1 border-black text-center" > <p class="text-wrap">' +
        value?.workReason +
        "</p>"
    );
  });

  $("#show-data-btn").click(function () {
    if (data.length == 0) {
      alert("No data available");
      return;
    }
    if ($("#table").hasClass("d-none")) {
      $("#table").removeClass("d-none");
      $("#table").slideDown(1000, function () {
        $("#show-data-btn").html("Hide Data");
      });
    } else {
      $("#table").slideUp(1000, function () {
        $("#table").addClass("d-none");
        $("#show-data-btn").html("View Data");
      });
    }
  });
});
