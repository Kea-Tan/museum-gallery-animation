// Optional: Add interactivity or dynamic gallery features
document.querySelectorAll('.painting').forEach((painting, index) => {
    painting.addEventListener('click', () => {
        alert(You clicked on Artwork ${index + 1});
    });
});
