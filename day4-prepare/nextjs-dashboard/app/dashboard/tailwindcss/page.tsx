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
                {[1, 2, 34, 5].map((item, index) => {
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
            <div className="space-y-[10px] py-1 ">
                <div className="odd:bg-black ">fdsajdfsa</div>
                <div className="even:bg-red-300">fdsajdfsa</div>
                <div className="">fdsajdfsa</div>
                <div className="">fdsajdfsa</div>
                <div className="">fdsajdfsa</div>
            </div>
            <input type="text" placeholder="请输入内容。。。" className=" placeholder-red-400 placehold text-[2rem]" />
            <div className=" rounded-full bg-black text-white text-center h-[2rem] leading-[2rem]">22</div>
            <button className=" disabled:hover:bg-sky-500 border-purple-200 border-[2px] rounded-full px-[10px] hover:text-white border-separate text-purple-500 hover:bg-purple-500 active:text-purple-900">Message</button>
            <div className=" space-y-2 text-slate-400 inline-block truncate w-40">撒的风景金凤的撒娇啊是东方科技大厦发空间里的撒风口浪尖打死</div>

            <div className="group w-64 p-6 bg-white rounded-lg shadow-md cursor-pointer transition-colors hover:bg-gray-50">
                <h3 className="font-bold text-gray-800 group-hover:text-blue-500 transition-colors">卡片标题</h3>
                <p className="mt-2 text-gray-500 group-hover:text-gray-700">卡片描述文字</p>
                <i className="fa-solid fa-arrow-right mt-4 text-gray-400 group-hover:text-blue-500 transition-colors"></i>
                <div className=" fa-solid"></div>
            </div>

            <div className=" relative w-1/2 h-10 bg-slate-500 text-white">
                <div className=" absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">1</div>
            </div>

            <ul className="flex flex-wrap justify-center text-red-500 group pt-[1rem] space-y-3">
                {
                    new Array(10).fill(123).map(item => <li className="w-full text-center group-hover:bg-black">{item}</li>)
                }
                <div className="group-hover:text-red-100">123</div>
            </ul>

            <ul className="space-y-[1rem]">
                {
                    new Array(10).fill(123).map(item => <li className="odd:text-red-500 first:bg-purple-400">{item}</li>)
                }
            </ul>
            <div className="flex flex-col">
                <div style={{'margin': '20px'}}>
    111
                </div>
                <div style={{'margin': '20px'}}>
    111
                </div>

            </div>
        </div>
    )
}