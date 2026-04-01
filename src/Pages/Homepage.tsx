
type PokemonNameData = {
    name: string;
    type: string[];
}

function Homepage(){
    const pokemonData: PokemonNameData[] = [
        {name: "Turtwig", type: ["Grass"]},
        {name: "Grottle", type: ["Grass"]},
        {name: "Torterra", type: ["Grass", "Ground"]},
    ]

    return(
        <>
            {/* Parent Container */}
            <div className="h-screen w-screen bg-gray-100">

                {/* Header Container*/}
                <div className="border h-16 w-full mb-12">
                    
                    {/* Header */}
                    <div className="border h-full w-full">
                        <div className="h-full w-1/3 flex justify-center items-center">Pokemon</div>
                    </div>

                </div>

                {/* Pokemons Container */}
                <div className="border h-auto w-full flex flex-col items-center">

                    {/* Pokemons Cards */}
                    {pokemonData.map((pokemon, index) => {
                        return <div key={index} className={`border h-auto w-10/12 mb-12 ${false ? `pb-16` : ``} rounded`}>
                                    {/* Pokemon Tile */}
                                    <div className="h-52 bg-white shadow-lg rounded-3xl">

                                        <div className="h-18 w-full flex justify-center">
                                            <div className="border h-10 w-10 -mt-5 flex justify-center items-center">0</div>
                                        </div>

                                        {/* Description */}
                                        <div className="h-30 w-full flex flex-col items-center justify-between">
                                            {/* Nº */}
                                            <div className="text-sm text-gray-500 font-semibold">Nº387</div>

                                            {/* Name */}
                                            <div className="text-lg text-gray-800 font-bold">{pokemon.name || "Turtwig"}</div>

                                            {/* Types */}
                                            <div className="h-8 w-40 max-w-48 flex justify-around">
                                                {pokemon.type.map((type, index) => {
                                                    return <div key={index} className="h-8 px-2 flex justify-center items-center bg-green-300 text-base text-gray-800 font-semibold rounded-md">{type || "Grass"}</div>
                                                })}
                                            </div>
                                        </div>
                                        

                                    </div>


                                </div>
                            })}
                </div>
                
                {/* Load More Container */}
                {/* <div className="border h-16 w-full flex justify-center items-center">
                    <div className="border h-14 w-10/12 flex justify-center items-center rounded">Load More</div>
                </div> */}

                {/* Maybe more blocks */}


                {/* Footer Container */}
                {/* <div className="border h-auto w-full flex justify-center items-center"> */}
                        
                    {/* Footer */}
                    {/* <div className="border h-48 w-full bg-gray-200">

                            <div className="border flex justify-center items-center">Links</div>

                    </div>   */}

                {/* </div> */}



            </div>
        
        </>
    )
}

export default Homepage;