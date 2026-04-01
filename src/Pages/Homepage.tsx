

function Homepage(){

    return(
        <>
            {/* Parent Container */}
            <div className="h-screen w-screen bg-gray-100">

                {/* Header Container*/}
                <div className="h-16 w-full">
                    
                    {/* Header */}
                    <div className="h-full w-full">
                        <div className="h-full w-1/3 flex justify-center items-center">Pokemon</div>
                    </div>

                </div>

                {/* Pokemons Container */}
                <div className="border h-auto w-full flex flex-col items-center">

                    {/* Pokemons */}
                    {Array.from({length: 1}).map((_, index) => {
                        return <div key={index} className={`border h-auto w-10/12 ${false ? `pb-16` : ``} rounded`}>
                                    {/* Pokemon Tile */}
                                    <div className="border-2 border-red-600 h-56 bg-white shadow-lg">

                                        <div className="border h-18 w-full flex justify-center">
                                            <div className="border h-10 w-10 flex justify-center items-center">0</div>
                                        </div>

                                        <div className="border h-30 w-full flex flex-col items-center justify-between">
                                            <div className="border border-red-600 text-sm text-gray-500 font-semibold">Nº387</div>
                                            <div className="border border-red-600 text-lg text-gray-800 font-bold">Turtwig</div>
                                            <div className="h-8 px-2 flex justify-center items-center bg-green-300 text-base text-gray-800 font-semibold rounded-md">Grass</div>
                                        </div>
                                        

                                    </div>


                                </div>
                            })}
                </div>
                
                {/* Load More Container */}
                <div className="border h-16 w-full flex justify-center items-center">
                    <div className="border h-14 w-10/12 flex justify-center items-center rounded">Load More</div>
                </div>

                {/* Maybe more blocks */}


                {/* Footer Container */}
                <div className="border h-auto w-full flex justify-center items-center">
                        
                    {/* Footer */}
                    <div className="border h-48 w-full bg-gray-200">

                            <div className="border flex justify-center items-center">Links</div>

                    </div>  

                </div>



            </div>
        
        </>
    )
}

export default Homepage;