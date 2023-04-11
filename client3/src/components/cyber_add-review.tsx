
export default function CyberAddReview() {
    return <div className="pt-20 pl-5 pb-10 flex justify-between">
        <textarea className="border border-aqua border-b-2 bg-black p-4 placeholder-aqua text-white text-lg outline-none"
            name="" id="" cols="44" rows="4" placeholder="Type our review..."></textarea>
        <div className="flex flex-col justify-between items-end">
            <input className="bg-black border-aqua border-b-2 placeholder-aqua text-lg outline-none" style={{width: 330, lineHeight: '40px'}} placeholder="Signature..." type="text" />
            <button className="text-aqua uppercase text-2xl bg-button bg-no-repeat" style={{height: 62, width: 264}}>Submit</button>
        </div>
    </div>
}