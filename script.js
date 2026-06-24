// Booking Logic
const bookingForm = document.getElementById('bookingForm');
if(bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const date = document.getElementById('checkin').value;
        
        localStorage.setItem('villaBooking', JSON.stringify({name, date}));
        document.getElementById('bookingResult').innerText = `Thank you ${name}! Your stay on ${date} is noted.`;
    });
}