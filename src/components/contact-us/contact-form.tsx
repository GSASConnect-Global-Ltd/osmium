import React, { useState, FormEvent } from "react";
// import { useMutation } from "@tanstack/react-query";
import { AppLayout, Container } from "@/layouts";
// import { toast } from "sonner";
import { RightArrowCTA, RightArrow } from "@/components/icons";
// import { RightArrowCTA } from "../icons";
// import { LoadingSpinner } from "../icons";
// import { sanityClient } from "@/config";

interface IContactInfo {
  _type: string;
  full_name: string;
  email: string;
  phone: string;
  message: string;
  company_name: string;
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [desc, setDesc] = useState("");

  //   const { isPending, mutateAsync } = useMutation({
  //     mutationFn: (data: IContactInfo) =>
  //       sanityClient.create(data).then((res) => {
  //         return res;
  //       }),
  //     onSuccess(data) {
  //       toast.success("Your message has been sent");
  //     },
  //   });

  //   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     try {
  //       await mutateAsync({
  //         _type: "guest",
  //         full_name: name,
  //         email: email,
  //         phone: phoneNo,
  //         message: desc,
  //         company_name: companyName,
  //       });

  //       setName("");
  //       setCompanyName("");
  //       setEmail("");
  //       setPhoneNo("");
  //       setDesc("");
  //     } catch (error) {
  //       toast.error("Something went wrong, try again");
  //     }
  //   };

  return (
    <div className="py-20">
      <Container>
        <div className="space-y-16">
          <h1 className="text-heading-three font-bold md:text-heading-two">
            Let us help you realize the ideas you have in mind
          </h1>
          <form
            // onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:gap-10"
          >
            <div className="grid grid-cols-1 gap-x-5 gap-y-14 md:grid-cols-2">
              <div className="flex flex-col gap-14 border-b border-slate-700">
                <label className="md:text-2xl" htmlFor="name">
                  Name*
                </label>
                <input
                  className="outline-none md:text-lg"
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-14 border-b border-slate-700">
                <label className="md:text-2xl" htmlFor="company-name">
                  Company Name*
                </label>
                <input
                  className="outline-none md:text-lg"
                  id="company-name"
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-14 border-b border-slate-700">
                <label className="md:text-2xl" htmlFor="email">
                  Email*
                </label>
                <input
                  className="outline-none md:text-lg"
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-14 border-b border-slate-700">
                <label className="md:text-2xl" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="outline-none md:text-lg"
                  id="phone"
                  type="text"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-14 border-b border-slate-700 md:col-span-2">
                <label className="md:text-2xl" htmlFor="desc">
                  Project Description *
                </label>
                <textarea
                  required
                  className="outline-none md:text-lg"
                  id="desc"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
            </div>

            <div className="self-end">
              <button
                // disabled={isPending}
                className="group flex w-full items-center gap-4 rounded-[40px] border border-primary bg-primary px-10 py-4 text-black transition-all duration-100 hover:bg-transparent hover:text-primary disabled:cursor-not-allowed md:w-max md:text-[1.75rem]"
              >
                {/* {isPending ? (
                  <LoadingSpinner fill="black" size="34" />
                ) : (
                  <>
                    <span className="mx-auto font-semibold md:mx-0">
                      Submit
                    </span>{" "}
                    <RightArrowCTA />
                  </>
                )} */}
                <>
                  <span className="mx-auto font-semibold md:mx-0">Submit</span>{" "}
                </>
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
