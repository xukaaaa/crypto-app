import React from 'react'

function SearchLoading() {
    return (
        <>
            <p className="pl-2 flex mb-2 text-[#808a9d] text-xs items-stretch">Cryptoassets</p>
            {Array(3)
                .fill('')
                .map((item, index) => (
                    <div
                        key={index}
                        className="animate-pulse flex items-center justify-between w-full h-10 p-[10px] rounded-lg"
                    >
                        <div className="flex items-center">
                            <div className="h-5 w-5 mr-2 bg-slate-200 rounded-full" />
                            <span className="mr-[6px] h-4 w-52 rounded-xl bg-slate-200"></span>
                        </div>
                        <span className="h-4 w-8 rounded-xl bg-slate-200"></span>
                    </div>
                ))}
        </>
    )
}

export default SearchLoading
