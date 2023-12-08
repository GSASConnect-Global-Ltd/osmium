

function BlogPost() {
    return (
        <div className="w-[384px] h-[523px] pt-[24px] pr-[24px] pb-[32px] pl-[24px] shadow-xl mr-4">
                <div className="">
                    <img src="/blogImage.png" alt="" className="w-[336px] h-[240]" />
                    <div className="mt-10">
                        <p className="text-[#101828] text-2xl font-semibold">UX review presentations</p>
                        <p className="text-[#667085] text-sm mt-4">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                    </div>
                    <div className="mt-10">
                        <p className="text-sm text-[#101828] font-semibold">Olivia Rhye</p>
                        <p className="text-sm text-[#667085]">20 Jan 2022</p>
                    </div>
                </div>
            </div>
    );
}

export default BlogPost;