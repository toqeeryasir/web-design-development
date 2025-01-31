document.addEventListener("DOMContentLoaded", function () {
  const postButton = document.getElementById("postButton");
  const jobSeekerForm = document.getElementById("jobSeekerForm");
  const employerForm = document.getElementById("employerForm");

  postButton.addEventListener("click", function () {
    const userRole = prompt(
      "Are you a Job Seeker or an Employer? (Type 'Job Seeker' or 'Employer')"
    );

    if (userRole === "Job Seeker") {
      jobSeekerForm.classList.remove("hidden");
      employerForm.classList.add("hidden");
    } else if (userRole === "Employer") {
      employerForm.classList.remove("hidden");
      jobSeekerForm.classList.add("hidden");
    } else {
      alert("Invalid input. Please type 'Job Seeker' or 'Employer'.");
    }
  });
});
