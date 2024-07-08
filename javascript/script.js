function enableEdit(button) {
    const input = button.previousElementSibling;
    input.disabled = false;
    input.focus();
}

function saveChanges() {
    const inputs = document.querySelectorAll('.profile input');
    inputs.forEach(input => {
        input.disabled = true;
    });
    alert('Changes saved successfully!');
}

function cancelChanges() {
    const inputs = document.querySelectorAll('.profile input');
    inputs.forEach(input => {
        input.disabled = true;
    });
    alert('Changes canceled!');
}

function editProfilePicture() {
    const profilePicture = document.querySelector('.profile-picture img');
    const newImageUrl = prompt('Enter the new profile picture URL:');
    if (newImageUrl) {
        profilePicture.src = newImageUrl;
    }
}