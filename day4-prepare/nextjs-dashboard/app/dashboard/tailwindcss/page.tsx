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
            <div className="mx-auto w-auto h-[50px] items-center bg-[#eee] text-center rounded-full gap-5 text-[red] text-[20px] hover:text-[30px] cursor-pointer px-[10px] box-content flex justify-center">
              <div className="flex-1 flex-shrink-0 text-nowrap">范德萨范德萨萨</div>
              <div className="flex-1">范德萨范德萨</div>
              <div className="flex-1 ">范德萨范德萨</div>
              <div className="flex-1">范德萨范德萨</div>
            </div>
            <div className="outline mt-[10px] h-[50px] leading-[50px] rounded-full shadow-black shadow-lg overflow-hidden text-center  pb-4">
              减肥的撒酒疯 减肥的撒酒疯 减肥的撒酒疯 减肥的撒酒疯
            </div>
            <div className="space-y-[10px]">
              <div className=" ">fdsajdfsa</div>
              <div className="">fdsajdfsa</div>
              <div className="">fdsajdfsa</div>
            </div>
            <button  className=" disabled:hover:bg-sky-500 border-purple-200 border-[2px] rounded-full px-[10px] hover:text-white border-separate text-purple-500 hover:bg-purple-500 active:text-purple-900">Message</button>
        </div>
    )
}