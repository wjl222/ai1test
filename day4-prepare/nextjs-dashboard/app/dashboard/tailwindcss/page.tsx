import Image from "next/image";

export default function Tailwindcss() {
    return (
        <div>
            <div className="p-6 max-w-sm mx-auto bg-red-50 rounded-xl shadow-2xl flex items-center gap-x-4">
                <div className=" shrink-0">
                    <Image className=" w-[30px]" src="/111.png" alt="" width="100" height={100}></Image>
                </div>
                <div>
                    <div className=" text-xl font-medium text-black">ChitChat</div>
                    <div className="text-slate-500">You have a new message</div>
                </div>
            </div>
            <div className="bg-sky-500 w-[120px] text-center rounded-[8px] text-white mx-auto mt-10 text-[16px] p-1 hover:text-red-500  focus:ring focus:ring-violet-300">
                save Change 
            </div>

            <ul className="p-6 divide-y divide-slate-200">
                {[1,2,34,5].map((item, index) => {
                    return <li key={index} className="flex">
                        <Image className=" h-10 rounded-full" src="/111.png" alt="" width="100" height={100}></Image>
                    </li>
                })}
            </ul>
        </div>
    )
}