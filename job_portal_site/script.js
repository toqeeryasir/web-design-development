<div class="cards-container">
<script>
  for (let i = 1; i <= 15; i++) {
    document.write(`
      <div class="job-card">
        <img src="company-logo${i}.png" alt="Company Logo" />
        <h3>Job Title ${i}</h3>
        <p>Company ${i} - Location ${i}</p>
        <button>Apply Now</button>
        </div>
        `);
      }
      </script>