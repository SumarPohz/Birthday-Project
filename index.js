const addInviteButton = document.getElementById('addInvite');
    const inviteContainer = document.getElementById('inviteContainer');

    addInviteButton.addEventListener('click', () => {
        const newInviteEntry = document.createElement('div');
        newInviteEntry.className = 'invite-entry';
        newInviteEntry.innerHTML = `
            <input type="text" name="Invited Number[]" placeholder="Friend's Number">
            <select name="friendPlan[]">
                <option value="Banana(Rs.577)">Banana(Rs.577)</option>
                <option value="Pomegranates(Rs.3300)">Pomegranates(Rs.3300)</option>
                <option value="Kiwi Investment">Kiwi(Rs.7800)</option>
                <option value="Dragon Fruit(Rs.14500)">Dragon Fruit(Rs.14500)</option>
            </select>
        `;
        inviteContainer.appendChild(newInviteEntry);
    });