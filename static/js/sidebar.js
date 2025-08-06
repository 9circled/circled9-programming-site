document.addEventListener('DOMContentLoaded', () => {
	const savedState = localStorage.getItem('sidebarState');

	// == 復元 ==
	if (savedState){
		const openItemIds = JSON.parse(savedState);

		openItemIds.forEach(id => {
			const itemToOpen = document.getElementById(id);
			if (itemToOpen){
				itemToOpen.open = true;
			}
		});
	}

	// == 記憶 == 
	const allSidebarItems = document.querySelectorAll('details[id^="sidebar-"]');

	allSidebarItems.forEach(item => {
		item.addEventListener('toggle', () => {
			const currentlyOpenIds = [];

			allSidebarItems.forEach(i => {
				if (i.open) {
					currentlyOpenIds.push(i.id);
				}
			});

			localStorage.setItem('sidebarState', JSON.stringify(currentlyOpenIds));
		});
	});
});