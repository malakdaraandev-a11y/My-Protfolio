const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            if (navLinks.classList.contains('hidden')) {
                navLinks.classList.remove('hidden');
                navLinks.classList.add('flex', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-white', 'flex-col', 'items-center', 'py-4', 'shadow-lg', 'border-b', 'border-slate-200');
            } else {
                navLinks.classList.add('hidden');
                navLinks.classList.remove('flex', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-white', 'flex-col', 'items-center', 'py-4', 'shadow-lg', 'border-b', 'border-slate-200');
            }
        });

        // Close menu when clicking any nav link on mobile
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    navLinks.classList.add('hidden');
                    navLinks.classList.remove('flex', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-white', 'flex-col', 'items-center', 'py-4', 'shadow-lg', 'border-b', 'border-slate-200');
                }
            });
        });