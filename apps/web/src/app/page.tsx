export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="text-[length:var(--text-xl)] font-bold mb-4 tracking-tight">
            Fair pay starts here.
          </h1>
          <p className="text-[length:var(--text-m)] max-w-2xl opacity-70 mb-10 leading-relaxed">
            You can use this open platform for developers, designers, employees & employers to track your time, prove your legitimacy, get fairly paid and sync hours to hackatime.
          </p>

          <div className="glass-panel rounded-2xl p-8 w-full max-w-md border border-content/10 hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-[length:var(--text-l)] font-semibold mb-2">
              Track Your Progress Here
            </h2>

            <p className="text-[length:var(--text-s)] opacty-70 mb-6">
              Connect your Hackatime account to get started.
            </p>

            <button className="w-full bg-buttons text-button-text py-3 rounded-xl font-medium opacity-100 hover:opacity-80 active:opacity-60 transition-opacity shadow-sm shadow-buttons/10">
                Connect Hackatime
            </button>
          </div>
        </div>
    );
}