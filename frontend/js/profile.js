// --- Updated updateProfileIcon function ---
function updateProfileIcon() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    const existingProfile = nav.querySelector('.profile-dropdown');
    if (existingProfile) existingProfile.remove();

    const currentUser = getCurrentUser();
    
    if (currentUser) {
        const profileDropdown = document.createElement('div');
        profileDropdown.className = 'profile-dropdown';
        
        const profileIcon = document.createElement('div');
        profileIcon.className = 'profile-icon';
        profileIcon.textContent = currentUser.name.charAt(0).toUpperCase();
        profileIcon.addEventListener('click', toggleProfileMenu);
        
        const profileMenu = document.createElement('div');
        profileMenu.className = 'profile-menu';
        profileMenu.id = 'profileMenu';
        
        // User Info Header
        const userName = document.createElement('div');
        userName.className = 'profile-menu-item';
        userName.style.fontWeight = '600';
        userName.textContent = currentUser.name;
        profileMenu.appendChild(userName);
        
        // NEW FEATURE: Profile Settings Link
        const settingsLink = document.createElement('a');
        settingsLink.href = '../pages/profile.html'; // Path to your new profile page
        settingsLink.className = 'profile-menu-item';
        settingsLink.textContent = '👤 Profile Settings';
        profileMenu.appendChild(settingsLink);

        // Divider
        const hr = document.createElement('hr');
        hr.style.margin = '4px 0';
        profileMenu.appendChild(hr);
        
        const logoutLink = document.createElement('a');
        logoutLink.href = '#';
        logoutLink.className = 'profile-menu-item logout';
        logoutLink.textContent = 'Logout';
        logoutLink.addEventListener('click', (e) => { e.preventDefault(); logout(); });
        profileMenu.appendChild(logoutLink);
        
        profileDropdown.appendChild(profileIcon);
        profileDropdown.appendChild(profileMenu);
        nav.appendChild(profileDropdown);
    } else {
        const loginLink = document.createElement('a');
        loginLink.href = '../pages/login.html';
        loginLink.textContent = 'Login';
        nav.appendChild(loginLink);
    }
}