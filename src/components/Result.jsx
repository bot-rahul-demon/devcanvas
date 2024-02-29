import React from 'react'

function Result({srcCode}) {
    return (
        <div>
            <div className="bg-[#282c34] p-4 shadow mt-4 rounded-lg">
                <div className="justify-between flex items-center">
                    <h2 className="text-lg font-semibold mb-2 text-white">
                        Result
                    </h2>
                    <p style={{color: "white", opacity: "0.5", fontSize:"1rem", textAlign:"center" ,marginTop: "-1rem", marginBottom: "0"}}>{'<Neeraj Khanduri/>'} </p>
                </div>
                
                <iframe
                    className="w-full h-52 border border-gray-600 rounded-md"
                    srcDoc={srcCode}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                >
                </iframe>
                
            </div>
        </div>
    )
}

export default Result