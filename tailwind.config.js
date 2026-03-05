/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                card: 'var(--card-bg)',
                accent: {
                    primary: '#3b82f6', // Blue 500
                    secondary: '#8b5cf6', // Violet 500
                    tertiary: '#06b6d4', // Cyan 500
                },
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'slow-drift': 'drift 20s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                drift: {
                    '0%': { transform: 'translate(0, 0)' },
                    '100%': { transform: 'translate(100px, 100px)' },
                }
            }
        },
    },
    plugins: [],
}
