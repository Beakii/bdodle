export default async function HomePage() {
    return (
        <main className="flex flex-col lg:min-w-[50vw] mx-auto">
            <h1 className="text-4xl font-bold text-center pb-2">Privacy Policy</h1>
            <p className="text-wrap pb-5">BDOdle utilizes
                <a className="text-blue-500 hover:text-blue-400" href="https://vercel.com/docs/analytics"> Vercel Analytics </a>
                and
                <a className="text-blue-500 hover:text-blue-400" href="https://vercel.com/docs/speed-insights"> SpeedInsights </a>
                to gather information about the device and location the webpage is being accesed from for the sole purpose of optimizing the webpage and to improve the user experience.
            </p>
            <p className="text-wrap pb-5">
                BDOdle does not store any personal identifying information about the user. The only information stored is critical to the functionality of the webpage.
                This information is not stored by BDOdle, it is stored on the user's device, through the browsers local storage.
            </p>
        </main>
    );
}


