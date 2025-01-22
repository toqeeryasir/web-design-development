document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer = document.querySelector('.cards-container');

    for (let i = 1; i <= 15; i++) {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';

        const img = document.createElement('img');
        img.src = `company-logo${i}.png`;
        img.alt = 'Company Logo';

        const title = document.createElement('h3');
        title.textContent = `Job Title ${i}`;

        const description = document.createElement('p');
        description.textContent = `Company ${i} - Location ${i}`;

        const button = document.createElement('button');
        button.textContent = 'Apply Now';

        jobCard.appendChild(img);
        jobCard.appendChild(title);
        jobCard.appendChild(description);
        jobCard.appendChild(button);

        cardsContainer.appendChild(jobCard);
    }
});